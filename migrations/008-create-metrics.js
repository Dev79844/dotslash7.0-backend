// migrations/20240127160000-create-metrics.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('metrics', {
      metricId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      customers: {
        type: Sequelize.STRING,
      },
      arr: {
        type: Sequelize.STRING,
      },
      agr: {
        type: Sequelize.STRING,
      },
      businessId:{
        type: Sequelize.BIGINT,
        references:{
          model: 'businesses',
          key: 'businessId'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('metrics');
  },
};
