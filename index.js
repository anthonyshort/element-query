module.exports = function(el, query) {
  if(!exports.frame) {
    var frame = document.createElement('iframe');
    frame.style.border = "none";
    frame.style.padding = "0";
    frame.style.margin = "0";
    frame.style.display = "none";
    document.body.appendChild(frame);
    exports.frame = frame;
  }
  exports.frame.style.width = el.clientWidth + 'px';
  exports.frame.style.height = el.clientHeight + 'px';
  var mq = exports.frame.contentWindow.matchMedia(query);
  return mq.matches;
};