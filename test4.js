var request = require('request');
var cheerio = require('cheerio');

lan = {
    'Västra Götaland': 14,
    'Västernorrland': 22,
};
for (jobb in lan) {
    var url = 'http://api.arbetsformedlingen.se/platsannons/matchning?lanid=' + lan[jobb];

    request(url, (function(jobb) { return function(err, resp, body) {
        $ = cheerio.load(body);
        $('#collapsible-content .').each(function() {
            $(this).find('div').each(function() {
                event = $(this).text().trim().replace(/\s\s+/g, ',').split(',');
                if (event.length >= 2 && (event[1].match(/open swim/i) || event[1].match(/family swim/i)))
                    console.log(jobb + ',' + days[day] + ',' + event[0] + ',' + event[1]);
            });
        });
    }})(jobb));
}