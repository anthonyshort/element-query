var frame = document.createElement('iframe');
frame.style.border = "none";
frame.style.padding = "0";
frame.style.margin = "0";
frame.style.display = "none";
document.body.appendChild(frame);

module.exports = function(el, query) {
  frame.style.width = el.clientWidth + 'px';
  frame.style.height = el.clientHeight + 'px';
  var mq = frame.contentWindow.matchMedia(query);
  return mq.matches;
};
