const db = require("../models/index");
const Comment = db.comments;
const Post = db.posts;
const User = db.users;

// Créer un commentaire

exports.createComment = (req, res, next) => {
    const commentObject = req.body;
    console.log(req.body)
    const comment = new Comment({...commentObject });
    comment
        .save()
        .then(() => {
            return res.status(201).json({ message: "commentaire enregistré" })
        })
        .catch((error) => {
            res.status(401).json({ code: "UNKNOWN_ERROR", error });
        });
};

// Afficher tous les commentaires

exports.getAllComments = (req, res, next) => {

    Comment.findAll({
            where: { postId: req.params.postId },
            include: [{ model: User, Post }],
            order: [
                ['createdAt', 'DESC']
            ],
        })
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.status(401).json({ code: "UNKNOWN_ERROR", error });
        });
};

// Signaler commentaire

exports.signalComment = (req, res, next) => {
    const id = req.params.postId;

    Comment.update({ isSignaled: true }, {
            where: {
                id
            }
        }).then(data => {
            if (!data) {
                res.status(401).json({ code: "INVALID_USER_ID_FOR_UPDATE", error });
            } else res.send({ message: "Commentaire modifié avec succes ! " });
        })
        .catch(error => {
            res.status(401).json({ code: "UNKNOWN_ERROR", error });
        });
};


/// get all report

exports.getAllReportedComments = (req, res, next) => {
    Comment.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            where: {
                isSignaled: true,
            }
        })
        .then(data => {
            return res.status(201).json(
                data
            )
        })
        .catch(error => {
            res.status(401).json({ code: "UNKNOWN_ERROR", error });
        });
};



// delete comment

exports.deleteComment = (req, res) => {
    const id = req.params.id;
    Comment.destroy({
            where: { id: id }
        })
        .then(() => res.status(200).json({ message: 'Commentaire supprimé' }))
        .catch(error => res.status(401).json({ code: "UNKNOWN_ERROR", error }));
};

// Modify comment 

exports.modifySignaledComment = (req, res, next) => {
    const id = req.params.id;
    Comment.update({
            isSignaled: false,
        }, {
            where: { id: id }
        })
        .then(() => { res.status(204).json({ message: "Signalement du commentaire retiré !" }) })
        .catch((error) => res.status(401).json({ code: "UNKNOWN_ERROR", error }));
};