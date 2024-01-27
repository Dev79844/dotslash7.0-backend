'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('businesses', 'cin',{
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('businesses', 'gstin',{
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('businesses', 'pan',{
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('businesses', 'type',{
      type: Sequelize.ENUM('saas','content','marketplace','ecommerce','other')
    })
  },

  async down (queryInterface, Sequelize) {
  },
  order:5
};
