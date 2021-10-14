const express = require("express");


//var IBMCloudEnv = require('ibm-cloud-env');
//IBMCloudEnv.init("/path/to/the/mappings/file/relative/to/project/root");
//const mongoose = require("mongoose");
//const { MongoClient } = require("mongodb");

/**
const mongo = new MongoClient("mongodb://127.0.0.1:27019/my-app?authSource=admin", {
    auth: {
        username: "mongoadmin",
        password: "secret"
    }

})

mongo.connect().then((value) => console.log("connected 1")).catch((err) => console.log(err))



//const client = new mongo()
**/
const users = [];
/**
mongoose.connect("mongodb://mongodbtest:27017/my-app", {
    auth: {
        username: "admin",
        password: "password"
    }
}).then((value) => console.log("db connected")).catch((e) => console.log(e));


const users = mongoose.model("users", new mongoose.Schema({
    "id": Number,
    "name": String
}))
**/
const server = express();

server.get("/", async (r, re, nx) => {

    // const result = await users.find().catch((err) => console.log(err));

    re.send(users);
})

server.post("/", async (r, re, nx) => {

    /**
    const user = await users.insertMany([{
        id: 1,
        name: "stanley"
    }])
    **/

    users.push({
        id: 1,
        name: "stanley"
    })

    re.send(users)
})

server.listen(8080, () => console.log("running"))
