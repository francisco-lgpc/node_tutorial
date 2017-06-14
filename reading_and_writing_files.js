var fs = require('fs');

// Sync versions

// Reading files
var readMe = fs.readFileSync('read_me.txt', 'utf8');
console.log(readMe);

// Writing files
fs.writeFileSync('write_me.txt', readMe);


// Async version
fs.readFile('read_me.txt', 'utf8', function(err, data){
  fs.writeFile('write_me.txt', data);
});
