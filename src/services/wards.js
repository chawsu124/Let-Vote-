var knex = require('../db/connection')

function getAllWards(){
   
  //return knex.select('wards.*').from('wards');

  return knex.select('wards.*','town.name as town_name').from('wards')
  .leftJoin('town', 'wards.town_id', 'town.id').where({'wards.status': 'ACTIVE'});

//return knex.raw('select wards.* , town.name as town_namw, township.name as township_name ,district.name as district_name, state_division.name as state_division_name from wards,town,district,township,state_division where wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id').then((res) => res[0])
//return knex('wards').where({'status' : 'ACTIVE'})
}

function getWardsById(id){
    
   //return knex('wards').where({ id: id }).select('*');

   return knex.where({'wards.id': id, 'wards.status': 'ACTIVE'}).select('wards.*','town.name as town_name')
   .from('wards')
  .leftJoin('town', 'wards.town_id', 'town.id').then((res) => res[0]);

//return knex.raw('select wards.* , town.name as town_name, township.name as township_name ,district.name as district_name, state_division.name as state_division_name from wards,town,district,township,state_division where wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and ward.id = ?', [id]).then((res) => res[0])
//return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('wards').then((res) => res[0])
}

function addWards(values){
    
    return knex('wards').insert(values).then((res)=>getWardsById(res[0]))
}

function editWards(id, values){
    
    return knex('wards').where('id', id).update(values).then(()=>getWardsById(id));
}

function deleteWards(id){
   
    return knex('wards').where('id', id).del()
}

function getVoterListByWardId(id){
    return knex.raw('select town.name as town_name, voter_list.* from wards,voter_list,district,township,state_division,town where voter_list.ward_id=wards.id and wards.town_id = town.id and town.township_id = township.id and township.district_id = district.id and district.state_division_id = state_division.id and wards.id=?', [id]).then((res) => res[0])
    
}

module.exports = {
    getAllWards,
    getWardsById,
    addWards,
    editWards,
    deleteWards,

    getVoterListByWardId
}