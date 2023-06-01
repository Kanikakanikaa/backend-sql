const { DataTypes } = require("sequelize");
const sequelize = require("../connection");
const Posts = require("./model");
const Users = require("./userModel");

const Tags = sequelize.define("TAG", {
  // userId:DataTypes.INTEGER,
  // postId: DataTypes.INTEGER,
});
//many to many
Users.belongsToMany(Posts, { through: Tags });
Posts.belongsToMany(Users, { through: Tags });

module.exports = Tags;
