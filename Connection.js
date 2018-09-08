const mysql = require ("mysql");

// Create connection to database Stocker
const db = mysql.createConnection({
	host 				: "localhost",
	user 				: "root",
	password		: "",
	database		: "Stocker"
});

// Connect
db.connect((err) => {
	if(err){
		console.log("Not connected");
	} else {
		console.log("Connected!");s
	}
});

module.exports.Con = function () {
	return db;
};

//<>