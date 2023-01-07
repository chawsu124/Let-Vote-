var Router = require('koa-router')

var router = new Router()
var Office = require('../services/office')
const office = require('../services/office')

router.get('/office', async(ctx) => {
    var list = await Office.getAllOffice()
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


router.get('/office/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await Office.getOfficeById(id)
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


router.post('/office', async(ctx) => {
    let values = ctx.request.body
    let data = await Office.addOffice(values)
    //let result = await stateDivision.getStateDivisonById(data.insertId)
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


router.put('/office/:id', async(ctx) => {
    let values = ctx.request.body
    let id = ctx.params.id
    let data = await Office.editOffice(id, values)
    //let result =  await stateDivision.getStateDivisonById(id)
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


router.delete('/office/:id', async(ctx) => {
    let id = ctx.params.id
    await office.deleteOffice(id)
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