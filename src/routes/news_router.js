var Router = require('koa-router')
const multer = require('@koa/multer');

var router = new Router()
var News = require('../services/news');
const news = require('../services/news');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/news')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer({ storage: storage })


router.post('/news/upload', upload.single('profile'), (ctx) => {
    ctx.body = ctx.request.file.filename
})

router.get('/news', async(ctx) => {
    var list = await News.getAllNews()
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


router.get('/news/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await News.getNewsById(id)
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


router.post('/news', async(ctx) => {

    let values = ctx.request.body

    console.log(values, "values")
    let data = await News.addNews(values)
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


router.put('/news/:id', async(ctx) => {
    let values = ctx.request.body
    let id = ctx.params.id
  let data = await News.editNews(id, values)
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


router.delete('/news/:id', async(ctx) => {
    let id = ctx.params.id
    await News.deleteNewsById(id)
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