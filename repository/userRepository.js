const mongoose = require('mongoose'); 
const Student = require('../models/Student');
const Course = require('../models/Course');
const Staff = require('../models/Staff');

async function createStudent(req, res) {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create student' });
    }
}

async function createCourse(req, res) {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).send(course);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create course' });
    }
}

async function createStaff(req, res) {
    try {
        const staff = new Staff(req.body);
        await staff.save();
        res.status(201).send(staff);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create staff' });
    }
}
async function viewStudent(req, res) {
    try {
        const studentId = req.body._id;
        const objectId = new mongoose.Types.ObjectId(studentId);

        const studentDetails = await Student.aggregate([
            {
                $match: { _id: objectId }
            },
            {
                $lookup: {
                    from: "courses",
                    localField: 'coursename',
                    foreignField: 'name',
                    as: "courseDetails"
                }
            },
            {
                $lookup:{
                    from:"staffs",
                    localField:'staffname',
                    foreignField:'name',
                    as:"staffDetails"
                }
            }
        ]);

        if (studentDetails.length === 0) {
            return res.status(404).json({ error: 'Student not found' });
        }

        console.log('Student Details:', studentDetails);
        res.status(200).json(studentDetails);
    } catch (error) {
        console.error('Error retrieving student details:', error);
        res.status(500).json({ error: 'Failed to retrieve student details' });
    }
}




module.exports = { createCourse, createStaff, createStudent, viewStudent };
