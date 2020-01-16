const express = require('express');
const mongoose = require('mongoose');
const users = mongoose.model('users');

const aes256 = require('aes256');
 
/*---------------------------------------------------------------------------*/

exports.homeRedirect = function (req,res,next){

    res.render ("index",{req:req,res:res});

}

exports.home = function (req,res,next){

    res.render ("home",{req:req,res:res});
}


exports.register = async function (req,res,next){


    if(req.body.pass && req.body.name && req.body.email){

            var password = aes256.encrypt("OMG!YouAreGreatAwesomeDude!?!", req.body.pass);

            console.log(password);

            var obj = {name:req.body.name, email:req.body.email, pass: password}

            const query = users.find({name:req.body.name});
            query instanceof mongoose.Query;
            const isavailble = await query;
            console.log(isavailble);

            if(isavailble==''){

                try{
                    
                    const user = new users(obj);
                    console.log(user);

                    await user.save();
                    console.log("User added");
                    res.send({
                    'msg':'success',
                    'data':'You have successfully registered!'
                    });
                }
                catch(err){
            
                    console.log("Error in registration!!");
            
                    res.status(422).send({
                        'msg':'error',
                        'data':'Something went wrong!'
                    });
                }
            } else {
                res.send({
                    'msg':'error',
                    'data':'User with name already registered! '
                });   
                
          }
    
     } else {
        res.send({
            'msg':'error',
            'data':'Please enter required fields!'
        });     
    }
    

}

exports.signin12 = async function (req,res,next){

    if(req.body.your_name && req.body.your_pass){

        const query = users.find({name:req.body.your_name});
        query instanceof mongoose.Query;
        const docs = await query;
        console.log(docs);
        console.log("********************");
    
        if(docs==''){
            res.send({
                'msg':'error'
    
            }); 
            return false;
        }
        else{
    
            try{
    
                var pass = aes256.decrypt("OMG!YouAreGreatAwesomeDude!?!", docs[0].pass);
    
    
                console.log(req.body.your_name == docs[0].name && req.body.your_pass == pass);
                console.log("-=============>")
                if(req.body.your_name == docs[0].name && req.body.your_pass == pass){
    
                    req.session['Username'] = docs[0].name;
                    
                    console.log("in If")
                    res.send({
                        'msg':'success',
                        'data':'You have successfully logged in!'
                    });   
                    return true;     
                }
                else{
                    console.log("In else")
                    res.send({
                        'msg':'error',
                        'data':'Something went wrong!'        
                    }); 
                }
            }
            catch(e){
    
                console.log("in catch");
                console.log(e);
    
                res.send({
                    'msg':'error',
                    'data':'Something went wrong!'      
                }); 
            }
          
        }

    }
    else{
        res.send({
            'msg':'error',
            'data':'Please enter required field!'
        }); 
    }
    
}

exports.logoutUser = function (req,res,next){

    let logout = req.body.logout;

    if(logout == "true"){

        req.session.destroy((error)=>{
            if(error){
                console.log("session error here in logout");
              console.log(error);
            }
            else{
                console.log('logout Success')
            }
         });
        res.send({
            'msg':'logout'
        });

    }else{
        console.log('logout error')
    }
}
