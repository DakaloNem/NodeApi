const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: "Tiltle is required",
        minlength: 4,
        maxlength: 150
    },
    body: {
        type: String,
        required: "Body is required",
        minlength: 4,
        maxlength: 200
    }
});

module.exports = mongoose.model("Post", postSchema);