var knex = require('../db/connection')

function getAllDistrict(){
   
   //return knex.select('district.*').from('district');

   return knex.select('district.*', 'state_division.name as state_division_name').from('district')
   .leftJoin('state_division', 'district.state_division_id', 'state_division.id').where({'district.status': 'ACTIVE'});

//return knex.raw('select district.* , state_division.name as state_division_name ,district.name as district_name from district,state_division where  district.state_division_id = state_division.id').then((res) => res[0])

//return knex('district').where({'status' : 'ACTIVE'})


}

function getDistrictById(id){
    
    return knex.where({'district.id': id, 'district.status': 'ACTIVE'}).select('district.*','state_division.name as state_division_name')
    .from('district')
   .leftJoin('state_division', 'district.state_division_id', 'state_division.id').then((res) => res[0]);

//return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('district').then((res) => res[0])

}

function addDistrict(values){
   
    return knex('district').insert(values).then((res)=>getDistrictById(res[0]))
}

function editDistrict(id, values){
   
    return knex('district').where('id', id).update(values).then(()=>getDistrictById(id));
}

function deleteDistrictById(id){
    
    return knex('district').where('id', id).del()
}
function getAllCandidatesByDistrict() {
    return knex.raw('select district.id as district_id,candidates.id as id,candidates.*,parliament.name as parliament_name,election.name as election_name,party.name as party_name from party,parliament,election,office,candidates,wards,town,township,district,state_division where candidates.party_id=party.id and candidates.parliament_id=parliament.id and candidates.election_id=election.id and party.office_id=office.id and office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id').then((res) => res[0])
}

function getCandidatesByDistrictId(id){
    return knex.raw('select district.id as district_id,district.name as district_name, candidates.*,parliament.name as parliament_name,election.name as election_name,party.name as party_name from party,parliament,election,office,candidates,wards,town,township,district,state_division where candidates.party_id=party.id and candidates.parliament_id=parliament.id and candidates.election_id=election.id and party.office_id=office.id and office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and district.id=?', [id]).then((res) => res[0])
}
function getOfficeByDistrictId(id){
    return knex.raw('select district.name as district_name,office.* from office,wards,town,township,district,state_division where office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and district.id=?', [id]).then((res) => res[0])
}
function getVoterListByDistrictId(id){
    return knex.raw('select town.name as town_name, voter_list.* from wards,voter_list,district,township,state_division,town where voter_list.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and district.id=?', [id]).then((res) => res[0])
    
}

module.exports = {
   getAllDistrict,
    getDistrictById,
   addDistrict,
    editDistrict,
   deleteDistrictById,
   
   getOfficeByDistrictId,
   getAllCandidatesByDistrict,
   getCandidatesByDistrictId,
   getVoterListByDistrictId
}