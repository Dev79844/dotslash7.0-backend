// migrations/20240127150000-create-key-assets.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('key_assets', {
      assetId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      businessId: {
        type: Sequelize.BIGINT,
        references:{
          model: 'businesses',
          key: 'businessId'
        }
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('key_assets');
  },
};
