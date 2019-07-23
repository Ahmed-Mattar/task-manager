const mongoose = require('mongoose')
const validatior = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

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

// const me = new User({
//     name: '   Mattar   ',
//     email: '  AHMED@gmail.com  ',
//     password: '    whatishappening  '
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required:true
    },
    completed:{
        type: Boolean,
        default:false
    }
})

const task = new Task({
    description:"   walk the dog"
})

task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log(error)
})