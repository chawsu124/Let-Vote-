var Router = require('koa-router')

var router = new Router()
var districtQuery = require('../services/district')


router.get('/getAllCandidatesByDistrict', async (ctx, next) => {
    var List = await districtQuery.getAllCandidatesByDistrict()
    try {
        ctx.body = {
            status: 200,
            data: List
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            message: error.message
        }
    }
})

router.get('/getCandidatesByDistrictId/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await districtQuery.getCandidatesByDistrictId(id);
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

router.get('/getVoterListByDistrictId/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await districtQuery.getVoterListByDistrictId(id);
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

router.get('/getOfficeByDistrictId/:id', async(ctx) => {
    var id=ctx.params.id;
    var list = await districtQuery.getOfficeByDistrictId(id);
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


router.get('/district', async(ctx) => {
    var list = await districtQuery.getAllDistrict()
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


router.get('/district/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await districtQuery.getDistrictById(id)
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


router.post('/district', async(ctx) => {
    let values = ctx.request.body
    let data = await districtQuery.addDistrict(values)
    console.log(data)
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


router.put('/district/:id', async(ctx) => {
    let values = ctx.request.body
    let id = ctx.params.id
    let data = await districtQuery.editDistrict(id, values)
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


router.delete('/district/:id', async(ctx) => {
    let id = ctx.params.id
    await districtQuery.deleteDistrictById(id)
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