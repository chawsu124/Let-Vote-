var knex = require('../db/connection')
function getAllNews() {
  // return knex.select('state_division .*').from('state_division')
  return knex('news').where({'status' : 'ACTIVE'})
}
function getNewsById(id) {
  //return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('news').then((res) => res[0])
  
  return knex.where({'id': id, 'status': 'ACTIVE'}).select().from('news').then((res) => res[0])
}

function addNews(values) {
  return knex('news').insert(values).then((res) => getNewsById(res[0]))
}

function editNews(id, values) {
  return knex('news').where('id', id).update(values).then((res) => getNewsById(id))
}
function deleteNewsById(id) {
  return knex('news').where('id', id).update({status: 'DELETE'})
}
module.exports = {
  getAllNews,
  getNewsById,
  addNews,
  editNews,
  deleteNewsById
}