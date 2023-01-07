var Router = require('koa-router')
//const multer = require('@koa/multer');

var router = new Router()
var Contact = require('../services/contact_us')


router.get('/contact_us', async(ctx) => {
    var list = await Contact.getAllContact()
    try{
        ctx.body = {
            status: 200,
            data: list
        }
    }catch(error){
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})


router.get('/contact_us/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await Contact.getContactById(id)
    try{
        ctx.body = {
            status: 200,
            data: data
        }
    }catch(error){
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})


router.post('/contact_us', async(ctx) => {

    let values = ctx.request.body

    console.log(values, "values")
    let data = await Contact.addContact(values)
    try{
        ctx.body = {
            status: 200,
            data: data
        }
    }catch(error){
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})


router.put('/contact_us/:id', async(ctx) => {
    let values = ctx.request.body
    let id = ctx.params.id
  let data = await Contact.editContact(id, values)
    try{
        ctx.body = {
            status: 200,
            data: data
        }
    }catch(error){
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})


router.delete('/contact_us/:id', async(ctx) => {
    let id = ctx.params.id
    await Contact.deleteContactById(id)
    try{
        ctx.body = {
            status: 200,
            data: 'DELETED'
        }
    }catch(error){
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})

module.exports = router