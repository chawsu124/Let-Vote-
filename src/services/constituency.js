var knex = require('../db/connection')

function getAllconstituency(){
   
   //return knex.select('constituency.*').from('constituency');
  // return knex('constituency').where({'status' : 'ACTIVE'})
  return knex.select('constituency.*', 'town.name as town_name','election.name as election_name').from('constituency')
   .leftJoin('town', 'constituency.town_id', 'town.id')
   .leftJoin('election', 'constituency.election_id', 'election.id').where({'constituency.status': 'ACTIVE'});
}

function getconstituencyById(id){
    
   // return knex('constituency').where({ id: id }).select('*');
   //return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('constituency').then((res) => res[0])
   return knex.where({'constituency.id': id, 'constituency.status': 'ACTIVE'}).select('constituency.*','town.name as town_name','election.name as election_name')
    .from('constituency')
   .leftJoin('town', 'constituency.town_id', 'town.id')
   .leftJoin('election', 'constituency.election_id', 'election.id').then((res) => res[0]);
}

function addconstituency(values){
   
    return knex('constituency').insert(values).then((res)=>getconstituencyById(res[0]))
}

function editconstituency(id, values){
   
    return knex('constituency').where('id', id).update(values).then(()=>getconstituencyById(id));
}

function deleteconstituency(id){
    
    return knex('constituency').where('id', id).del()
}

module.exports = {
   getAllconstituency,
   getconstituencyById,
   addconstituency,
   editconstituency,
   deleteconstituency
}