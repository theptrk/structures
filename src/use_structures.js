var ds = require('./structures');

var l = new ds.Link(7);
var newlink = l.add(10);
l.add(15);
console.log(l);
console.log(newlink);

console.log('====');

var ll = new ds.Link(777);
l.add(ll);
console.log(ll);