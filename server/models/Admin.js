const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = mongoose.Schema({
  name: {type: String},
  // IDs : { type : Number , required : true},
  email : {type : String } ,
  password : {type : String }
})
UserSchema.pre('save',function(next){
  bcrypt.genSalt(10,(err,salt)=>{
    if (err){
      return next (error);
    }
    bcrypt.hash(this.password,salt,(err,hash)=>{
      if (err){
        return next(error)
      }
      this.password = hash;
      next();
    })
  });
})

UserSchema.methods.isPasswordMatch = function (plainPassword,hashed,callback){
  bcrypt.compare(plainPassword,hashed,(err,isMatch)=>{
      if (err){
        next (err);
      }
      callback(null,isMatch);
  })
}
const User = mongoose.model('User',UserSchema);

module.exports = User;
