let client = require('../dbConnection');

let collection = client.db().collection('marvel');

function postMarvel(marvel, callback) {
    collection.insertOne(marvel,callback);
}

function getAllMarvel(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postMarvel,getAllMarvel}