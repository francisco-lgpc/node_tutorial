var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/read_me.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write_me.txt');


myReadStream.on('data', function(chunk){
  console.log('new chunk received');
  myWriteStream.write(chunk);
});

// or using a pipe:
// myReadStream.pipe(myWriteStream);
