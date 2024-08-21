const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  }
});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
