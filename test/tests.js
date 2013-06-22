describe('Element Query', function(){

  var query = require('element-query');
  var chai = require('chai');
  chai.should();

  beforeEach(function(){
    this.div = document.createElement('div');
    this.div.style.cssText = "height: 100px; width: 100px";
    document.body.appendChild(this.div);
  });

  it('should correct run a width media query', function(){
    query(this.div, '(max-width: 100px)').matches.should.be.true;
    query(this.div, '(min-width: 500px)').matches.should.be.false;
  });

  it('should correct run a height media query', function(){
    query(this.div, '(max-height: 100px)').matches.should.be.true;
    query(this.div, '(min-height: 500px)').matches.should.be.false;
  });

  it('should remove the iframes', function(){
    document.querySelectorAll('iframe').length.should.equal(0);
  });

});