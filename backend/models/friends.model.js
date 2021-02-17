const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendsSchema = new Schema({
    id:{type: String, required: true},
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  // avatar:{type: Image}
 
},);

const Friends = mongoose.model('Friends', friendsSchema);

module.exports = Friends;