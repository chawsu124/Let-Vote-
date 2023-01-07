var knex = require('../db/connection')

function getAllparty(){
   
   //return knex.select('party.*').from('party');
   //return knex('party').where({'status' : 'ACTIVE'})
   return knex.select('party.*', 'office.name as office_name').from('party')
   .leftJoin('office', 'party.office_id', 'office.id').where({'party.status': 'ACTIVE'});
}

function getpartyById(id){
    
   // return knex('party').where({ id: id }).select('*');
   //return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('party').then((res) => res[0])
   return knex.where({'party.id': id, 'party.status': 'ACTIVE'}).select('party.*','office.name as office_name')
    .from('party')
   .leftJoin('office', 'party.office_id', 'office.id').then((res) => res[0]);
}

function addParty(values) {

    return knex('party').insert(values).then((res) => getpartyById(res[0]))
}

function editParty(id, values) {

    return knex('party').where('id', id).update(values).then(() => getpartyById(id));
}

function deletePartyById(id) {

    return knex('party').where('id', id).del()
}

module.exports = {
    getAllparty,
    getpartyById,
    addParty,
    editParty,
    deletePartyById
}