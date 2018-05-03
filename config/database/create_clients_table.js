var mysql = require('mysql');

var con = mysql.createConnection({
	host:       'localhost',
	user:       'root',
	password:   'root',
	database:   'accounts',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
});

con.connect(function(err) {
	if (err) {
		console.log('Error at line 11');
		throw err;
	}
	console.log('Connected!');
	con.query('CREATE TABLE `clients` (\
		`id`          int NOT NULL AUTO_INCREMENT PRIMARY KEY,\
		`name`        varchar(60) NOT NULL,\
		`phonenumber` varchar(20),\
		`email`       varchar(255),\
		`rfc`         varchar(13))', function (err, result) {
		if (err) throw err;
		console.log('Table "clients" created succesfully');
	});
});