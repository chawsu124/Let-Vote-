var Router = require('koa-router')
var router = new Router();
var voterlistQuery = require('../services/voter_list');
const { insert } = require('../db/connection');
router.get('/voter_list', async (ctx) => {

    var list = await voterlistQuery.getAllvoter_list()
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
router.get('/voter_list/:id', async (ctx) => {
    var id = ctx.params.id
    var data = await voterlistQuery.getvoter_listById(id)
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

router.post('/voter_list', async (ctx) => {

    let values = ctx.request.body
    let data = await voterlistQuery.addvoter_list(values)
    //let result = await voterlistQuery.getVoterListById(data.insertId)
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

router.put('/voter_list/:id', async (ctx) => {

    let values = ctx.request.body

    let id = ctx.params.id

    let data = await voterlistQuery.editvoter_list(id, values)
   // let result = await voterlistQuery.getVoterListById(id)

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


router.delete('/voter_list/:id', async (ctx) => {

    let id = ctx.params.id

    await voterlistQuery.deletevoter_list(id)

    try {

        ctx.body = {

            status: 200,

            data: 'DELETED'

        }

    } catch (error) {

        ctx.body = {

            staus: 400,

            data: error.message

        }

    }

})
module.exports = router;