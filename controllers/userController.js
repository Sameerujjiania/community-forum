const userModel = require('../models/userModel')



// exports.getUser = async (req,res) =>{
//     user =  await userModel.find({email: req.body});
//     res.json(req.body);
//     console.log(req.body);
// }

// exports.deleteUser = (req,res) =>{
//     userModel.findOneAndDelete()
//     res.json(req.body);
//     console.log(req.body);
// }

exports.createUser = async (req,res) =>{
    const user = await new userModel(req.body);
    try {
        user.save();
        res.json(user);
    }
    catch(err){
        console.log("not created")
    }
    // console.log(req.body);
}

// exports.updateUser = async (req,res) =>{
//     const updatedUser = userModel.findOneAnd
//     res.json(req.body);
//     console.log(req.body);
// }