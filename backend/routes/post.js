const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const postsCtrl = require('../controllers/post');

//post
router.post('/', auth, postsCtrl.createPost);
router.get('/findAll', auth, postsCtrl.findAll);
router.get('/findOne/:postId', auth, postsCtrl.getOnePost); 
// router.delete('/:id', auth, postsCtrl.deletePost);

//admin
router.put('/modifySignaledPost/:id', auth, postsCtrl.modifySignaledPost);
router.get('/signal/:postId', auth, postsCtrl.signalPost);
router.get("/signaledPost", auth, postsCtrl.getAllReports);
router.delete("/deleteSignaledPost/:id", auth, postsCtrl.deletePost);
// router.delete("/:id", auth, postsCtrl.removeReport);

module.exports = router;