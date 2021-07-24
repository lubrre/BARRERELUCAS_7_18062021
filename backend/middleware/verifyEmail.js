// On importe le package email-validator qui permet de vérifier si le format de l'email est valide
const validator = require('email-validator');

// Vérifie que l'email est valide
module.exports = (req, res, next) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!validator.validate(req.body.email) || !regexEmail.test(req.body.email)) {
        return res.status(401).json({ code: "BADLY_FORMATED_email", message: "Email mal formaté" });
    } else {
        next();
    }
};