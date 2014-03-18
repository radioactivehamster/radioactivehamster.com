<!DOCTYPE html>
<html>

<head>
	<meta charset=utf-8>
	<!--<script src="http://code.jquery.com/jquery-2.0.0.min.js"></script>-->
	<style>
		/* Monospace stack */
		body {
			font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
		}
		/* ^^ From CSS-Tricks */
	</style>
</head>

<body>
	<div id="editor-wrapper">
		<ol id="editor-list">
			<!-- Crazy list stuff goes in here dawg... -->
		</ol>
	</div>
</body>

<script src="./js/RH.js"></script>
<!--<script src="../rh.js/getJson.js"></script>-->
<script type="text/javascript">

	// @from JavaScript: The Good Parts
	// Define a function that sets a DOM node's color
	// to yellow and then fades it to white.

	var fade = function(node) {
		var level = 1;
		var step = function() {
			var hex = level.toString(16);
			node.style.backgroundColor = '#FFFF' + hex + hex;
			if (level < 15) {
				level += 1;
				setTimeout(step, 100);
			}
		};
		setTimeout(step, 100);
	};
	fade(document.body);

</script>

</html>