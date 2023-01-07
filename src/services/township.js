var knex = require('../db/connection')

function getAllTownship(){
   
   //return knex.select('township.*').from('township');

        return knex.select('township.*','district.name as district_name').from('township')
        .leftJoin('district', 'township.district_id', 'district.id').where({'township.status': 'ACTIVE'});

    //return knex.raw('select township.* , district.name as district_name, state_division.name as state_division_name from district,township,state_division where township.district_id = district.id and district.state_division_id = state_division.id').then((res) => res[0])
    //return knex('township').where({'status' : 'ACTIVE'})
}

function getTownshipById(id){
    
    //return knex('township').where({ id: id }).select('*');

    return knex.where({'township.id': id, 'township.status': 'ACTIVE'}).select('township.*','district.name as district_name')
    .from('township')
   .leftJoin('district', 'township.district_id', 'district.id').then((res) => res[0]);

    
    //return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('township').then((res) => res[0])
}

function addTownship(values){
    
    return knex('township').insert(values).then((res)=>getTownshipById(res[0]))
}

function editTownship(id, values){
    
    return knex('township').where('id', id).update(values).then(()=>getTownshipById(id));
}

function deleteTownship(id){
   
    return knex('township').where('id', id).del()
}
function getAllCandidatesByTownship() {
    return knex.raw('select township.id as township_id, township.name as township_name,candidates.*,parliament.name as parliament_name,election.name as election_name,party.name as party_name from party,parliament,election,office,candidates,wards,town,township,district,state_division where candidates.party_id=party.id and candidates.parliament_id=parliament.id and candidates.election_id=election.id and party.office_id=office.id and office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id').then((res) => res[0])
}

function getCandidatesByTownshipId(id){
    return knex.raw('select township.id as township_id,township.name as township_name, candidates.*,parliament.name as parliament_name,election.name as election_name,party.name as party_name from party,parliament,election,office,candidates,wards,town,township,district,state_division where candidates.party_id=party.id and candidates.parliament_id=parliament.id and candidates.election_id=election.id and party.office_id=office.id and office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and township.id=?', [id]).then((res) => res[0])
}
function getOfficeByTownshipId(id){
    return knex.raw('select township.name as township_name,office.* from office,wards,town,township,district,state_division where office.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and township.id=?', [id]).then((res) => res[0])
}
function getVoterListByTownshipId(id){
    return knex.raw('select town.name as town_name, voter_list.* from wards,voter_list,district,township,state_division,town where voter_list.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and township.id=?', [id]).then((res) => res[0])
    
}

module.exports = {
    getAllTownship,
    getTownshipById,
    addTownship,
    editTownship,
    deleteTownship,

    getOfficeByTownshipId,
    getAllCandidatesByTownship,
    getCandidatesByTownshipId,
    getVoterListByTownshipId
}
