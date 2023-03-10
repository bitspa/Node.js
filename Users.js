var mongoose = require('mongoose');

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
var userSchema = new Schema({
  categoryId: ObjectId,
  name: String,
  Address: String
});
module.exports = mongoose.model('Sea', userSchema)
