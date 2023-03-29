const mongoose = require('mongoose');
const { Schema } = mongoose;

const BourseSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    montant: {
        type: Number,
    },
    niveaux: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Niveau'
        }
    ],
    domaines: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Domaine'
        }
    ],
    dateLimite: {
        type: Date,
    },
    paysDestination: {
        type: String,
    },
    universiteDestination: {
        type: String,
    }
});

const Bourse = mongoose.model('Bourse', BourseSchema);
module.exports = Bourse;
