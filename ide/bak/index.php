<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>Edit and Stuff</title>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript">
		$(document).ready(function() {
			$('#ta-bak').focus();
			$('#ta-pri').click(function() {
  				$('#ta-bak').focus();
			});
		});
	</script>
</head>

<body>
	<textarea id="ta-bak" style="width:500px;height:500px;position:absolute;top:0px;right:0px;z-index:-1;"></textarea>
	<div id="ta-pri" style="width:500px;height:500px;position:absolute;top:0px;right:0px;z-index:0;"></div>
</body>

</html>