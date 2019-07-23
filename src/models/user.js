const mongoose = require('mongoose')
const validatior = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required:true,
        trim: true
    },
    password:{
        type: String,
        required:true,
        trim: true,
        minlength: 6,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw Error('Password cannot contain "password"')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validatior.isEmail(value)){
                throw new Error('Email is not valid')
            }
        }
    },  
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

module.exports = User