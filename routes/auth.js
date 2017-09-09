let express = require('express');
let router = express.Router();

let dotenv = require('dotenv'); //enables environment variables for development
dotenv.config({path: '../.env'});

/* GET home page. */
router.get('/:client_id/:redirect_uri/:state/:response_type', function(req, res) {

	// 1. check if client_id is correct
	if (req.params.client_id !== process.env.GOOGLE_CLIENT_ID) {
	    return res.send({status: 500, message: 'unauthorized! not the correct client_id'});
	}

	// 2. check if redirect uri has the right format
	if (req.params.redirect_uri !== 'https://oauth-redirect.googleusercontent.com/r/' + process.env.MY_PROJECT_ID) {
		return res.send({status: 400, message: 'incorrect redirect_uri format!!!'});
	}



	res.render('index', { title: 'Express' });
});

module.exports = router;
