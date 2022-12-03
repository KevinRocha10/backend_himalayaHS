'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [{
      name: 'Administrador',
      password: "1234",
      email: "Admin@gmail.com",
      id_tipo: 1,
      createdAt: new Date,
      updatedAt: new Date,
    },
    {
      name: 'John Doe',
      password: "1234",
      email: "John@gmail.com",
      id_tipo: 2,
      createdAt: new Date,
      updatedAt: new Date,
    }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
