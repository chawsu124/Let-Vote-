var knex = require('../db/connection')

function getAllVillageTract(){
   
   //return knex.select('village_tract.*').from('village_tract');

   return knex.select('village_tract.*', 'town.name as town_name').from('village_tract')
   .leftJoin('town', 'village_tract.town_id', 'town.id').where({'village_tract.status': 'ACTIVE'});

//return knex.raw('select village_tract.* , wards.name as ward_name,town.name as town_name, township.name as township_name ,district.name as district_name, state_division.name as state_division_name from wards,town,district,township,state_division where wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id').then((res) => res[0])
//return knex('village_tract').where({'status' : 'ACTIVE'})
}

function getVillageTractById(id){
    
    //return knex('village_tract').where({ id: id }).select('*');

    return knex.where({'village_tract.id': id, 'village_tract.status': 'ACTIVE'}).select('village_tract.*','town.name as town_name')
    .from('village_tract')
   .leftJoin('town', 'village_tract.town_id', 'town.id').then((res) => res[0]);

//return knex.raw('select village_tract.* , wards.name as ward_name,town.name as town_name, township.name as township_name ,district.name as district_name, state_division.name as state_division_name from wards,town,district,township,state_division where wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and village_tract.id = ?', [id]).then((res) => res[0])
//return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('village_tract').then((res) => res[0])
}

function addVillageTract(values){
    
    return knex('village_tract').insert(values).then((res)=>getVillageTractById(res[0]))
}

function editVillageTract(id, values){
    
    return knex('village_tract').where('id', id).update(values).then(()=>getVillageTractById(id));
}

function deleteVillageTract(id){
   
    return knex('village_tract').where('id', id).del()
}

function getVoterListByVillageTractId(id){
    return knex.raw('select town.name as town_name, voter_list.* from voter_list,district,township,state_division,town,village_tract, village where voter_list.village_id=village.id and village.village_tract_id= village_tract.id and village_tract.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and village_tract.id=?', [id]).then((res) => res[0])
}
function getAllVoterlist() {
    return knex.raw('select town.*, wards.name as wards_name,voter_list.name as voter_list_name,voter_list.nrc_no as voter_list_nrc_no, voter_list.dob as voter_list_dob,voter_list.religion as voter_list_religion,voter_list.permanent_address as voter_list_permanent_address from voter_list,district,township,state_division,town , village, village_tract where voter_list.village_id=village.id and village.village_tract_id =village_tract.id and village_tract.town_id= town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id').then((res) => res[0])
}



module.exports = {
    getAllVillageTract,
    getVillageTractById,
    addVillageTract,
    editVillageTract,
    deleteVillageTract,

    getVoterListByVillageTractId,
    getAllVoterlist
}
