var mysql = require('mysql');

var con = mysql.createConnection({
	host:       'localhost',
	user:       'root',
	password:   '',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
});

con.connect(function(err) {
	if (err) {
		console.log('Error at line 11');
		throw err;
	}
	console.log('Connected!');
	con.query('CREATE DATABASE accounts', function (err, result) {
		if (err) throw err;
		console.log('Database created');
	});
});