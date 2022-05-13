const mongoose = require('mongoose');
const Serie = mongoose.model('Serie', {
    name: String,
    type: String,
    path: String
})

module.exports = Serie;