const User = require("../models/user");
class UserController {

	static getAllUsers() {
		const newUser = User();
		console.log(newUser);
		newUser.findAll()
		.then(users => {
			res.status(200).send(users);
		})
		.catch(err => {
			console.log("Error while getting all users", err);
			res.status(500).send(err);
		});
	}

	static getUserById(req, res) {
		console.log("get user by Id with id", req.params.userId);
	}

	static createUser(req, res) {
		console.log("create user with content", req.body.userName, req.body.password);
	}

	static updateUser(req, res) {
		console.log("update user with id", req.body.userName, req.params);
	}

	static deleteUser(req, res) {
		console.log("delete user with id", req.params.id);
	}

}

module.exports = UserController;