"use strict";
/** @type {import('sequelize-cli').Migration} */
//   name: DataTypes.STRING,
// password: DataTypes.STRING,
// phone: DataTypes.STRING,
// zalo: DataTypes.STRING,
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Categorys", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      code: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      subtitle: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Categorys");
  },
};
