const express = require('express');
const app = express();
const path = require('path');
const usermodel = require('./models/user');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/signup',(req,res)=>{
    res.render('signup');
});

app.get('/read',async(req,res)=>{
    let users = await usermodel.find();

    res.render('read',{users});
});

app.get('/delete/:id',async(req,res)=>{
    let users = await usermodel.findOneAndDelete({_id:req.params.id});

    res.redirect('/read');
});

// find one particular data based on userid and fill up the form input data for updating
app.get('/edit/:userid',async(req,res)=>{
    let users = await usermodel.findOne({_id:req.params.userid});
    res.render('edit',{users});
})

// it will perform update the user information
app.post('/update/:userid',async(req,res)=>{
    let {name,email,image} = req.body;
    let users = await usermodel.findOneAndUpdate({_id:req.params.userid},{user_image:image,user_name:name,user_email:email},{new:true});
    res.redirect('/read');
})

app.post('/create',async(req,res)=>{
    let {name,email,image} = req.body;
    // here key names(user_name,...) are equals to user.js file schema names(user_name,...)
    let createuser = await usermodel.create({
        user_name:name,
        user_email: email,
        user_image: image
    });

    // after creating a user it will go to the read.ejs file 
    res.redirect('/read');
});

app.listen(5500);