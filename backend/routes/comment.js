const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const commentsCtrl = require('../controllers/comment');

//comment
router.post("/", auth, commentsCtrl.createComment);
router.get('/:postId', auth, commentsCtrl.getAllComments);
router.get('/signal/:postId', auth, commentsCtrl.signalComment);

//admin
router.put('/modifySignaledComment/:id', auth, commentsCtrl.modifySignaledComment);
router.get('/signal/:commentId', auth, commentsCtrl.signalComment);
router.get("/signalComment", auth, commentsCtrl.getAllReportedComments);
router.delete("/deleteSignaledComment/:id", auth, commentsCtrl.deleteComment);

module.exports = router;