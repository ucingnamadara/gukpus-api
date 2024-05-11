const Pet = require('../models/Pet');

// Create a new pet
exports.createPet = async (req, res) => {
    try {
        const newPet = await Pet.create(req.body);
        return res.status(201).json(newPet);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

// Get all pets
exports.getPets = async (req, res) => {
    try {
        const pets = await Pet.find({ownerId : req.user.userId});
        return res.json(pets);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// Get a single pet
exports.getPetById = async (req, res) => {
    try {
        const pet = await Pet.findOne({_id: req.params.id, ownerId: req.user.userId});
        if (!pet) {
            return res.status(404).json({ error: 'Pet not found' });
        }
        res.json(pet);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

// Update a pet
exports.updatePet = async (req, res) => {
    try {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPet) {
            return res.status(404).json({ error: 'Pet not found' });
        }
        return res.json(updatedPet);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

// Delete a pet
exports.deletePet = async (req, res) => {
    try {
        const deletedPet = await Pet.findByIdAndUpdate(req.params.id, {isActive : false}, { new: true });

        if (!deletedPet) {
            return res.status(404).json({ error: 'Pet not found' });
        }
        return res.json({ message: 'Pet deleted successfully' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};
