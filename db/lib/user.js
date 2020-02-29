'use strict'

module.exports = function(UserModel){
  function findAll(){
    return UserModel.find({})
  }

  function findById(mId){
    return UserModel.findById(mId)
  }

  function create(user){
    return UserModel.create(user)
  }
  async function update(mId, user){
    const existsUser = await UserModel.findById(mId)
    if(existsUser){
      await UserModel.findByIdAndUpdate(mId, user)
      return UserModel.findById(mId)
    }
    throw new Error('El usuario no existe.')
  }

  async function remove(mId){
    const existsUser = await UserModel.findById(mId)
    if(existsUser){
      await UserModel.findByIdAndRemove(mId, user)
      return UserModel.findById(mId)
    }
    throw new Error('El usuario a eliminar no existe.')
  }

  return {
    findAll,
    findById,
    create,
    update,
    remove
  }
}