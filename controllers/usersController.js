const User = require("../models/user");
class UserController {

	static getAllUsers(req, res) {
		User.find()
		.then(users => {
			res.status(200).send(users);
		})
		.catch(err => {
			console.log("Error while getting all users", err);
			res.status(500).send(err);
		});
	}

	static getUserById(req, res) {
		User.findById(req.params.userId)
		.then(user => {
			res.status(200).send(user);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static createUser(req, res) {
		let newUser = new User();
		newUser.userName = req.body.userName;
		newUser.password = req.body.password;
		newUser.fname = req.body.fname;
		newUser.lname = req.body.lname;
		newUser.save()
		.then(savedUser => {
			res.status(201).json({_id: savedUser._id});
		})
		.catch(err => {
			console.log("error while creating user", err);
			res.status(500).send(err);
		})
	}

	static updateUser(req, res) {
		let address = {};
		address.street = req.body.street;
		address.city = req.body.city;
		address.zipCode = req.body.zipCode;
		User.findByIdAndUpdate(req.params.userId, { $set: { address: address } }, {new: true})
		.then(user => {
			res.status(202).send(user); // 202: "Accepted"
		})
		.catch(err => {
			console.log("error while updating user", err);
			res.status(500).send(err);
		});
	}

	static deleteUser(req, res) {
		User.findById(req.params.userId).remove()
		.then(user => {
			res.status(202).end();
		})
		.catch(err => {
			console.log("error while deleting user from the database", err);
			res.status(500).send(err);
		})
	}
}
module.exports = UserController;