const mongoose = require("mongoose")

const DataSchema = mongoose.Schema({
    Name: { type: String },
    Roll: {
        type: Number,
        min: [6, ' minimum value 6 and maximum value 12, But supplied value is ={VALUE}'],
        max: [12, ' minimum value 6 and maximum value 12, But supplied value is ={VALUE}']
    },
    Class: { type: String },
    Remarks: String,
    // Custom validation
    Mobile: {
        type: Number,
        validate: {
            validator: function(value) {
                if (value.length !== 11) {
                    return false
                } else {
                    return true
                }
            },
            message: '11 Digit phone number required'
        }
    }
})
const StudentsModel = mongoose.model('students', DataSchema)
module.exports = StudentsModel;