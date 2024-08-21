const express = require('express');
const repository = require('../repository/userRepository');
const router = express.Router();
router.post('/createStudent',repository.createStudent);
router.post('/createCourse',repository.createCourse);
router.post('/createStaff',repository.createStaff);
router.get('/viewStudent',repository.viewStudent);
module.exports=router;