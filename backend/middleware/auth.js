const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=>{
    try{
        // console.log("@@@@", req.headers.authorization)
        const token = req.headers.authorization.split(' ')[1];
        // console.log("0022",token)
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken.userId;
        if(req.body.userId && req.body.userId !== userId){
            throw 'User Id non valable';
        }else{
            next();
        }
    }catch (error){
        // console.log("5436", error)
        res.status(401).json({error: error | 'requête non authentifiée !'});
    }
}