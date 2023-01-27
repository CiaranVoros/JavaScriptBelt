const PetController = require('../controllers/pet.controller')

module.exports = function(app) {
    app.get('/allPets', PetController.allPets);
    app.get('/pet/:id', PetController.getPet);
    app.post('/pet/new', PetController.createPet);
    app.put('/pet/edit/:id', PetController.updatePet);
    app.delete('/pet/delete/:id', PetController.deletePet);
}