var Router = require('koa-router')
var router = new Router();
var townshipQuery = require('../services/township');
const { insert } = require('../db/connection');

router.get('/getAllCandidatesByTownship', async (ctx, next) => {
    var List = await townshipQuery.getAllCandidatesByTownship()
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
});


router.get('/getCandidatesByTownshipId/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await townshipQuery.getCandidatesByTownshipId(id);
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

router.get('/getVoterListByTownshipId/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await townshipQuery.getCandidatesByTownshipId(id);
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



router.get('/getOfficeByTownshipId/:id', async(ctx) => {
    var id=ctx.params.id;
    var list = await townshipQuery.getOfficeByTownshipId(id);
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

router.get('/township', async (ctx) => {

    var list = await townshipQuery.getAllTownship()
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
});
router.get('/township/:id', async (ctx) => {
    var id = ctx.params.id
    var data = await townshipQuery.getTownshipById(id)
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
});

router.post('/township', async (ctx) => {

    let values = ctx.request.body
    let data = await townshipQuery.addTownship(values)
    //let result = await townshipQuery.getTownshipById(data.insertId)
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
});

router.put('/township/:id', async (ctx) => {

    let values = ctx.request.body

    let id = ctx.params.id

    let data = await townshipQuery.editTownship(id, values)
   
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

});


router.delete('/township/:id', async (ctx) => {

    let id = ctx.params.id

    await townshipQuery.deleteTownship(id)

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
module.exports = router;