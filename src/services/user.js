var knex = require('../db/connection');

function getAllUser(){
    //return knex.raw('select * from user').then((res) => res[0])
    
    return knex.select('user.*').from('user');
                
}

function getUserById(id){
   // return knex.raw('select * from user where id = ?',[id]).then(res=> res[0][0])
   return knex('user').where({ id: id }).select('*');
}

function getUserByUsername(username){
    return knex('user').where({username: username}).first('*')
}

function addUser(values){ 

    // const {username,password,email,phone,role,status} = values 
    
    // return knex.raw('INSERT INTO user (username,password,email,phone,role,status) VALUES (?, ?, ?, ?, ?, ?)', 
    // [username,password,email,phone,role,status]).then(res => res[0]) 
    return knex('user').insert(values).then((res)=>getUserById(res[0]))
    } 


function editUser(id, values){ 

    // const {username,password,email,phone,role,status} = values 
     
    // return knex.raw('UPDATE user SET username = ?, password = ?, email = ?, phone = ?, role =?, status = ? WHERE id = ?', 
    // [username,password,email,phone,role,status,id]).then((res) => res[0]) 
        return knex('user').where('id', id).update(values).then(()=>getUserById(id));
    } 

    function deleteUser(id){ 

        //return knex.raw('DELETE FROM user WHERE id = ?', [id]).then((res) => res[0]) 
            return knex('user').where('id', id).del()
        } 

module.exports= {
    getAllUser,
    getUserById,
    getUserByUsername,
    addUser,
    editUser,
    deleteUser
}