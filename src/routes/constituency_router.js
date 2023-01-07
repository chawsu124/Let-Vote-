var Router = require('koa-router')
var router = new Router();
var constituencyQuery = require('../services/constituency');
const { insert } = require('../db/connection');
router.get('/constituency', async (ctx) => {

    var list = await constituencyQuery.getAllconstituency()
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
router.get('/constituency/:id', async (ctx) => {
    var id = ctx.params.id
    var data = await constituencyQuery.getconstituencyById(id)
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

router.post('/constituency', async (ctx) => {

    let values = ctx.request.body
    let data = await constituencyQuery.addconstituency(values)
    //let result = await constituencyQuery.getConstituencyById(data.insertId)
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

router.put('/constituency/:id', async (ctx) => {

    let values = ctx.request.body

    let id = ctx.params.id


    let data = await constituencyQuery.editconstituency(id, values)
   // let result = await constituencyQuery.getConstituencyById(id)

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


router.delete('/constituency/:id', async (ctx) => {

    let id = ctx.params.id

    await constituencyQuery.deleteconstituency(id)

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