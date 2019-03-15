const express = require('express');
const router = express.Router();

const users = [{'id' : '1', 'firstname' : 'John', 'lastname' : 'Doe', 'address': 'Wallstreet', 'place': 'nyc' },
			{'id' : '2', 'firstname' : 'Hans', 'lastname' : 'Muster', 'address': 'Mustergasse', 'place': 'Zurich'}];

let userCounter = 2;

/* GET users listing. */
router.get('/', (req, res, next) => {
  //res.send('respond with a resource');
  res.send(users);
});

router.post('/', (req, res) => {
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const address = req.body.address;
	const place = req.body.place;
	const userid = userCounter + 1 + '';
	users.push({'id' : userid, 'firstname' : firstname, 'lastname': lastname, 'address': address, 'place': place });
	userCounter = userCounter + 1;
	res.send(users[userid]);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
	let found = false;
	for (let i = 0; i < users.length; i++){
	  // look for the entry with a matching `code` value
	  if (users[i].id == id){
		 found = true;
		 res.send(users[i]);
	  }
	}
	if(!found)
	res.send("not found");
});

router.put('/:id', (req, res) => {
	const id = req.params.id;
	const firstname = req.body.firstname;
	const lastname = req.body.lastname;
	const address = req.body.address;
	const place = req.body.place;
	let found = false;
	for (let i = 0; i < users.length; i++){
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

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	let found = false;
	for (const i = 0; i < users.length; i++){
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
