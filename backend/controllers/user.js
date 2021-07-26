const bcrypt = require("bcrypt");
const db = require("../models");
const jwt = require('jsonwebtoken');
const { has } = require("../models/password");
const User = db.users;

exports.signup = async (req, res, next) => {
    if (req.body.username == null || req.body.email == null || req.body.password == null || req.body.last_name == null || req.body.first_name == null) {
        return res.status(400).json({ code: "MISSING_FIELDS", message: 'Merci de renseigner tous les champs !' });
    }
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = {
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash,
            };

            User.create(user)
                .then(user => res.status(201).json(user))
                .catch(error => res.status(501).json({ code: "UNKNOWN", message: 'Une erreur est survenue lors de la création de votre compte !' }));
        })

        .catch(error => {
            console.log(error)
            return res.status(501).json({ code: "UNKNOWN", message: 'Une erreur est survenue lors de la création de votre compte !' })
        });

}
exports.login = (req, res, next) => {

    if (!req.body.email && !req.body.password) {
        return res.status(400).json({ code: "MISSING_FIELDS", message: 'Merci de renseigner tous les champs !' });
    }

    User.findOne({
        where: {
            email: req.body.email,
        }
    })
        .then((user) => {
            console.log(user);
            if (!user) {
                return res.status(400).json({ code: "USER_NOT_FOUND", message: 'Adresse mail non-reconnue !' });
            }
            console.log(req.body);
            bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(403).json({ code: "INVALID_PASSWORD", message: 'Votre mot de passe est incorrect !' });
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '24h' }),
                        isAdmin: user.isAdmin,
                    });

                });
        })
        .catch((err) => {
            return res.status(400).json({ code: "UNKNOWN", message: 'Une erreur inconnue est survenue !' });
        });
};
// exports.findByPk = (req, res) => {
//     User.findByPk(req.params.id).then((user) => {
//         res.status(200).json({
//             status: true,
//             data: user,
//         });
//     });
// };
exports.modify = (req, res) => {
    // if (req.body.username == null || req.body.email == null || req.body.last_name == null || req.body.first_name == null) {
    //     return res.status(400).json({ code: "MISSING_FIELDS", message: 'Merci de renseigner tous les champs !' });
    // }
    if (!req.body.email && !req.body.username && !req.body.last_name && !req.body.first_name && !req.body.password) {
        return res.status(400).json({ code: "MISSING_FIELDS", message: 'Merci de renseigner tous les champs !' });
    }
    const id = req.params.id;
    User.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: hash,
        },
        { where: { id: id } })
        .then(() => {
            res.status(200).json({
                status: true,
                message: "Utilisateur modifié avec id = " + id
            });
        });
};
exports.delete = (req, res) => {
    const id = req.params.id;
    User.destroy({
        where: { id: id }
    })
        .then(() => res.status(200).json({ message: 'Utilisateur supprimé' }))
        .catch(error => res.status(509).json({ error }));
};