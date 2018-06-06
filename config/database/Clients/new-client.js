var mysql = require('mysql');
var con   = mysql.createConnection({
	host:       'localhost',
	user:       'root',
	password:   '',
	database:   'accounts',
	socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
});
con.connect(function(err){
	if(err){
		throw err;
	}else{
	}
});