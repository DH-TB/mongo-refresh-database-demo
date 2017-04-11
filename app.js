let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

let Cat = mongoose.model('Cat', {
    name: String,
    friends: [String],
    age: Number,
});

module.exports=Cat;