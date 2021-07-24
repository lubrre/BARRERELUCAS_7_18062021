const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // console.log("7@@@@@@@@  auth/ReqHeaders  @@@@@@@", req.headers);
        const token = req.headers.authorization.split(' ')[1];
        // console.log("0022",token)
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const isAdmin = decodedToken.isAdmin;
        if (!isAdmin) {
            throw 'User Id non valable';
        } else {
            next();
        }
    } catch (error) {
        console.log("6@@@@@@@@  auth/CatchError  @@@@@@@", error)
        res.status(401).json({ error: error | 'requête non authentifiée !' });
    }
}