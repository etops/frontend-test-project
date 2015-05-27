var express = require('express');
var router = express.Router();

var users = [{'id' : '1', 'firstname' : 'John', 'lastname' : 'Doe', 'address': 'Wallstreet', 'place': 'nyc' },
			{'id' : '2', 'firstname' : 'Hans', 'lastname' : 'Muster', 'address': 'Mustergasse', 'place': 'Zurich'}];
			
var userCounter = 2;

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.send(users);
});

router.post('/', function(req, res) {
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var address = req.body.address;
	var place = req.body.place;
	var userid = userCounter+1 + '';
	users.push({'id' : userid, 'firstname' : firstname, 'lastname': lastname, 'address': address, 'place': place });
	userCounter = userCounter + 1;
	res.send(users[userid]);	
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
	var found = false;
	for (var i = 0; i < users.length; i++){
	  // look for the entry with a matching `code` value
	  if (users[i].id == id){
		 found = true;
		 res.send(users[i]);
	  }
	}
	if(!found)
	res.send("not found");
});

router.put('/:id', function(req, res) {
	var id = req.params.id;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var address = req.body.address;
	var place = req.body.place;
	var found = false;
	for (var i = 0; i < users.length; i++){
	  // look for the entry with a matching `code` value
	  if (users[i].id == id){
		 users[i].firstname = firstname;
		 users[i].lastname = lastname;
		 users[i].address = address;
		 users[i].place = place;
		 found = true;
		 res.send("updated");
	  }
	}
	if(!found)
	res.send(id + " not found");
});

router.delete('/:id', function(req, res) {
	var id = req.params.id;
	var found = false;
	for (var i = 0; i < users.length; i++){
	  // look for the entry with a matching `code` value
	  if (users[i].id == id){
		 found = true;
	     users.splice(i,1);
		 res.send("deleted");
	  }
	  
	}
	if(!found)
	res.send(id + " not found");
	
});

module.exports = router;
