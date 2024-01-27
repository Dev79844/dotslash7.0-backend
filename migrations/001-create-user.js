'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users',{
      userId:{
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name:{
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name:{
        type:Sequelize.STRING,
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role:{
        type: Sequelize.ENUM('seller', 'user', 'admin'),
        defaultValue: 'user',
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users')
  },
  order:1,
};
