var request = require('request');
var write = require('write-file-stdout');

var options = {
url: 'http://api.arbetsformedlingen.se/platsannons/2482305'
};

request(options, function(error, response, body) {
if (!error) {
console.log(response.statusCode);
console.log(request.headers);
write('scrape.txt', body);
}
else
{
console.log(error);
}
});
