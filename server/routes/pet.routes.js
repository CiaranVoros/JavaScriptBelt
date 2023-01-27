const PetController = require('../controllers/pet.controller')

module.exports = function(app) {
    app.get('/api/allPets', PetController.allPets);
    app.get('/api/pet/:id', PetController.getPet);
    app.post('/api/pet/new', PetController.createPet);
    app.put('/api/pet/edit/:id', PetController.updatePet);
    app.delete('/api/pet/delete/:id', PetController.deletePet);
}