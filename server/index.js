var express = require("express");
var bodyparse = require("body-parser");
var cors = require("cors");
var db = require("./project");
var api = express();

api.use(bodyparse.json())
api.use(bodyparse.urlencoded({extended:true}));
api.use(cors())


api.get("/Project",(request,response)=>{
db.fetchproject(function(err,result){
                if(err){
                    result={"error":"afyu"}
                    response.statusCode=404;
                }else{
                        response.statusCode=200;
                }
                response.send(JSON.stringify(result));
                response.end();
            })
    })


 api.get("/Project/:Title",(request,response)=>{
    var Title = (request.params.Title);
        db.fetchprojectOne(Title,function(err,result){
                        if(err){
                            result={"error":"afyu"}
                            response.statusCode=404;
                        }
                        else{
        
                            response.statusCode=200;
                        }
                        response.send(JSON.stringify(result));
                        response.end();
        
                    })
            })

api.post("/Project",(request,response)=>{
        var data = request.body;
            db.insertproject(data,function(err,result){
                            if(err){
                                result={"error":"afyu"}
                                response.statusCode=404;
                            }
                            else{
            
                                response.statusCode=200;
                            }
                            response.send(JSON.stringify(result));
                            response.end();
            
                        })
                })
    
api.put('/Project/:Title',(request,response)=>{
        var Title = (request.params.Title);
        var Tech_used= request.body;
        db.updateproject(Title,Tech_used,function(err,result){
            if(err){
            result={"error":"afyu"}
            response.statusCode=404;
            }
            else{
            response.statusCode=200;
                                        }
                                        response.send(JSON.stringify(result));
                                        response.end();
                        
                                    })
                            })


                api.delete("/Project/:Title",(request,response)=>{
                    var Title = (request.params.Title);
                        db.deleteproject(Title,function(err,result){
                                        if(err){
                                            result={"error":"afyu"}
                                            response.statusCode=404;
                                        }
                                        else{
                        
                                            response.statusCode=200;
                                        }
                                        response.send(JSON.stringify(result));
                                        response.end();
                        
                                    })
                            })

                            // api.delete("/Project/",(request,response)=>{
                                
                            //         db.deleteprojectall(function(err,result){
                            //                         if(err){
                            //                             result={"error":"afyu"}
                            //                             response.statusCode=404;
                            //                         }
                            //                         else{
                                    
                            //                             response.statusCode=200;
                            //                         }
                            //                         response.send(JSON.stringify(result));
                            //                         response.end();
                                    
                            //                     })
                            //             })


// fetch
api.get("/student",(request,response)=>{
    db.fetchstudent(function(err,result){
                    if(err){
                        result={"error":"no records found"}
                        response.statusCode=404;
                    }
                    else{
    
                        response.statusCode=200;
                    }
                    response.send(JSON.stringify(result));
                    response.end();
    
                })
        })
    
    // fetch One
    api.get("/student/:student_ID",(request,response)=>{
    var student_ID = parseInt(request.params.student_ID);
    db.fetchstudentOne(student_ID,function(err,result){
                            if(err){
                                result={"error":"no records found"}
                                response.statusCode=404;
                            }
                            else{
            
                                response.statusCode=200;
                            }
                            response.send(JSON.stringify(result));
                            response.end();
            
                        })
                })
    
    // Insert
    api.post("/student",(request,response)=>{
    var data = request.body;
    db.insertstudent(data,function(err,result){
                    if(err){
                    result={"error":"no records inserted"}
                    response.statusCode=404;
                    }
                    else{
                        response.statusCode=200;
                        }
                        response.send(JSON.stringify(result));
                        response.end();
                
                    })
                })
    
    //   Update
    api.put('/student/:student_ID',(request,response)=>{
    var student_ID = parseInt(request.params.student_ID);
    var student_name= request.body;
    db.updatestudent(student_ID,student_name,(err,result)=>{
            if(err){
                result={"error":"no records updated"}
                response.statusCode=404;
                }
            else{
                response.statusCode=200;
                }
                response.send(JSON.stringify(result));
                response.end();
                            
            })
        })
                   
    //  Delete
    api.delete("/student/:student_ID",(request,response)=>{
    var student_ID = parseInt(request.params.student_ID);
    db.deletestudent(student_ID,function(err,result){
                            if(err){
                                result={"error":"no records updated"}
                                response.statusCode=404;
                            }
                            else{
            
                                response.statusCode=200;
                            }
                            response.send(JSON.stringify(result));
                            response.end();
            
            })
    })
    api.delete("/student/",(request,response)=>{
        // var student_ID = parseInt(request.params.student_ID);
        db.deletestudentmany(function(err,result){
                                if(err){
                                    result={"error":"no records updated"}
                                    response.statusCode=404;
                                }
                                else{
                
                                    response.statusCode=200;
                                }
                                response.send(JSON.stringify(result));
                                response.end();
                
                })
        })







    api.listen(3000,console.log("waiting at 3000....."))