'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usu_usuario', {
      usu_id_usu: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncremente: true,
        primaryKey: true,
      },
      usu_des_nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      usu_des_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      usu_des_senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {},
};
