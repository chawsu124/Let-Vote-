var knex = require('../db/connection')

function getAllparliament(){
   
   //return knex.select('parliament.*').from('parliament');
   return knex('parliament').where({'status' : 'ACTIVE'})
}

function getparliamentById(id){
    
    //return knex('parliament').where({ id: id }).select('*');
    return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('parliament').then((res) => res[0])
}

function addparliament(values){
    
    return knex('parliament').insert(values).then((res)=>getparliamentById(res[0]))
}

function editparliament(id, values){
    
    return knex('parliament').where('id', id).update(values).then(()=>getparliamentById(id));
}

function deleteparliament(id){
   
    return knex('parliament').where('id', id).del()
}

module.exports = {
    getAllparliament,
    getparliamentById,
    addparliament,
    editparliament,
    deleteparliament
}
