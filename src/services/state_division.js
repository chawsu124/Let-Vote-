var knex = require('../db/connection')
function getAllStateDivision() {
  // return knex.select('state_division .*').from('state_division')
  return knex('state_division').where({'status' : 'ACTIVE'})
}
function getStateDivisionById(id) {
  return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('state_division').then((res) => res[0])
}

function addStateDivision(values) {
  return knex('state_division').insert(values).then((res) => getStateDivisionById(res[0]))
}

function editStateDivision(id, values) {
  return knex('state_division').where('id', id).update(values).then((res) => getStateDivisionById(id))
}
function deleteStateDivisionById(id) {
  return knex('state_division').where('id', id).update({status: 'DELETE'})
}
function getAllCandidatesByStateDivision() {
  return knex.raw('select candidates.*,parliament.name as parliament_name,election.name as election_name,party.name as party_name from party,parliament,election,office,candidates,wards,town,township,district,state_division where candidates.party_id=party.id and candidates.parliament_id=parliament.id and candidates.election_id=election.id and party.office_id=office.id and office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id').then((res) => res[0])
}

function getCandidatesByStateDivisionId(id) {
  return knex.raw('select state_division.id as state_division_id, state_division.name as state_division_name,candidates.*,election.name as election_name,party.name as party_name from party,parliament,election,office,candidates,wards,town,township,district,state_division where candidates.party_id=party.id and candidates.parliament_id=parliament.id and candidates.election_id=election.id and party.office_id=office.id and office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and state_division.id=?', [id]).then((res) => res[0])
}


function getOfficeByStateDivisionId(id){
  return knex.raw('select state_division.name as state_division_name,office.* from office,wards,town,township,district,state_division where office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and state_division.id=?', [id]).then((res) => res[0])
}
function getVoterListByStateDivisionId(id){
  return knex.raw('select town.name as town_name, voter_list.* from wards,voter_list,district,township,state_division,town where voter_list.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and state_division.id=?', [id]).then((res) => res[0])
  
}
module.exports = {
  getAllStateDivision,
  getStateDivisionById,
  addStateDivision,
  editStateDivision,
  deleteStateDivisionById,
  
  getOfficeByStateDivisionId,
  getAllCandidatesByStateDivision,
  getCandidatesByStateDivisionId,
  getVoterListByStateDivisionId
}