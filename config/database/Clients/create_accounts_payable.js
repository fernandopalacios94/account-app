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
	con.query('CREATE TABLE `accounts_payable` (\
		`id`           int NOT NULL AUTO_INCREMENT PRIMARY KEY,\
		`provider_id`  int(9) NOT NULL,\
		`total`        decimal(12,2),\
		`concept`      varchar(255))', function (err, result) {
		if (err) throw err;
		console.log('Table "accounts_payable" created succesfully');
	});
});