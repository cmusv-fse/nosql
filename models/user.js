const mongoose = require('mongoose');
const passwordUtil = require("../utils/passwordHashUtil");

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    fname: {type: String, required: false, default: "John"},
    lname: {type: String, required: false, default: "Smith"},
    address: {
        street: {type: String, required: false},
        city: {type: String, required: false},
        zipCode: {type: Number, required: false},
    }
});

userSchema.pre('save', function(next) {
    if (this.isNew) {
        passwordUtil.hashPassword(this.password)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        })
        .catch(err => {
            console.log("error while pre-save hash password", err);
        });
    } else {
        next();
    }
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
