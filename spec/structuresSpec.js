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

  // it("should add children to the tree", function() {
  //   tree.addChild(5);
  //   expect(tree.children[0].value).to.equal(5);
  // });

  //   assert.isFalse(tree.contains(6));
  //   expect(tree.children[0].value).to.equal(6);

});
