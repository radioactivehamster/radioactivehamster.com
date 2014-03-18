<?php

namespace RadHam;

class Page
{
	public static function header() {
		#return require './html/header.php';
		return file_get_contents(dirname(__FILE__) . '/html/header.html');
	}
}

?>