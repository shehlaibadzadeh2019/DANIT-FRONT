let mongo = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://danit:contrhuck23@ds113586.mlab.com:13586/danit";

MongoClient.connect(url,{ useNewUrlParser: true } , function (err, mongoclient) {
    if (err) throw err;
    let db = mongoclient.db("danit");
    db.collection('mongoclient_test').insertOne({a: 1}, {upsert: true}, function (err, result) {
        if (err) throw err;
        console.log("ok");
    });
    mongoclient.close();
});

// mongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     curbd = db.db("danit");
//     db.close();
// });