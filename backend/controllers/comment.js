const db = require("../models/index");
const Comment = db.comments;
const Post = db.posts;
const User = db.users;

// Créer un commentaire

exports.createComment = (req, res, next) => {
  const commentObject = req.body;
  console.log(req.body)
  const comment = new Comment({ ...commentObject });
  comment
    .save()
    .then((response) => {
      console.log("@@", response)
      return res.status(201).json({ message: "commentaire enregistré" })
    })
    .catch((error) => {
      console.log("###", error, commentObject)
      return res.status(400).json({ message: "erreur comment controller" })
    });
};

// Afficher tous les commentaires

exports.getAllComments = (req, res, next) => {

  Comment.findAll({
    where: { postId: req.params.postId },
    include: [{ model: User, Post }],
    order: [['createdAt', 'DESC']],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération des commentaires"
      });
    });
};

// Signaler commentaire

exports.signalComment = (req, res, next) => {
  const id = req.params.postId;
  console.log("&&&",id)
  Comment.update({ isSignaled : true }, {
    where: {
      id
    }
  }).then(data => {
      if (!data) {
        res.status(404).send({
          message: `Impossible de modifier le commentaire avec id=${id}`
        });
      } else res.send({ message: "Commentaire modifié avec succes ! " });
    })
    .catch(err => {
      res.status(500).send({ message: "Erreur avec la modification ud post avec l'id" + id });
    });
};


/// get all report

exports.getAllReports = (req, res, next) => {
  Comment.findAll({
    order: [['createdAt', 'DESC']],
    where:{
      isSignaled: true,
    }
  })
  .then(data => {
    console.log("##comment##", data)
      return res.status(201).json(
        data
      )
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération"
      });
    });
};

// delete comment

exports.deleteComment = (req, res) => {
  const id = req.params.id;
  Comment.destroy({
    where: { id: id }
  })
    .then(() => res.status(200).json({ message: 'Commentaire supprimé' }))
    .catch(error => res.status(509).json({ error }));
};

// Modify comment 

exports.modifySignaledComment = (req, res, next) => {
  const id = req.params.id;
  console.log("666", id)
  Comment.update({
    isSignaled: false,
  },
  {
    where: {id: id}
  })
  .then((Post)=> {res.status(204).json({message: "Signalement du commentaire retiré !"}) })
  .catch((err)=> res.status(500).send({message: "err"}));
};