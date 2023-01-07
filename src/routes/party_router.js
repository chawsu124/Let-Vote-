var Router = require('koa-router')
const multer = require('@koa/multer');

var router = new Router()
var Party = require('../services/party')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/party')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer({ storage: storage })


router.post('/party/upload', upload.single('profile'), (ctx) => {
    ctx.body = ctx.request.file.filename
})

router.get('/party', async(ctx) => {
    var list = await Party.getAllparty()
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


router.get('/party/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await Party.getpartyById(id)
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


router.post('/party', async(ctx) => {

    let values = ctx.request.body

    console.log(values, "values")
    let data = await Party.addParty(values)
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


router.put('/party/:id', async(ctx) => {
    let values = ctx.request.body
    let id = ctx.params.id
  let data = await Party.editParty(id, values)
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


router.delete('/party/:id', async(ctx) => {
    let id = ctx.params.id
    await Party.deletePartyById(id)
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