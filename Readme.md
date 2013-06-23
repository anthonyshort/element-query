
# element-query

  Test a media query on an element

## Installation

  Install with [component(1)](http://component.io):

    $ component install anthonyshort/element-query

## API

    var query = require('element-query');
    var mq = query(someElement, '(max-width: 960px)'); // Just like matchMedia

    if(mq.matches) {
      el.classList.add('wide');
    }

# How it works

  It creates an iframe, gives it the same dimensions of the element you are testing,
  adds it to the page and uses the iframes `matchMedia` to test the query.

  element-query creates a hidden iframe on the page and re-uses each time the method
  is called. While a bit dirty, it is [much, much faster](http://jsperf.com/element-queries-with-iframe).

# Limitations

  You can't use `addListener` on the element query just yet. I might look at adding
  this if it's needed, but I just don't need it yet.

## License

  MIT
