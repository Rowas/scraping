var request = require('request');
var write = require('write-file-stdout');

var antal = "antal sidor";

//Define url to pull from.
//Define headers to get proper access to the API.
var options = {
url: 'http://api.arbetsformedlingen.se/platsannons/matchning?lanid=14&nyckelord=bagare', headers: {
'Accept': '*/*',
'Accept-Language': 'se-SV'
}
};

// &sida=n där n representerar vilken sida som visas, incorporate this in script.

//Make a request to pull the body of the relevant listing site.
request(options, function(error, response, body) {
if (!error) {

var kropp = body

console.log(kropp)

var myRe = /<antal_sidor>.*<\/antal_sidor>/;
antal = myRe.exec(kropp);

console.log(response.statusCode);

console.log(antal);

//write('scrape.txt', body); //Write the pulled info to a local file.
}	//TODO: Incorp into a database for easy searching.
else	//If something fails, output the error code for debugging.
{
console.log(error);
}
});
