// var Router = require('koa-router')

// var router = new Router()
// var Candidates = require('../services/candidates')


// router.get('/candidates', async(ctx) => {
//     var list = await Candidates.getAllCandidates()
//     try{
//         ctx.body = {
//             status: 200,
//             data: list
//         }
//     }catch(error){
//         ctx.body = {
//             status: 400,
//             data: error.message
//         }
//     }
// })


// router.get('/candidates/:id', async(ctx) => {
//     var id = ctx.params.id
//     var data = await Candidates.getCandidatesById(id)
//     try{
//         ctx.body = {
//             status: 200,
//             data: data
//         }
//     }catch(error){
//         ctx.body = {
//             status: 400,
//             data: error.message
//         }
//     }
// })


// router.post('/candidates', async(ctx) => {
//     let values = ctx.request.body
//     //console.log(values)
//     let data = await Candidates.addCandidates(values)
//     //let result = await stateDivision.getStateDivisonById(data.insertId)
//     try{
//         ctx.body = {
//             status: 200,
//             data: data
//         }
//     }catch(error){
//         ctx.body = {
//             status: 400,
//             data: error.message
//         }
//     }
// })


// router.put('/candidates/:id', async(ctx) => {
//     let values = ctx.request.body
//     let id = ctx.params.id
//     let data = await Candidates.editCandidates(id, values)
//     //let result =  await stateDivision.getStateDivisonById(id)
//     try{
//         ctx.body = {
//             status: 200,
//             data: data
//         }
//     }catch(error){
//         ctx.body = {
//             status: 400,
//             data: error.message
//         }
//     }
// })


// router.delete('/candidates/:id', async(ctx) => {
//     let id = ctx.params.id
//     await Candidates.deleteCandidates(id)
//     try{
//         ctx.body = {
//             status: 200,
//             data: 'DELETED'
//         }
//     }catch(error){
//         ctx.body = {
//             status: 400,
//             data: error.message
//         }
//     }
// })

// module.exports = router




var Router = require('koa-router')
const multer = require('@koa/multer');

var router = new Router()
var Candidates = require('../services/candidates');
const candidate = require('../services/candidates');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/candidate')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const upload = multer({ storage: storage })


router.post('/candidates/upload', upload.single('profile'), (ctx) => {
    ctx.body = ctx.request.file.filename
})

router.get('/candidates', async(ctx) => {
    var list = await Candidates.getAllCandidates()
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

router.get('/candidates/:id', async(ctx) => {
    var id = ctx.params.id
    var data = await Candidates.getCandidatesById(id)
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


router.post('/candidates', async(ctx) => {

    let values = ctx.request.body

    //console.log(values, "values")
    let data = await Candidates.addCandidates(values)
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


router.put('/candidates/:id', async(ctx) => {
    let values = ctx.request.body
    let id = ctx.params.id
  let data = await Candidates.editCandidates(id, values)
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


router.delete('/candidates/:id', async(ctx) => {
    let id = ctx.params.id
    await Candidates.deleteCandidates(id)
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