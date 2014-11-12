var express = require('express');
var router = express.Router();
var data = require("../data.json")

/* GET home page. */
router.get('/', function(req, res) {
	var myArtwork = []
	var artists = []

	data.speakers.forEach(function (item){
		artists = data.speakers
		myArtwork = myArtwork.concat(item.artwork)
	})	
  res.render('index', { title: 'Home',
  						artwork: myArtwork,
  						artists: artists,
  						page:"home"
   });
  
});


router.get('/speakers', function(req, res) {
	var myArtwork = []
	var artists = []

	data.speakers.forEach(function (item){
		myArtwork = myArtwork.concat(item.artwork)
		artists = data.speakers
	})	
  res.render('speakers', { title: 'Speakers',
  						artwork: myArtwork,
  						artists: artists,
  						page: "list"
   });
  
});

router.get('/speakers/:speakerid', function(req, res) {
	var myArtwork = []
	var artists = []
	data.speakers.forEach(function (item){
		if(item.shortname == req.params.speakerid){

			artists.push(item)
			myArtwork = myArtwork.concat(item.artwork)
		}
	})	
  res.render('speakers', { title: "Speakers",
  							artwork: myArtwork,
  							artists: artists,
  							page:"detail"

   });
  
});





module.exports = router;
