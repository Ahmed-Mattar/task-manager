// CRUD create read update delete
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient 

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) =>{
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db  = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Ahmed',
    //     age: 24
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //       name: 'Ramy',
    //       age: 34  
    // },{
    //       name:'riham',
    //       age:29
    // }],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
        description : "walk the dog",
        completed: false
        },
        {
        description : "walk the cat",
        completed: false
        },
        {
        description : "buy a new tv",
        completed: true
        }],(error,result) => {
            if(error){
              return console.log('Unable to insert documents!')
            }

            console.log(result.ops)
    })
    
})