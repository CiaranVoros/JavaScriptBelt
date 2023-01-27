const {Pet} = require('../models/pet.model')

module.exports.createPet = (request, response) => {
    const{petType, name, description, skillOne, skillTwo, skillThree} = request.body;
    Pet.create({
        petType,
        name,
        description,
        skillOne,
        skillTwo,
        skillThree
    })
    .then(pet => response.json(pet))
    .catch(err => response.status(400).json(err))
}

// module.exports.allPets = (request, response) => {
//     Pet.find().sort({petType: 1},
        
//         )
//     .then(pets => response.json(pets))
//     .catch(err=> response.json(err))
// }

module.exports.allPets = (request, response) => {
    Pet.find({})
    .collation({locale:"en"})
    .sort({petType: 1})
    .exec()
    .then(pets => response.json(pets))
    .catch(err=> response.json(err))
}

module.exports.getPet = (request, response) => {
    Pet.findOne({_id: request.params.id})
    .then(pet => response.json(pet))
    .catch(err => response.json(err))
}

module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators: true})
    .then(updatedPet => response.json(updatedPet))
    .catch(err => response.status(400).json(err))
}

module.exports.deletePet = (request, response) => {
    Pet.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}