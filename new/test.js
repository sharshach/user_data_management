const mysql = require('mysql');

const con = mysql.createConnection({
	  host: "192.168.43.1",
	  user: "root",
	  database: 'mydatabase',
});

con.connect(function(err) {
	  if (err) throw err;
	  con.query("SELECT * FROM tasks", function (err, result, fields) {
		      if (err) throw err;
		      console.log(result);
		    });
});
