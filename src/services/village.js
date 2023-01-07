var knex = require('../db/connection')

function getAllVillage(){
   
   //return knex.select('village.*').from('village');

   return knex.select('village.*', 'village_tract.name as village_tract_name').from('village')
   .leftJoin('village_tract', 'village.village_tract_id', 'village_tract.id').where({'village.status': 'ACTIVE'});

//return knex('village').where({'status' : 'ACTIVE'})
}

function getVillageById(id){
    
   //return knex('village').where({ id: id }).select('*');

   return knex.where({'village.id': id, 'village.status': 'ACTIVE'}).select('village.*','village_tract.name as village_tract_name')
   .from('village')
  .leftJoin('village_tract', 'village.village_tract_id', 'village_tract.id').then((res) => res[0]);

//return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('village').then((res) => res[0])
}

function addVillage(values){
    
    return knex('village').insert(values).then((res)=>getVillageById(res[0]))
}

function editVillage(id, values){
    
    return knex('village').where('id', id).update(values).then(()=>getVillageById(id));
}

function deleteVillage(id){
   
    return knex('village').where('id', id).del()
}

function getVoterListByVillageId(id){
    return knex.raw('select town.name as town_name, voter_list.* from voter_list,district,township,state_division,town,village_tract, village where voter_list.village_id=village.id and village.village_tract_id= village_tract.id and village_tract.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and village.id=?', [id]).then((res) => res[0])
    
}
function getAllVoterlist() {
    return knex.raw('select town.*, wards.name as wards_name,voter_list.name as voter_list_name,voter_list.nrc_no as voter_list_nrc_no, voter_list.dob as voter_list_dob,voter_list.religion as voter_list_religion,voter_list.permanent_address as voter_list_permanent_address from voter_list,district,township,state_division,town , village, village_tract where voter_list.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id').then((res) => res[0])
}

module.exports = {
    getAllVillage,
    getVillageById,
    addVillage,
    editVillage,
    deleteVillage,

    getVoterListByVillageId,
    getAllVoterlist
}
