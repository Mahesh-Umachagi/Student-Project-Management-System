var MongoClient = require('mongodb').MongoClient;
var mdbo,dbo;
var url = "mongodb://localhost:27017";
MongoClient.connect(url,(err,db)=>{
    if(err){
        throw err;
    }
    mdbo=db;
    dbo=db.db("Project_Tables")

})

function closeConnection(){
    mdbo.close();
}
// Fetching All Project
function fetchproject(callback){
    dbo.collection("Project").find({}).toArray((err,result)=>{
        callback(err,result);
    })
}

// Fetching One project
function fetchprojectOne(t,callback){
        dbo.collection("Project").find({Title:t}).toArray((err,result)=>{
            callback(err,result);
        })
    }

    // Insert  Project
    function insertproject(data,afterfetch){
        dbo.collection("Project").insertOne(data,(err,result)=>{
            afterfetch(err,result);
        })
    }
// Update Project
function updateproject(nm,Tech_used,callback){
        
    dbo.collection("Project").updateOne({Title:nm},{$set:Tech_used},(err,result)=>{
        callback(err,result);
    })

}



// Delete Project
function deleteproject(t,afterfetch){
    dbo.collection("Project").deleteOne({Title:t},(err,result)=>{
        afterfetch(err,result);
    })
}

// fetch
function fetchstudent(callback){
    dbo.collection("student").find({}).toArray((err,result)=>{
        callback(err,result);
    })
}

// fetch one
function fetchstudentOne(ID,callback){
    dbo.collection("student").find({student_ID:ID}).toArray((err,result)=>{
        callback(err,result);
    })
}
// Insert
function insertstudent(data,callback){
        dbo.collection("student").insertOne(data,(err,result)=>{
            callback(err,result);
        })
    }

 // Update 
function updatestudent(nm,student_name,callback){
        dbo.collection("student").updateOne({student_ID:nm},{$set:student_name},(err,result)=>{
        callback(err,result);
        })

    }
//  Delete
function deletestudent(ID,callback){
        dbo.collection("student").deleteOne({student_ID:ID},function(err,result){
            callback(err,result);
        })
    }
    function deletestudentmany(ID,callback){
        dbo.collection("student").delete({},function(err,result){
            callback(err,result);
        })
    }
    function closeConnection(){
        mdbo.close();
    }



exports.fetchproject=fetchproject;
exports.fetchprojectOne=fetchprojectOne;
exports.insertproject=insertproject;
exports.updateproject=updateproject;
exports.deleteproject=deleteproject;
exports.closeConnection=closeConnection;


exports.fetchstudent=fetchstudent;
exports.fetchstudentOne=fetchstudentOne;
exports.insertstudent=insertstudent;
exports.updatestudent=updatestudent;
exports.deletestudent=deletestudent;
exports.deletestudentmany=deletestudentmany;
exports.closeConnection=closeConnection;
