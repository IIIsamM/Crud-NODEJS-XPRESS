const userSchema = require("../models/user");
const GetHome = (req, res) => {

    userSchema
    .find()
    .then((data) => res.render ('index', {title: 'Inicio - Aprocom',users:data}))//data 
    .catch((error) => res.json({message: error}));//error
    
};

module.exports = {GetHome};