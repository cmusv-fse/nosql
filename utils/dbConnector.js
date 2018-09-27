const mongoose = require("mongoose");

class dbConnector {

	constructor(location, port, database) {
		let url = 'mongodb://' + location + ':' + port + '/' + database;
		this.dbConnection = mongoose.connect(url, { useNewUrlParser: true });
		mongoose.set('useFindAndModify', false);
		mongoose.set('useCreateIndex', true);
	}

}

module.exports = dbConnector;
