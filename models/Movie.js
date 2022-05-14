const mongoose = require('mongoose');
const Movie = mongoose.model('Movie', {
    name: String,
    type: String,
    path: String
})

module.exports = Movie;