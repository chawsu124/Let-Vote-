var Router = require('koa-router')
var router = new Router();
var VillageQuery = require('../services/village');
const { insert } = require('../db/connection');

router.get('/getVoterlistByVillageId/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await VillageQuery.getVoterListByVillageId(id);
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

router.get('/village', async (ctx) => {

    var list = await VillageQuery.getAllVillage()
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
router.get('/village/:id', async (ctx) => {
    var id = ctx.params.id
    var data = await VillageQuery.getVillageById(id)
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

router.post('/village', async (ctx) => {

    let values = ctx.request.body
    let data = await VillageQuery.addVillage(values)
    
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

router.put('/village/:id', async (ctx) => {

    let values = ctx.request.body

    let id = ctx.params.id

    let data = await VillageQuery.editVillage(id, values);


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


router.delete('/village/:id', async (ctx) => {

    let id = ctx.params.id

    await VillageQuery.deleteVillage(id)

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