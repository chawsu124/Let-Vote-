var Router = require('koa-router')

var router = new Router()
var Wards = require('../services/wards')

router.get('/getVoterListByWardId/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await Wards.getVoterListByWardId(id);
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

router.get('/wards', async(ctx) => {
    var list = await Wards.getAllWards()
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


router.get('/wards/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await Wards.getWardsById(id)
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


router.post('/wards', async(ctx) => {
    let values = ctx.request.body
    let data = await Wards.addWards(values)
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


router.put('/wards/:id', async(ctx) => {
    let values = ctx.request.body
    let id = ctx.params.id
    let data = await Wards.editWards(id, values)
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


router.delete('/wards/:id', async(ctx) => {
    let id = ctx.params.id
    await Wards.deleteWards(id)
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