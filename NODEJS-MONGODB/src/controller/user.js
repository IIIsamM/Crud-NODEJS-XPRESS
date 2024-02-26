const userSchema = require("../models/user");
const path= require("path")
const GetUser = (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))//data 
    .catch((error) => res.json({message: error}));//error
  
}

const PostUser = (req, res) => {
     const user = userSchema(req.body);
    user
    .save() // GUARDAR DATO
    .then(() => { return userSchema.find();})
    .then((data) =>res.render(path.join(__dirname,"..","..","/views","index.ejs"),{title:"guardado",users:data}))
    .catch((error) => res.json({message: error.message}));
}

const deleteUser=(req, res) => {
    
    const { id } = req.params;
    const { name, age, email , phone } = req.body;
    userSchema
    .deleteOne({ _id: id})
    .then(() => { return userSchema.find();})
    .then((data) =>res.render(path.join(__dirname,"..","..","/views","index.ejs"),{title:"guardado",users:data}))
    .catch((error) => res.json({message: error}));
}

const updateUser= (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema
    .updateOne({ _id: id}, { $set: {name, age, email} })
    .then(() => { return userSchema.find();})
    .then((data) =>res.render(path.join(__dirname,"..","..","/views","index.ejs"),{title:"guardado",users:data}))
    .catch((error) => res.json({message: error}));
}
const formUser=(req,res)=>{
    const id=req.params.id
    userSchema
    .findById(id)
    .then((data) => res.render(path.join(__dirname,"..","..","/views","form.ejs"),{title:"guardado",user:data}))//data 
    .catch((error) => res.json({message: error}));//error
}
module.exports = {GetUser, PostUser,deleteUser,updateUser, formUser};