const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/users');

const userschema = mongoose.Schema({
    user_name:String,
    user_email:String,
    user_image:String
})

module.exports = mongoose.model('user',userschema);