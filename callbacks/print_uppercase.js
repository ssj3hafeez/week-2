var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


// assuming that we use getHTML we have parsed data presented as a string!
function printUpperCase (html) {
  console.log(html.toUpperCase());
}

getHTML.getHTML(requestOptions, printUpperCase);