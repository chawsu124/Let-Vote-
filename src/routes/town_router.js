var Router = require('koa-router')
var router = new Router();
var townQuery = require('../services/town');

router.get('/getAllCandidates', async (ctx) => {
    var id = ctx.params.id
    var data = await townQuery.getAllCandidates(id);
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

router.get('/getCandidatesByTownId/:id', async (ctx) => {
    var id = ctx.params.id
    var data = await townQuery.getCandidatesByTownId(id);
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
router.get('/getAllVoterlist', async (ctx) => {
    var id = ctx.params.id
    var data = await townQuery.getAllVoterlist(id);
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

router.get('/getVoterListByTownId/:id', async (ctx) => {
    var id = ctx.params.id
    var data = await townQuery.getVoterListByTownId(id);
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

router.get('/getOfficeByTownId/:id', async(ctx) => {
    var id=ctx.params.id;
    var list = await townQuery.getOfficeByTownId(id);
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

router.get('/town', async (ctx) => {

    var list = await townQuery.getAllTown()
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
router.get('/town/:id', async (ctx) => {
    var id = ctx.params.id
    var data = await townQuery.getTownById(id)
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

router.post('/town', async (ctx) => {

    let values = ctx.request.body
    let data = await townQuery.addTown(values)
    //let result = await townQuery.getTownById(data.insertId)
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

router.put('/town/:id', async (ctx) => {

    let values = ctx.request.body

    let id = ctx.params.id

    let data = await townQuery.editTown(id, values);


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


router.delete('/town/:id', async (ctx) => {

    let id = ctx.params.id

    await townQuery.deleteTown(id)

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