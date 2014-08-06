var expect = chai.expect;
var assert = chai.assert;

describe("Link", function() {
  var newLink;

  beforeEach(function() {
    newLink = new Link(7);
  });

  it("`add` and `each` are functions on the Link prototype", function() {
    expect(newLink.each).to.be.a('function');
    expect(newLink.add).to.be.a('function');
  });

  it("`each` should take a callback", function() {
    newLink.add(10);
    newLink.add(100);
    newLink.each(function(link){
      link.data *= 1000;
    });
    expect(newLink.data).to.equal(7000);
    expect(newLink.next.data).to.equal(10000);
    expect(newLink.next.next.data).to.equal(100000);
  });

  it("`add` should add to tail and return new link", function() {
    newLink.add(10);
    var tail = newLink.add(100);
    expect(newLink.data).to.equal(7);
    expect(newLink.next.data).to.equal(10);
    expect(newLink.next.next.data).to.equal(100);
    expect(tail.data).to.equal(100);
  });

  it("`contains` should return a boolean", function() {
    newLink.add(1);
    newLink.add(11);
    expect(newLink.contains(1)).to.equal(true);
    expect(newLink.contains(2)).to.equal(false);
    expect(newLink.contains(11)).to.equal(true);
  });

  it("`count` should return an integer with the current link count", function() {
    expect(newLink.count()).to.equal(1);
    newLink.add(1);
    newLink.add(11);
    expect(newLink.count()).to.equal(3);
  });

  it("`max` should return the maximum value at link.data", function() {
    expect(newLink.max()).to.equal(7);
    newLink.add(1);
    newLink.add(11);
    expect(newLink.max()).to.equal(11);
  });

  it("`max` should take a string and return maximum value at link.data[<string>]", function() {
    var kale = new Link({name: "Patrick", age: 25});
    expect(kale.max("age")).to.equal(25);
    kale.add({name: "D", age: 24});
    kale.add({name: "Hilary", age: 26});
    expect(kale.max("age")).to.equal(26);
  });

  it("`indexFrom` should return 0 for current and count increasingly", function() {
    expect(newLink.indexFrom(7)).to.equal(0);
    newLink.add(1);
    newLink.add(11);
    expect(newLink.indexFrom(11)).to.equal(2);
    expect(newLink.indexFrom(999)).to.equal(-1);
  });
  // it("should add children to the tree", function() {
  //   tree.addChild(5);
  //   expect(tree.children[0].value).to.equal(5);
  // });

  //   assert.isFalse(tree.contains(6));
  //   expect(tree.children[0].value).to.equal(6);

});
