const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    coursename:String,
    staffname:String
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

