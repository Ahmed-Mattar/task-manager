const mongoose = require('mongoose')
const validatior = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function (next) {
    // this gives us access to the individual document that are going to be saved
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User