const router = require('express').Router(); //creating route
let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users)) 
    .catch(err => res.status(400).json('Error: '+ err));
}); //to get all the users from db 

router.route('/add').post((req,res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save() //new user saved to mongodb atlas db
    .then(users => res.json('User added!'))
    .catch(err => res.status(400).json('Error: '+ err));
})

module.exports = router;