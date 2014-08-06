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
    return cb === undefined ? this: cb(this);
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

Link.prototype.indexFrom = function(target) {
  var index = 0;
  var found = false;
  this.each(function(link){
    if(!found && link.data === target) {
      found = true;
    }
    if (!found) {
      index += 1;
    }
  });
  return !found ? -1: index;
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

Link.prototype.count = function(){
  if (this.next === null) {
    return 1;
  }
  return this.next.count() + 1;
};

// `max` may take an argument `prop` that specifies the propery given
// a link with an object as the data argument. Defaults to assuming data is an integer
Link.prototype.max = function(prop){
  if (this.next === null) {
    return typeof prop === "string" ? this.data[prop]: this.data;
  }
  return typeof prop === "string" ?
    Math.max(this.next.max(prop), this.data[prop]):
      Math.max(this.next.max(), this.data);
};

// `hackDelete` is given only a node and if it is not a tail, the fn will
// copy the current node data from next and assign next to next.next
Link.prototype.hackDelete = function(node){
  if (this.next === null) {
    throw ("Cannot hack delete a tail node");
  }
  this.data = this.next.data;
  this.next = this.next.next;
};


Link.prototype.reduce = function(iterator, acc){};
Link.prototype.checkLoops = function(){};
Link.prototype.indexOf = function(){};
Link.prototype.slice = function(){};

module.exports = {
  Link: Link
};
