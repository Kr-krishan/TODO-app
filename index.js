//require express,path,db,Todo model
const express=require('express');
const path=require('path');

const port=3000;
const db=require('./config/mongoose');
const Todo=require('./models/todolist');

const app=express();

//setting view engine using ejs
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('assets'));

//to read form data
app.use(express.urlencoded());


//render on home page
app.get('/',function(req,res){

    Todo.find({},function(err,tasks){
        if(err){
            console.log('error during fetching contact from DB');
            return;
        }

        return res.render('home',{
           task_List:tasks 
        });
    });

})


//posting new task
app.post('/new-task',function(req,res){

    //if task is empty
    if(req.body.task=='' || req.body.category=='' || req.body.date==''){
        return res.redirect('back');
    }

    //creating task
    Todo.create({
        task:req.body.task,
        category:req.body.category,
        date:req.body.date
    },function(err,newTask){
        if(err){
            console.log('error in creating task');
            return;
        }
        
        return res.redirect('back');

    });

});


//delete task 
app.get('/delete-task',function(req,res){

    //now delete from db by id
    let tasks= Todo.findById(req.query.id);
    let id=req.query.id;

    //to delete more than one or one task
    Todo.deleteMany(tasks,function(err){
        if(err){
            console.log('error during delete from db');
            return;
        }
        return res.redirect('back');
    });
});


app.listen(port,function(err){
    if(err){
        console.log('error running express');
        return;
    }
    console.log('our server is up and running at port',port);
});