describe('Element Query', function(){

  var query = require('element-query');
  var chai = require('chai');
  chai.should();

  beforeEach(function(){
    this.div = document.createElement('div');
    this.div.style.cssText = "height: 100px; width: 100px";
    document.body.appendChild(this.div);
  });

  afterEach(function(){
    document.body.removeChild(this.div);
  });

  it('should match a media query on an element', function(){
    query(this.div, '(max-width: 100px)').should.equal(true);
    query(this.div, '(min-width: 10000px)').should.equal(false);
  });

});