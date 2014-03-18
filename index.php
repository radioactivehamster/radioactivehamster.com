<?php

#require_once './inc/class.RadHam_Page.php';

#echo RadHam\Page::header();

require_once './inc/class.RadApp.php';

$app = new RadApp();

echo $app->js(['jquery', '//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.2/js/bootstrap.min.js'])
          ->css(['style'])
          ->header(['title' => 'Hello World!']);

?>

<body>

    <div>Stuff is cool & stuff!</div>

</body>

<?php

echo $app->footer();

unset($app);

?>
