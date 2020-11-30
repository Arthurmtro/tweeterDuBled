const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
    content: {
        type: String,
        maxlength: [140, "Votre tweet est trop long"],
        minlength: [3, "Votre tweet est trop court"],
        required: [true, "Champ requis"],
    },
    author: { type: mongoose.Types.ObjectId, ref: 'user', required: true }
});

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;