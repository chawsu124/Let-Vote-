var Router = require('koa-router')
var router = new Router();
var ElectionQuery = require('../services/election');
const { insert } = require('../db/connection');
router.get('/election', async (ctx) => {

    var list = await ElectionQuery.getAllElection()
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
router.get('/election/:id', async (ctx) => {
    var id = ctx.params.id
    var data = await ElectionQuery.getElectionById(id)
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

router.post('/election', async (ctx) => {

    let values = ctx.request.body
    let data = await ElectionQuery.addElection(values)
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

router.put('/election/:id', async (ctx) => {

    let values = ctx.request.body

    let id = ctx.params.id

    let data = await ElectionQuery.editElection(id, values);


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


router.delete('/election/:id', async (ctx) => {

    let id = ctx.params.id

    await ElectionQuery.deleteElection(id)

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