//require request and fs modules
var request = require('request');
var fs = require('fs');

//Chained functions to get the request

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
        throw err;
       })
       .on('response', function (response) {
        console.log('Response Status Code: ', response.statusCode, 'Content Type: ', response.headers['content-type'])
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       //Handles finish stream event
        .on('finish', function() {
        console.log('Download complete.');
       });

console.log('Downloading image...');

