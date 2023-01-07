var knex = require('../db/connection')

function getAllvoter_list(){
   
   //return knex.select('voter_list.*').from('voter_list');
   return knex.select('voter_list.*', 'village.name as village_name','wards.name as ward_name','election.name as election_name','parliament.name as parliament_name').from('voter_list')
   .leftJoin('village', 'voter_list.village_id', 'village.id')
   .leftJoin('wards', 'voter_list.ward_id', 'wards.id')
   .leftJoin('election', 'voter_list.election_id', 'election.id')
   .leftJoin('parliament', 'voter_list.parliament_id', 'parliament.id').where({'voter_list.status': 'ACTIVE'});
}

function getvoter_listById(id){
    
    //return knex('voter_list').where({ id: id }).select('*');
    return knex.where({'voter_list.id': id, 'voter_list.status': 'ACTIVE'})
    .select('voter_list.*','village.name as village_name','wards.name as ward_name','election.name as election_name','parliament.name as parliament_name')
    .from('voter_list')
   .leftJoin('village', 'voter_list.village_id', 'village.id')
   .leftJoin('wards', 'voter_list.ward_id', 'wards.id')
   .leftJoin('election', 'voter_list.election_id', 'election.id')
   .leftJoin('parliament', 'voter_list.parliament_id', 'parliament.id').then((res) => res[0]);
}

function addvoter_list(values){
   
    return knex('voter_list').insert(values).then((res)=>getvoter_listById(res[0]))
}

function editvoter_list(id, values){
   
    return knex('voter_list').where('id', id).update(values).then(()=>getvoter_listById(id));
}

function deletevoter_list(id){
    
    return knex('voter_list').where('id', id).del()
}



module.exports = {
   getAllvoter_list,
   getvoter_listById,
   addvoter_list,
   editvoter_list,
   deletevoter_list,


}