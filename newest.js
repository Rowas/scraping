var request = require('request');
var write = require('write-file-stdout');
var cheerio = require('cheerio');

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
console.log(response.statusCode);
write('scrape.txt', body); //Write the pulled info to a local file.
}	//TODO: Incorp into a database for easy searching.
else	//If something fails, output the error code for debugging.
{
console.log(error);
console.log(request.headers);
}
});
