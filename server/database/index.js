const Sequelize = require('sequelize')
const Contacts = require('./models/contact.model')
const sequelize = new Sequelize('demo', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },  
    operatorsAliases: false
  });

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  sequelize.Contacts = Contacts(sequelize, Sequelize);

  module.exports = sequelize;
