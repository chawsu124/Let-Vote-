var knex = require('../db/connection')
function getAllContact() {
  // return knex.select('state_division .*').from('state_division')
  return knex('contact_us').where({'status' : 'ACTIVE'})
}
function getContactById(id) {
  return knex.where({'id': id, 'status' : 'ACTIVE'}).select().from('contact_us').then((res) => res[0])
}

function addContact(values) {
  return knex('contact_us').insert(values).then((res) => getContactById(res[0]))
}

function editContact(id, values) {
  return knex('contact_us').where('id', id).update(values).then((res) => getContactById(id))
}
function deleteContactById(id) {
  return knex('contact_us').where('id', id).update({status: 'DELETE'})
}
module.exports = {
  getAllContact,
  getContactById,
  addContact,
  editContact,
  deleteContactById
}