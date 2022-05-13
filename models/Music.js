const mongoose = require('mongoose');
const Music = mongoose.model('Music', {
    name: String,
    type: String,
    path: String
})

module.exports = Music;