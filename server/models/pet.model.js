const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "pet name is required"],
        minLength:[3, "pet name must be at least 3 characters long"],
    },
    
    petType: {
        type: String,
        required: [true, "pet type is required"],
        minLength:[3, "pet type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "pet description is required"],
        minLength:[3, "pet description must be at least 3 characters long"]
    },
    skillOne : {type: String},
    skillTwo : {type: String},
    skillThree : {type: String},
    likes : {type: Number}
}, {timestamps: true})

module.exports.Pet = mongoose.model('Pet', PetSchema)