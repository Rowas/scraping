var request = require('request');
var cheerio = require('cheerio');

lan = {
	'Västra Götaland': 14,
	'Västernorrland': 22
};

for (antaljobb in lan) {
	var url = 'http://api.arbetsformedlingen.se/platsannons/matchning?lanid=' + lan[antaljobb];
	request(url, ( function(antaljobb) {
		return function(err, resp, body) {
			if (err)
				throw err;
			$ = cheerio.load(body);
			console.log(antaljobb);
			// TODO: scraping goes here!
		}
	} )(antaljobb));
}