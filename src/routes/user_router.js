var Router = require('koa-router');
var router = new Router();
var UserQuery = require('../services/user');
const bcrypt = require('bcrypt');
const { errorMonitor } = require('koa');

router.get('/user', async (ctx) => {
    var list = await UserQuery.getAllUser()
    try {
        ctx.body = {
            status: 200,
            data: list
        }
    }
    catch(error){
        ctx.body ={
            status:400,
            data: error.message
        }
    }
})

router.get('/user/:id', async (ctx) => {
    var id = ctx.params.id;
    var data = await UserQuery.getUserById(id)
    try {
        ctx.body = {
            status: 200,
            data: data
        }
    }
    catch(error){
        ctx.body ={
            status:400,
            data: error.message
        }
    }
})

router.post('/register', async (ctx) =>{
    var values = ctx.request.body;
    values.password = bcrypt.hashSync(values.password, 20)
    var data = await UserQuery.addUser(values)
    //let result = await UserQuery.getUserById(data.insertId)
    try {
        ctx.body = {
            status: 200,
            data: data
        }
    }
    catch(error){
        ctx.body ={
            status:400,
            data: error.message
        }
    }
})

router.post('/login', async (ctx) =>{
    var value = ctx.request.body;
    let {username, password} = value;

    try {
        let user = await UserQuery.getUserByUsername(username);
        if(user && bcrypt.compareSync(password,user.password))
            ctx.body = {
                status: 200,
                data: {id: user.id, username: user.username, role: user.role}
            }
        
    else{
        ctx.body ={
            status:400,
            data: false,
            message: 'username or password are incorrect'
            }
    
        }
    }
    catch(error){
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})

router.put('/user/:id', async (ctx)=>{
    var id = ctx.params.id;
    var values = ctx.request.body;
    var data = await UserQuery.editUser(id,values)
    let result = await UserQuery.getUserById(id)
    try {
        ctx.body = {
            status: 200,
            data: data
        }
    }
    catch(error){
        ctx.body ={
            status:400,
            data: error.message
        }
    }
})

router.delete('/user/:id', async (ctx)=>{
    var id = ctx.params.id;
    await UserQuery.deleteUser(id)
    try {
        ctx.body = {
            status: 200,
            data: 'Deleted'
        }
    }
    catch(error){
        ctx.body ={
            status:400,
            data: error.message
        }
    }
})

module.exports = router;