// My version of a linked list that provides access to only one link in 
// a typical linked list. 
var Link = function(data){
  this.data = data;
  this.next = null;
};

// `add`::(<Link>, <generic>) -> <Link>
// fn takes two routes depending on the type of arguments
// if passed in `instanceof Link`, `add` points to this at the tail
// if passed in any other datatype, add will create a new `Link` and 
// save data to the data property of the `Link`
Link.prototype.add = function(data){


  if ( this.next !== null) {
    return this.next.add(data);
  } else {
    newLink = data instanceof Link ? data: new Link(data);  
    this.next = newLink;
    return newLink;
  }
};

Link.prototype.contains = function(){};

Link.prototype.max = function(value){};
Link.prototype.count = function(){};
Link.prototype.reduce = function(iterator, acc){};
Link.prototype.deleteNode = function(node){};
Link.prototype.checkLoops = function(){};
Link.prototype.removeHead = function(){};
Link.prototype.indexOf = function(){};
Link.prototype.slice = function(){};

// `add` iteratively with a while loop
Link.prototype.add_iterative = function(data) {
  node = this;
  newLink = data instanceof Link ? data: new Link(data);  
  while( node.next !== null ) {
    node = node.next;
  }
  node.next = newLink;
  return newLink;
};

module.exports = {
  Link: Link
};
