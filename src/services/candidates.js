var knex = require('../db/connection')

function getAllCandidates(){
   
   //return knex.select('candidates.*').from('candidates');
   //return knex('candidates').where({'status' : 'ACTIVE'})
   return knex.select('candidates.*', 'party.name as party_name','constituency.code1 as constituency_code1','parliament.name as parliament_name','election.name as election_name').from('candidates')
   .leftJoin('party', 'candidates.party_id', 'party.id')
   .leftJoin('constituency', 'candidates.constituency_id', 'constituency.id')
   .leftJoin('parliament', 'candidates.parliament_id', 'parliament.id')
   .leftJoin('election', 'candidates.election_id', 'election.id').where({'candidates.status': 'ACTIVE'});
}

function getCandidatesById(id){
    
    //return knex('candidates').where({ id: id }).select('*');
    //return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('candidates').then((res) => res[0])
    return knex.where({'candidates.id': id, 'candidates.status': 'ACTIVE'})
    .select('candidates.*','party.name as party_name','constituency.code1 as constituency_code1','parliament.name as parliament_name','election.name as election_name')
    .from('candidates')
   .leftJoin('party', 'candidates.party_id', 'party.id')
   .leftJoin('constituency', 'candidates.constituency_id', 'constituency.id')
   .leftJoin('parliament', 'candidates.parliament_id', 'parliament.id')
   .leftJoin('election', 'candidates.election_id', 'election.id').then((res) => res[0]);
}

function addCandidates(values){
   
    return knex('candidates').insert(values).then((res)=>getCandidatesById(res[0]))
}

function editCandidates(id, values){
   
    return knex('candidates').where('id', id).update(values).then(()=>getCandidatesById(id));
}

function deleteCandidates(id){
    
    return knex('candidates').where('id', id).del()
}

module.exports = {
   getAllCandidates,
   getCandidatesById,
   addCandidates,
   editCandidates,
   deleteCandidates
}