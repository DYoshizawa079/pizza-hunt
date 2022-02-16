// Import Mongoose's Schema constructor and model function
const { Schema, model } = require('mongoose');

// Note that unlike Sequelize, the data types are same as JS's native Data Types
const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        // Run Date.now to automatically add timestamp
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    // [] indicate that an array is the data type here
    toppings: []
});

// Create the Pizza model using the PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// Export the Pizza model
module.exports = Pizza;