function createFrame(el) {
  var frame = document.createElement('iframe');
  frame.style.position = "absolute";
  frame.style.visibility = "hidden";
  frame.style.top =  "-10000em";
  frame.style.width = el.clientWidth;
  frame.style.height = el.clientHeight;
  return frame;
}

module.exports = function(el, query) {
  var frame = createFrame(el);
  document.body.appendChild(frame);
  var mq = frame.contentWindow.matchMedia(query);
  document.body.removeChild(frame);
  return mq;
};