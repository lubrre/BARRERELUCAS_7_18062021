const db = require("../models");
const Post = db.posts;
const User = db.users;
const Comment = db.comments;
const fs = require('fs');

// Create Post

exports.createPost = (req, res, next) => {
  // Analyse le post en utilisant une chaîne de caractères
  if (!req.body.title || !req.body.text) {
    return res.status(400).send({
      message: "Votre message createPost ne peut pas être vide"
    });
  }
  const post = {
    title: req.body.title,
    text: req.body.text,
    userId: req.body.userId,
    // imageUrl: req.body.content && req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: null,
  };

  //Enregistre le post dans la base de données
  Post.create(post)
    .then(() => res.status(201).json({ message: 'Post enregistré !' }))
    .catch((error) => {
      console.log(error)
      return res.status(400).json({ message: "erreur post controller" })
    });
};

// All Posts

exports.findAll = (req, res, next) => {

  Post.findAll({
    include: [{ model: User, Comment }],
    order: [['createdAt', 'DESC']],
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: err.message || "Une erreur s'est produite lors de la récupération"
      });
    });
};

// OnePost

exports.getOnePost = (req, res, next) => {
  Post.findOne({
    where: { id: req.params.postId },
    include: { model: User, Comment },
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
    res.status(500).send({
      message: err.message || "Une erreur s'est produite lors de la récupération"
    });
  });
};



// Signal post

exports.signalPost = (req, res, next) => {
  const id = req.params.postId;
  // console.log("&&&",id)
  Post.update({ isSignaled : true }, {
    where: {
      id
    }
  }).then(data => {
      if (!data) {
        res.status(404).send({
          message: `Impossible de modifier le post avec id=${id}`
        });
      } else res.send({ message: "Post modifié avec succes ! " });
    })
    .catch(err => {
      res.status(500).send({ message: "Erreur avec la modification ud post avec l'id" + id });
    });
};

/// get all report

exports.getAllReports = (req, res, next) => {
  Post.findAll({
    order: [['createdAt', 'DESC']],
    where:{
      isSignaled: true,
    }
  })
  .then(data => {
    // console.log("####", data)
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

// delete post

exports.deletePost = (req, res) => {
  const id = req.params.id;
  Post.destroy({
    where: { id: id }
  })
    .then(() => res.status(200).json({ message: 'Post supprimé' }))
    .catch(error => res.status(509).json({ error }));
};

// Modify Post 

exports.modifySignaledPost = (req, res, next) => {
  const id = req.params.id;
  // console.log("666", id)
  Post.update({
    isSignaled: false,
  },
  {
    where: {id: id}
  })
  .then((Post)=> {res.status(204).json({message: "Signalement du message retiré !"}) })
  .catch((err)=> res.status(500).send({message: "err"}));
};