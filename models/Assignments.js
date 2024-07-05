const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    name:{
        type: String,
    },
    Description: {
        type: String,
    },
    Score: {
        type: Number,
    },
    StartDate: {
        type: Date,
    },
    Deadline: {
        type: Date,
    },
    files: [{
        contentType: {
            type: String,
        },
        file: {
            type: String,
        }
    }],
    submitDetail:[{
        type: mongoose.Schema.ObjectId,
        ref: 'submitAssign',
    }],
    teachers:[{
        type: mongoose.Schema.ObjectId,
        ref: 'teacher',
        default: 0

    }],
    sentCount: {
        type: Number,
        default: 0
    },
    schoolYear:{
        type: mongoose.Schema.ObjectId,
        ref: 'schoolYear'
    },
    schoolYearNumber: {
        type: Number
    }

}, { timestamps: true });

const Assignments = mongoose.model('Assignments', AssignmentSchema)

module.exports = Assignments