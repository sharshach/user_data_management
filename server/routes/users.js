var express = require('express');
var router = express.Router();
var url=require('url');

/* GET users listing. */
const mysql = require('mysql');

const con = mysql.createConnection({
	  host: "192.168.43.1",
	  user: "root",
	  database: 'userdata',
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
});


const fetch = require("node-fetch");

const put_data = async (url,data) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(data.hackerrank);
    console.log(json);
	if(!(json.message==='Not Found')){
		var keys='(github,linkedin,codechef,hackerrank,name,imageUrl,location,company,followers,following,publicRepo)';
		var newdata="('"+data.github+"','"+data.linkedin+"','"+data.codechef+"','"+data.hackerrank+"','"+json.name+"','"+json.avatar_url+"','"+json.location+"','"+json.company+"','"+json.followers+"','"+json.following+"','"+json.public_repos+"')";
		
	    var sql_new = "INSERT INTO datatable "+keys+" VALUES "+newdata+";";
		con.query(sql_new, function (err, result) {
			if (err){
				throw err;
			}
			console.log("1 record inserted");
		});
	}
	else{
		console.log("github user not present");
	}
} catch (error) {
	  console.log(error);
	}
};
router.post('/:user', function(req, res, next) {
	console.log(req.body.github);
	console.log("in add user");
	const url = "https://api.github.com/users/"+req.body.github;
	put_data(url,req.body);
	res.send("done");
});
router.get('/:user', function(req, res, next) {
	var tempUSER = url.parse(req.url, true);
	console.log(tempUSER.pathname.substring(1));
	var tempGIT=tempUSER.pathname.substring(1);
	con.query("SELECT * FROM datatable WHERE github='"+tempGIT+"'", function (err, result, fields) {
		if (err){
			res.send('an error occoured');
			throw err;
		}
		console.log(result);
		res.send(result);
	});
  
});

router.get('/', function(req, res, next) {
	con.query("SELECT * FROM datatable", function (err, result, fields) {
		if (err){
			res.send('an error occoured');
			throw err;
		}
		console.log(result);
		res.json(result);
	});
  
});

module.exports = router;
