const Users=require("../scehma/userModel")
const Posts=require("../scehma/model")
const { response } = require("express")
const { Op } = require("sequelize")

console.log(Users,Posts,"both data")




const oneToOne=async(req,res)=>{
  const data= await Users.findAll({
    include: [{
        model:Posts,
    attributes:["title"]
  }],
    attributes:["name","email"],
    where: {
        id:4
    },
  
  })
    let resp={
        data:data   
    }
    return resp;
}
const oneToMany=async(req,res)=>{
    const data= await Users.findAll({
      include: [{
          model:Posts,
          as:"postsData",
      attributes:["title"]
    }],
      attributes:["name","email"],
      where: {
          id:4
      },
    
    })
      let resp={
          data:data  
      }
      return resp;
  }
module.exports={oneToOne,oneToMany}