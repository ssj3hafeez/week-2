var https = require('https');  //using require function here//


// STEP 2 // 

function getAndPrintHTML() {

    var requestOptions = {
        host: 'themindunleashed.com',
        path: '/'
    };

    // notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response

   https.get(requestOptions,function(response) {

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
        console.log(str);
    });
   
});

}
getAndPrintHTML();

