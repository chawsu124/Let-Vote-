var knex = require('../db/connection')

function getAllTown(){
   
  // return knex.select('town.*').from('town');

   // return knex.select('town.*', 'township.name as township_name').from('town')
    //.leftJoin('township', 'town.township_id', 'township.id')

   // return knex.raw('select town.* , township.name as township_name ,district.name as district_name, state_division.name as state_division_name from town,district,township,state_division where town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id').then((res) => res[0])
   //return knex('town').where({'status' : 'ACTIVE'})
   return knex.select('town.*','township.name as township_name').from('town')
   .leftJoin('township', 'town.township_id', 'township.id').where({'town.status': 'ACTIVE'});
}

function getTownById(id){
    
   // return knex('town').where({ id: id }).select('*');

   return knex.where({'town.id': id, 'town.status': 'ACTIVE'}).select('town.*','township.name as township_name')
   .from('town')
  .leftJoin('township', 'town.township_id', 'township.id').then((res) => res[0]);


    //return knex.raw('select town.* , township.name as township_name, district.name as district_name, state_division.name as state_division_name from town,district,township,state_division where town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and town.id = ?', [id]).then((res) => res[0])
    //return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('town').then((res) => res[0])

}

function addTown(values){
    
    return knex('town').insert(values).then((res)=>getTownById(res[0]))
}

function editTown(id, values){
    
    return knex('town').where('id', id).update(values).then(()=>getTownById(id));
}

function deleteTown(id){
   
    return knex('town').where('id', id).del()
}

function getAllCandidates() {
    return knex.raw('select town.*, candidates.name as candidates_name, candidates.fathername as candidates_fathername, candidates.permanent_address as candidates_permanent_address,parliament.name as parliament_name,election.name as election_name,party.name as party_name from party,parliament,election,office,candidates,wards,town,township,district,state_division where candidates.party_id=party.id and candidates.parliament_id=parliament.id and candidates.election_id=election.id and party.office_id=office.id and office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id').then((res) => res[0])
}

function getCandidatesByTownId(id){
    return knex.raw('select town.id as town_id,candidates.*,parliament.name as parliament_name,election.name as election_name,party.name as party_name from party,parliament,election,office,candidates,wards,town,township,district,state_division where candidates.party_id=party.id and candidates.parliament_id=parliament.id and candidates.election_id=election.id and party.office_id=office.id and office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and town.id=?', [id]).then((res) => res[0])
}

function getAllVoterlist() {
    return knex.raw('select town.*, wards.name as wards_name,voter_list.name as voter_list_name,voter_list.nrc_no as voter_list_nrc_no, voter_list.dob as voter_list_dob,voter_list.religion as voter_list_religion,voter_list.permanent_address as voter_list_permanent_address from wards,voter_list,district,township,state_division,town where voter_list.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id').then((res) => res[0])
}
function getVoterListByTownId(id){
    return knex.raw('select town.name as town_name, voter_list.* from wards,voter_list,district,township,state_division,town where voter_list.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and town.id=?', [id]).then((res) => res[0])
    
}

// function getTownByName(name) {
// return knex.raw('select voter_list.name as voter_list_name,voter_list.nrc_no as voter_list_nrc_no, voter_list.dob as voter_list_dob,voter_list.religion as voter_list_religion,voter_list.permanent_address as voter_list_permanent_address, township.name as township_name, district.name as district_name, state_division.name as state_division_name from wards,voter_list,district,township,state_division,town where voter_list.wards_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and town.name= ?', [name]).then((res) => res[0])
// }

function getOfficeByTownId(id){
    return knex.raw('select town.name as town_name, office.* from office,wards,town,township,district,state_division where office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and town.id=?', [id]).then((res) => res[0])
}


module.exports = {
    getAllTown,
    getTownById,
    addTown,
    editTown,
    deleteTown,

    getOfficeByTownId,
    getAllCandidates,
    getCandidatesByTownId,
    getAllVoterlist,
    getVoterListByTownId

}
