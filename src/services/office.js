var knex = require('../db/connection')

function getAllOffice(){
   
   //return knex.select('office.*').from('office');
   //return knex('office').where({'status' : 'ACTIVE'})
   return knex.select('office.*', 'village.name as village_name', 'wards.name as wards_name').from('office')
   .leftJoin('village', 'office.village_id', 'village.id')
   .leftJoin('wards', 'office.ward_id', 'wards.id').where({'office.status': 'ACTIVE'});
}

function getOfficeById(id){
    
   // return knex('office').where({ id: id }).select('*');
   //return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('office').then((res) => res[0])
   return knex.where({'office.id': id, 'office.status': 'ACTIVE'}).select('office.*','village.name as village_name','wards.name as ward_name')
    .from('office')
   .leftJoin('village', 'office.village_id', 'village.id')
   .leftJoin('wards', 'office.ward_id', 'wards.id').then((res) => res[0]);
}

function addOffice(values){
    
    return knex('office').insert(values).then((res)=>getOfficeById(res[0]))
}

function editOffice(id, values){
    
    return knex('office').where('id', id).update(values).then(()=>getOfficeById(id));
}

function deleteOffice(id){
   
    return knex('office').where('id', id).del()
}

module.exports = {
    getAllOffice,
    getOfficeById,
    addOffice,
    editOffice,
    deleteOffice
}