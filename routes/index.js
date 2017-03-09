var express = require('express');
var perma = require('perma');
var validurl = require('valid-url');
var url = require ('url');
var router = express.Router();
var tinyurl = "";
var longurl = '';
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: "BASEJUMP API, URL SHORTENER.",
                         subheader: "EXAMPLE USAGE.",
                         sample:  "https://www.google.co.uk/maps",
                         expectedoutput: "EXPECTED OUTPUT",
                         output: '"http://wwusW"'});

       
});
router.post('/Lurl', function(req, res){
    var suspect = req.body.LUrl;
  if (validurl.isUri(suspect)) {
longurl = suspect;
tinyurl = 'http://' + perma(longurl);
console.log(tinyurl); 
res.render('index', { tinyurl: tinyurl,
                      instruction: "click the minified link"});
  }
    else{
        res.render('index', {tinyurl: 'NULL URL'});
    }
})

router.get('/:tinyurl', function(req, res) {
console.log('redirected');
    res.redirect(longurl);
          
})
module.exports = router;
