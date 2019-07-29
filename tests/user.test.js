const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Mike',
    email: 'Mike@example.com',
    password: 'asdaer12'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
}) 



test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Mattar',
        email: 'Mattar@example.com',
        password: 'MyPass123!'
    }).expect(201)
})

test('Shoud login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'nonexistent@example.com',
        password: 'aaasssddd'
    }).expect(400)
})
