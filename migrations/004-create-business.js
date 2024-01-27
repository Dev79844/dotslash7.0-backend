// migrations/20240127130000-create-business.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('businesses', {
      businessId: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      addressId: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references:{
          model: 'addresses',
          key: 'addressId'
        }
      },
      short_desc: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      ttm_revenue: {
        type: Sequelize.STRING,
      },
      ttm_profit: {
        type: Sequelize.STRING,
      },
      monthly_revenue: {
        type: Sequelize.STRING,
      },
      monthly_profit: {
        type: Sequelize.STRING,
      },
      date_found: {
        type: Sequelize.STRING,
      },
      team_size: {
        type: Sequelize.STRING,
      },
      business_model: {
        type: Sequelize.TEXT,
      },
      tech_stack: {
        type: Sequelize.TEXT,
      },
      growth_opportunities: {
        type: Sequelize.TEXT,
      },
      reason_for_selling: {
        type: Sequelize.TEXT,
      },
      financing: {
        type: Sequelize.TEXT,
      },
      asking_price: {
        type: Sequelize.STRING,
      },
      asking_price_reasoning: {
        type: Sequelize.TEXT,
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('businesses');
  },
};
