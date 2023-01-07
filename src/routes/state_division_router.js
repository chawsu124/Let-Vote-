var Router = require('koa-router')

var router = new Router()
var StateDivision = require('../services/state_division')

router.get('/getAllCandidatesByStateDivision', async(ctx) => {
    var list = await StateDivision.getAllCandidatesByStateDivision();
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

router.get('/getCandidatesByStateDivisionId/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await StateDivision.getCandidatesByStateDivisionId(id);
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
router.get('/getVoterListByStateDivisionId/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await StateDivision.getVoterListByStateDivisionId(id);
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


router.get('/getOfficeByStateDivisionId/:id', async(ctx) => {
    var id=ctx.params.id;
    var list = await StateDivision.getOfficeByStateDivisionId(id);
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


router.get('/state_division', async (ctx) => {
    var list = await StateDivision.getAllStateDivision()
    try {
        ctx.body = {
            status: 200,
            data: list
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})


router.get('/state_division/:id', async (ctx) => {
    var id = ctx.params.id
    var data = await StateDivision.getStateDivisionById(id)
    try {
        ctx.body = {
            status: 200,
            data: data
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})


router.post('/state_division', async (ctx) => {
    let values = ctx.request.body
    let data = await StateDivision.addStateDivision(values)
    try {
        ctx.body = {
            status: 200,
            data: data
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})


router.put('/state_division/:id', async (ctx) => {
    let values = ctx.request.body
    let id = ctx.params.id
    let data = await StateDivision.editStateDivision(id, values)
    try {
        ctx.body = {
            status: 200,
            data: data
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})


router.delete('/state_division/:id', async (ctx) => {
    let id = ctx.params.id
    await StateDivision.deleteStateDivisionById(id)
    try {
        ctx.body = {
            status: 200,
            data: 'DELETED'
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})

module.exports = router