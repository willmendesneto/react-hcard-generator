/* eslint-disable no-unused-vars*/
var WebFontConfig = {
  google: {
    families: [ 'Open Sans:300,700' ],
  },
};
/* eslint-enable no-unused-vars*/
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
