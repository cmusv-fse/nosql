const User = require("../models/user");
class UserController {
	static getAllUsers(req, res) {
		User.find()
		.then(users => {
			res.status(200)
			.send(users)
		})
	}

	static getUserById(req, res) {
		User.findOne({userName: req.params.userId})
		.then(user => {
			res.status(200)
			.send(user)
		});
	}

	static createUser(req, res) {
		let user = new User(req.body)   // BAD practice
		user.save()
		.then(savedData => {
			res.status(201).send(savedData)
		})
	}

	static updateUser(req, res) {
		User.update({userName: req.params.userId}, req.body)
			.then(result => {
				res.status(200).send(result)
			})
	}

	static deleteUser(req, res) {
		User.deleteOne({userName: req.params.userId})
		.then(user => {
			res.status(204).send('')
		});
	}
}

module.exports = UserController;
