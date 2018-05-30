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
	con.query('CREATE TABLE `providers` (\
		`id`          int NOT NULL AUTO_INCREMENT PRIMARY KEY,\
		`name`        varchar(60) NOT NULL,\
		`email`       varchar(60) NOT NULL,\
		`address`     varchar(200) NOT NULL,\
		`rfc`         varchar(13))', function (err, result) {
		if (err) throw err;
		console.log('Table "providers" created succesfully');
	});
});