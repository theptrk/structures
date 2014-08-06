// My version of a linked list that provides access to only one link in 
// a typical linked list. 
var Link = function(data){
  this.data = data;
  this.next = null;
};

Link.prototype.each = function(cb) {
  cb(this);

  if (this.next !== null) {
    this.next.each(cb);
  }
};

// `tail` recurses until it finds the tail and returns the result of a 
// invoking a passed in callback on the tail.
Link.prototype.tail = function(cb){
  
  if ( this.next !== null ) {
    return this.next.tail(cb);
  } else {
    return cb(this);
  }
};

// `add`::(<Link>, <Generic_Data>) -> <Link>
// fn takes two routes depending on the type of arguments
// if passed in `instanceof Link`, `add` points to this at the tail
// if passed in any other datatype, add will create a new `Link` and 
// save data to the data property of the `Link`
Link.prototype.add = function(data){

  var newLink = data instanceof Link ? data: new Link(data);  
  
  // v is the tail and we set a new tail here and returns up the stack
  return this.tail(function(v){
    v.next = newLink;
    return newLink;
  });
};

Link.prototype.contains = function(target){

  var check = false;
  this.each(function(link){
    if (link.data === target) {
      check = true;
    }
  });
  return check;
};


Link.prototype.max = function(value){};
Link.prototype.count = function(){};
Link.prototype.reduce = function(iterator, acc){};
Link.prototype.deleteNode = function(node){};
Link.prototype.checkLoops = function(){};
Link.prototype.removeHead = function(){};
Link.prototype.indexOf = function(){};
Link.prototype.slice = function(){};

module.exports = {
  Link: Link
};
