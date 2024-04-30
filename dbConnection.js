const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://oshaddissanayake1997:WL7lXRBYWEVgk9VF@cluster0.crpmhic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;