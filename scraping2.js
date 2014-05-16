//Initiate modules.
var request = require('request');
var fs = require('fs');

//Initiate global variables.
var objekt = "antal sidor";
var p = 1;
var i = 1;
array1 = "stuffs"
array2 = []

//Define url to pull from.
//Define headers to get proper access to the API.
var options = {
url: 'http://api.arbetsformedlingen.se/platsannons/matchning?lanid=14&nyckelord=bagare&sida=' + i, headers: {
'Accept': 'application/json',
'Accept-Language': 'se-SV'
}
};

//Make a request to pull the body of the relevant listing site.
request(options, function(error, response, body) {
if (!error) {

//Parses the body of URL to a JSON object and then put the number of pages as variable for the write loop.
  objekt = JSON.parse(body);
  p = objekt.matchningslista.antal_sidor;

//Appends the end of specified file with the info scraped from the defined URL.
for (i; i <= p; i++ ) {
  request(options, function(error, reponse, body) {
    if (!error) {
    objekt = JSON.parse(body);
	array1 = objekt.matchningslista.matchningdata;
    /*  array1 = objekt;
      for ( var _o, _len = array1.length; _o < _len; _o++) {
        if (array1[_o].matchningslista.matchningdata == _o )
          array2.push(array1[_i]);
      }*/
	  console.log(array1);
    fs.appendFile('scrape.txt', JSON.stringify(array1));
    }
  })
  }
  
  console.log(response.statusCode);

}	//TODO: Incorp into a database for easy searching.
  else	//If something fails, output the error code for debugging.
{
  console.log(error);
}
});
