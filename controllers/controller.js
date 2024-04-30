let collection = require('../models/marvel');

const postMarvel = (req,res) => {
    let marvel = req.body;
    collection.postMarvel(marvel, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllMarvel = (req,res) => {
    collection.getAllMarvel((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}



const deleteMarvel = (req,res) => {
    let marvel = req.body;
    collection.deleteOne(marvel, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postMarvel,getAllMarvel}