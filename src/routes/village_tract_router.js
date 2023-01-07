var Router = require('koa-router')
var router = new Router();
var VillageTractQuery = require('../services/village_tract');
const { insert } = require('../db/connection');

router.get('/getVoterListByVillageTractId/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await VillageTractQuery.getVoterListByVillageTractId(id);
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

router.get('/village_tract', async (ctx) => {

    var list = await VillageTractQuery.getAllVillageTract()
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
router.get('/village_tract/:id', async (ctx) => {
    var id = ctx.params.id
    var data = await VillageTractQuery.getVillageTractById(id)
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

router.post('/village_tract', async (ctx) => {

    let values = ctx.request.body
    let data = await VillageTractQuery.addVillageTract(values)
    
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

router.put('/village_tract/:id', async (ctx) => {

    let values = ctx.request.body

    let id = ctx.params.id

    let data = await VillageTractQuery.editVillageTract(id, values);


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


router.delete('/village_tract/:id', async (ctx) => {

    let id = ctx.params.id

    await VillageTractQuery.deleteVillageTract(id)

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