'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
            model: "customers",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
      },
      product_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "products",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE"
      },
      purchase_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};