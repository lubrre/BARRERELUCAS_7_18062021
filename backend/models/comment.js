module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      isSignaled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  
    return Comment;
  };