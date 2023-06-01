const Posts = require("./scehma/model");
const Users=require("./scehma/userModel")

const Scope = async (req, res) => {


//pass condition in scope 
    const data = await Users.scope(['myName']).findAll({});

    //relational data 
    const dataPost = await Users.scope(["rltn"]).findAll({});
    // const dataPost = await Posts.findAll({});
    
    let response = {
      data:dataPost
    };
return response ;
};
module.exports = {Scope}