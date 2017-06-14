// set Timeout
setTimeout(function(){
  console.log('3 seconds have passed');
}, 3000);


// set Interval
var time = 0;

var timer = setInterval(function(){
  time += 2
  console.log(time + ' seconds have passed')
  if (time > 5){
    clearInterval(timer);
  }
}, 2000);


// dirname and filename
console.log(__dirname);
console.log(__filename);

