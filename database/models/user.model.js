const mongoose = require('mongoose');
const { use } = require('passport');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = schema({
    username: { type: String, required: true, unique: true },
    local: {
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true }
    },
    avatar: { type: String, default: '/images/default-profile.svg' }
});

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hash(password, 12);
}

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.local.password);
}

const User = mongoose.model('user', userSchema);

module.exports = User;