(function() {
  /* Facebook tracking*/

  (function() {
    var _fbq = window._fbq || (window._fbq = []);
    if (!_fbq.loaded) {
      var fbds = document.createElement('script');
      fbds.async = true;
      fbds.src = '//connect.facebook.net/en_US/fbds.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(fbds, s);
      _fbq.loaded = true;
    }
    _fbq.push(['addPixelId', '704166686299389']);
  })();
  window._fbq = window._fbq || [];
  window._fbq.push(['track', 'PixelInitialized', {}]);


  /* Twitter tracking*/
  twttr.conversion.trackPid('l4qhr');

})();