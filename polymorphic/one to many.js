const Users = require("../scehma/userModel");
const Posts = require("../scehma/model");
const Emp = require("../scehma/employeModel");




const oneToMany = async (req, res) => {
    console.log("polymorfic call");
    // const data = await Users.findAll({
    //     include:[
    //         {
    //             model:Posts
    //         }
    //     ]
    // })

    const dataEmp = await Emp.findAll({
        include:[
            {
                model:Posts
                
            },
           
        ], 
    //     where:{
    //         name:"aaa"
 
    //     }
    })
  
    let response = {
      data: dataEmp,
    };
    return response;
  };
  module.exports={oneToMany}