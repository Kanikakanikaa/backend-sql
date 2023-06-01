const Users = require("./scehma/userModel");
const Posts = require("./scehma/model");
const Tags = require("./scehma/tagModel");
const Employe = require("./scehma/employeModel");

//for add users
const addUsers = async (req, res) => {
  console.log("adusercall");
  const data = await Users.create({
    name: "kanika",
    email: "kk@gmail.com",
    age: 4,
    user_id: 8,
  });

  let response = {
    data: data,
  };
  return response;
};

//for add posts
const addPosts = async (req, res) => {
  console.log("adpost call");
  const data = await Posts.findOrCreate({
    where: {
      isLike: 2,
      title:"employee",
      user_id:4
      // defaults: {
      //   user_id: 8,
      // },
    },
  });
  console.log(data);
  // Posts.destroy({
  //   where:{
  //     user_id:8
  //   }
  // })
  let response = {
    data: "sdlkfjhk",
  };
};
const addTags = async (req, res) => {
  console.log("addTags call");
  const data = await Tags.create({
    postId: 1,
    userId: 1,
  });

  let response = {
    data: data,
  };
  return response;
};

const addEmploye = async (req, res) => {
  console.log("addEmploye call", Employe);
  const data = await Employe.create({
    name: "bbb",
    age: 10,
    gender: "male",
  });

  let response = {
    data: data,
  };
  return response;
};

module.exports = { addUsers, addPosts, addTags, addEmploye };
