var https = require('https');  //using require function here//



    var requestOptions = {
        host: 'themindunleashed.com',
        path: '/'
    };

   https.get(requestOptions,function(response) {

    // encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when data chunk is receieved 
    response.on('data', function (data) {
        console.log('Chunk Recieved. Length:', data.length);
    });


    //callback is invoked when all of the data has been received
    response.on('end', function() {
        console.log('Response stream complete');
    });
   
});
