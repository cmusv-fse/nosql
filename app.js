const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
const dbConnector = require("./utils/dbConnector");
const dbConfig = require("./config/dbConfig");

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

const connector = new dbConnector(dbConfig.location, dbConfig.port, dbConfig.dbName);
global.dbConnector = dbConnector.dbConnection;

app.use("/users", userRoutes);

app.listen(app.get("port"), () => {
	console.log("Server listening on port", app.get("port"));
});