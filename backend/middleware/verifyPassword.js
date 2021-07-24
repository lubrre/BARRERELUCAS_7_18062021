// On importe notre model passwordSchema
const passwordSchema = require('../models/password');

//Vérifie que le mot de passe valide le schema et le regex
module.exports = (req, res, next) => {
    const regexTrue = /[§!@#$%^&*().?{}|<>]/;
    const regexFalse = /[='":]/;
    if (!passwordSchema.validate(req.body.password) ||
        !regexTrue.test(req.body.password) ||
        regexFalse.test(req.body.password)
    ) {

        return res.status(401).json({ code: "BADLY_FORMATED_PASS", message: "Votre mot de passe doit contenir minimum une majuscule, une minuscule, un chiffre et un caractère spécial ! " });
    } else {
        next();
    }
};