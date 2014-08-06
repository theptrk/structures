// `add` iteratively with a while loop until node is tail
Link.prototype.add_iterative = function(data) {
  node = this;
  newLink = data instanceof Link ? data: new Link(data);  
  while( node.next !== null ) {
    node = node.next;
  }
  node.next = newLink;
  return newLink;
};

// `add` iteratively by calling add_recursive until tail
Link.prototype.add_recursive = function(data) {
  if ( this.next !== null) {
    return this.next.add_recursive(data);
  } else {
    var newLink = data instanceof Link ? data: new Link(data);  
    this.next = newLink;
    return newLink;
  }
};

Link.prototype.contains = function(target) {
  if ( this.data === target ) {
    return true;
  }
  if ( this.next !== null ) {
    return this.next.contains(target);
  }
  return false;
};
