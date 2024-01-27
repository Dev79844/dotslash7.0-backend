// migrations/20240127140000-create-competitors.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('competitors', {
      competitorId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      competitor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      businessId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model:'businesses',
          key: 'businessId'
        }
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('competitors');
  },
  order:6
};
