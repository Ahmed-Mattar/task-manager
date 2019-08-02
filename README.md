# Task-Application

a compelete task-manager  back-end application that let's you create new users and tasks associated with a specific user


## Getting Started

what request you can make 

```
POST '/users'   -to create new user

example:
{
	"name":"Mattar",
	"email":"acematar@gmail.com",
	"password":"myNameIsLagertha"
}
```

```
POST '/users/login'   -to login 

example:
{
	"email":"acematar@gmail.com",
	"password":"myNameIsLagertha"
}
```

```
GET '/users/me'   -to read profile
```

```
POST '/users/logout'   -to logout 

```

```
POST '/users/logoutAll' -to logout and delete all auth tokens 

```

```
DELETE '/users/me' -to delete user 
```
```
PATCH '/users/me' -to update user

example: to update password
{
	"password":"asdasd12"
}
```

```
POST '/tasks' -to create new task

example: 
{
	 "description" : "store in prod db",
	 "completed": true
}
```

```
GET '/tasks?sortBy=createdAt:asc'  -to get all tasks sorted 
```

```
GET '/tasks/id        -to get a specific task by id
```

```
PATCH '/tasks/id'    -to update a specific task by id
```

```
DELETE '/tasks/id  -to delete a specific task by id
```

```
POST form-data '/users/me/avatar'  -to upload an avatar profile pic
```

```
DELETE  '/users/me/avatar' -to delete the avatar profile pic
```




###  starting end-point
(https://mattar-task-manager.herokuapp.com/)

## Built With

* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [sendGrid](https://sendgrid.com/) - used their api to send emails to welcome new users and to users who deleted their accounts 
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) - used for hashing passwords 
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - used for authentication
* [mongodb](https://www.mongodb.com/) - MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database
* [mongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js
* [multer](https://www.npmjs.com/package/multer) - Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
* [sharp](https://www.npmjs.com/package/sharp) - High performance Node.js image processing
* [validator](https://www.npmjs.com/package/sharp) - A library of string validators and sanitizers.
* node.js
* javascript
* HTML,CSS

## dev dependencies
* [nodemon](https://nodemon.io/) - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [env-cmd](https://www.npmjs.com/package/env-cmd) - A simple node program for executing commands using an environment from an env file.
* [jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [supertest](https://www.npmjs.com/package/supertest) - provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.


