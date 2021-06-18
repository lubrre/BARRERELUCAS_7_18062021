module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      first_name: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      username: {
        type: Sequelize.STRING(25),
        allowNull: false,
        unique: true
      },
      isAdmin:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  
    return User;
  };
