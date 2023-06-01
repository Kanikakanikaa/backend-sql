const { DataTypes} = require("sequelize");
const sequelize = require("../connection");
const Emp = require("./employeModel");
const Users = require('./userModel')


  const Posts = sequelize.define(
    "POSTS",
    {
  isLike: {
    type:DataTypes.INTEGER
  },
  title:{
    type:DataTypes.STRING
  },
  decription:{
    type:DataTypes.STRING
  },
  user_id:{
    type:DataTypes.INTEGER
  },
    },
    {
      timestamps:false,

      // engine: "myEngine",
    }
  
  );
  module.exports = Posts;


