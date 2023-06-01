const Users=require("../scehma/userModel")
const Posts=require("../scehma/model")
const { Op } = require("sequelize")



// console.log(Users,Posts,"All model")

const manyToMany=async(req,res)=>{
  const data= await Users.findAll({
    include: [{
        model:Posts,
        //  as:"2nd",
        through:{
          attributes:
          ["postId"],
        as:"3rd"},
    attributes:["title"],
   
   
  }],
    attributes:["name","email"],
    where: {
        id:{
            [Op.eq]:1
        }
       
    },
    as:"userInfo"
  
  })
    let resp={
        data:data  
    }
    return   resp;
}

module.exports={manyToMany}