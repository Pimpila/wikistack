var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack');

var Page = sequelize.define('page', {
  title: Sequelize.STRING,
  urlTitle: Sequelize.STRING,
  content: Sequelize.TEXT,
  status: Sequelize.BOOLEAN
});

var User = sequelize.define('user', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
})
