<!DOCTYPE HTML>
<html>
<head>

    <title>YOLO!</title>

    <script type="application/javascript">
    
    (function() {
     
        var pageDepth = 0, relPath;
     
        for (var path = location.pathname, len = path.length, c = 0; c < len; ++c)
           if (path[c] === '/') /* maybe change this to "path[c] !== '/' && ++pageDepth;" and get rid of the second assignment call?" */
               pageDepth += 1;

           /*
            path[c] !== '/' && ++pageDepth;
           */
     
        if (pageDepth > 1)
           for (var i = 0; i < pageDepth; relPath += '../', ++i);
        else
           relPath = './';
     
        var headH = document.getElementsByTagName('head')[0];
     
        // JQuery
        var jqueryTag = document.createElement('script');
        jqueryTag.src = relPath + 'js/lib/jquery.min.js';
     
        headH.appendChild(jqueryTag);
     
    })();

    </script>

</head>

<body>

    <p>Lorem ipsum and stuff that's totally cool...</p>

</body>

<script type="application/javascript">

(function(window) {

    var jqueryChk = function() {

        this.pass = this.pass || 0;
        
        if (typeof $ === 'undefined' && this.pass++ < 500) {
            setTimeout(jqueryChk, 10);
        } else {
            // Do JQuery ninja stuff here...
        }

    };
 
    jqueryChk();

})(window);

</script>

</html>