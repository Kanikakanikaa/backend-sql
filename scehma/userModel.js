const { DataTypes } = require("sequelize");
const sequelize = require("../connection");
const Emp = require("./employeModel");
const Posts = require("./model");

  const Users = sequelize.define(
    "USERS",
    {
      name: {
        type: DataTypes.STRING,
        //setter
        set(val){
        this.setDataValue("name",val+"Rani")
        }
      },
      email: {
        type: DataTypes.STRING,
        get(){
        return this.getDataValue("email","kk"+this.name)
        }
      },
      age: {
        type: DataTypes.INTEGER,
      },
      user_id:{
        type:DataTypes.INTEGER
      },
    },
    {
      // timestamps:false,
      // createdAt:false,
      updatedAt: false,
      // engine: "myEngine",
    }
  );
  

// relation generate between two tables

// one to one
// Users.hasOne(Posts,{foreignKey:"user_id",name: 'posts'  }); // defaluts userId

//one to many
// Users.hasMany(Posts,{foreignKey:"user_id",as: 'postsData'  });
// Posts.belongsTo(Users);

//one to many with polymorphic
Users.hasMany(Posts,{foreignKey:"user_id",as: 'postsData',constraints:false,scope:{
  title:"users"
}  });
Posts.belongsTo(Users,{foreignKey:"user_id",as: 'postsData',constraints:false});

Emp.hasMany(Posts,{foreignKey:"user_id",constraints:false,scope:{
  title:"employee"
}})
Posts.belongsTo(Emp,{foreignKey:"user_id",constraints:false});

  //scopes
  Users.addScope("myName",{
    where:{
      name:"kanika"
    }
  }),
    //relational scope
Users.addScope("rltn",{
  include:[{
        model:Posts,
        attributes:["title","user_id"]
    }
],
where: {
    id:3 
},
}),



module.exports = Users;

