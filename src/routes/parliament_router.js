var Router = require('koa-router')
var router = new Router();
var ParliamentQuery = require('../services/parliament');
const { insert } = require('../db/connection');
router.get('/parliament', async (ctx) => {

    var list = await ParliamentQuery.getAllparliament()
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
router.get('/parliament/:id', async (ctx) => {
    var id = ctx.params.id
    var data = await ParliamentQuery.getparliamentById(id)
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

router.post('/parliament', async (ctx) => {

    let values = ctx.request.body
    let data = await ParliamentQuery.addparliament(values)
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

router.put('/parliament/:id', async (ctx) => {

    let values = ctx.request.body

    let id = ctx.params.id

    let data = await ParliamentQuery.editparliament(id, values);


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


router.delete('/parliament/:id', async (ctx) => {

    let id = ctx.params.id

    await ParliamentQuery.deleteparliament(id)

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