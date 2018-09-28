const bcrypt = require("bcrypt");

class passwordHashUtil {
	static hashPassword(clearPassword) {
		return new Promise ((resolve, reject) => {
			bcrypt.hash(clearPassword, 10, function(err, hash) {
				if (err) {
					console.log("error while hashing password")
					reject(err);
				} else {
					resolve(hash);
				}
			});
		});
		
	}
}

module.exports = passwordHashUtil;