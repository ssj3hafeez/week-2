var https = require('https');  //using require function here//

// global variable 
var requestOptions = {
    host: 'themindunleashed.com',
    path: '/'
}


// STEP 4 // 

function getHTML(options, callback) {

    // notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response

   https.get(options,function(response) {

    // creating a string to hold values 
    let str = ('');
    // encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when data chunk is rec'd and added 
    response.on('data', function (data) {
        str += data;
    });


    //callback is invoked when all of the data has been received
    response.on('end', function() {
        callback(str);
        console.log('It works')
    });
   
});
}

function printHTML(html) {
    console.log(html);
}

getHTML(requestOptions, printHTML);
