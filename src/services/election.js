var knex = require('../db/connection')

function getAllElection(){
   
   //return knex.select('election.*').from('election');
   return knex('election').where({'status' : 'ACTIVE'})
}

function getElectionById(id){
    
    //return knex('election').where({ id: id }).select('*');
    return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('election').then((res) => res[0])
}

function addElection(values){
    
    return knex('election').insert(values).then((res)=>getElectionById(res[0]))
}

function editElection(id, values){
    
    return knex('election').where('id', id).update(values).then(()=>getElectionById(id));
}

function deleteElection(id){
   
    return knex('election').where('id', id).del()
}

module.exports = {
    getAllElection,
    getElectionById,
    addElection,
    editElection,
    deleteElection
}
