(function () {

   var pageDepth = 0,
       relPath = '',
       jsScriptTag;

   for (var path = location.pathname, len = path.length, c = 0, ca = path[c]; c < len; ++c) {

       if (ca === '/') {
           pageDepth += 1;
       }

   }

   if (pageDepth > 1) {

       for (var i = 0; i < pageDepth; relPath += '../', ++i);

   } else {
       relPath = './';
   }

   var headH = document.getElementsByTagName('head')[0];
       

   // JQuery
   var jqueryTag = document.createElement('script');
   jqueryTag.src = relPath + 'js/lib/jquery.min.js';

   headH.appendChild(jqueryTag);

   // Bootstrap (LESS)
   var bootstrapLess = document.createElement('link');
   bootstrapLess.rel = 'stylesheet/less';
   bootstrapLess.type = 'text/css';
   bootstrapLess.href = relPath + 'css/less/lib/bootstrap/bootstrap.less';

   headH.appendChild(bootstrapLess);

   // Font Awesome (CSS)
   var fontaweTag = document.createElement('link');
   fontaweTag.rel = 'stylesheet/less';
   fontaweTag.type = 'text/css';
   fontaweTag.href = relPath + 'css/lib/font-awesome.min.css';
       
   headH.appendChild(fontaweTag);
       
   // LESS (JS)
   var lessJs = document.createElement('script');
   lessJs.src = relPath + 'js/lib/less.min.js';

   headH.appendChild(lessJs);

})();



(function () {
   
   var pageDepth = 0,
       relPath = '',
       jsScriptTag;
   
   for (var path = location.pathname, len = path.length, c = 0, ca = path[c]; c < len; ++c) {

       if (ca === '/') {
           pageDepth += 1;
       }
       
   }

   if (pageDepth > 1) {

       for (var i = 0; i < pageDepth; relPath += '../', ++i);

   } else {
       relPath = './';
   }
   
   $.each(["es5-shim", "modernizr-respond", "prefixfree", "bootstrap", "equalize", "coffee-script"], function() {
       jsScriptTag += '<script src="' + relPath + 'js/lib/' + this.toString() + '.min.js">' + '<\/script>';
   });

   if (jsScriptTag) {
       $('#jsLoader').append(jsScriptTag);
   }

})();