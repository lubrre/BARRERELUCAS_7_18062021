module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("post", {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    text: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    isSignaled: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });

  return Post;
};
