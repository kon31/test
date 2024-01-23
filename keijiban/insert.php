<?php

mb_internal_encoding("utf8");

$pdo = new PDO("mysql:dbname=lesson03;host=localhost;","root","");
$pdo -> exec("insert into diworks_keijiban(handlename,title,comments)
        values('".$_POST['handlename']."','".$_POST['title']."','".$_POST['comments']."');");

header("Location:http://localhost/diworks_keijiban/index.php");

?>

<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="utf-8">
        <title>diworksblog 掲示板</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
<body>



</body>
</html>