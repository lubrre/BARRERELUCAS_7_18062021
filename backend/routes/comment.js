const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const authAdmin = require('../middleware/auth-admin');
const commentsCtrl = require('../controllers/comment');

//comment
router.post("/", auth, commentsCtrl.createComment);
router.get('/getOne/:postId', auth, commentsCtrl.getAllComments);
router.get('/signal/:postId', auth, commentsCtrl.signalComment);

//admin
router.delete('/unsignal/:id', authAdmin, commentsCtrl.modifySignaledComment);
router.get('/signal/:commentId', auth, commentsCtrl.signalComment);
router.get("/signalComment", authAdmin, commentsCtrl.getAllReportedComments);
router.delete("/delete/:id", auth, commentsCtrl.deleteComment);

module.exports = router;