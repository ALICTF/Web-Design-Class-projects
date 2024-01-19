<style>
    h1 {
        text-align: center;
        color: red;
    }
</style>

<?php

#print method & primitive type

echo "my first code in php";
echo "this is test";
echo "<ul;>
<li>test in echo with php</li>
<li>test in echo with php</li>
<li>test in echo with php</li>
<li>test in echo with php</li>
</ul;>";

echo "<h2 style = 'color:yellow; text-align:center;' >Hello - word</h2>";
echo "<h3 style = 'color:#ccc; text-align:center;' >Hello - word</h3>";
echo "<h4 style = 'color:gold; text-align:center;' >Hello - word</h4>";
echo "<h5 style = 'color:purple; text-align:center;' >Hello - word</h5>";
echo "<h6 style = 'color:green; text-align:center;' >Hello - word</h6>";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1 <?php echo "hello-world" ?>></h1>
    <h2 <?php echo "hello-world" ?>></h2>
    <h3 <?php echo "hello-world" ?>></h3>
    <h4 <?php echo "hello-world" ?>></h4>
    <h5 <?php echo "hello-world" ?>></h5>
    <h6 <?php echo "hello-world" ?>></h6>
</body>

</html>

<?php
$firsName = "ali";
$lastName = "rezaei";
var_dump($firsName);
echo $firsName . " " . $lastName;
?>

<?php

$ageOfCustomer = 10; // camel case
$CustomerAge = 20; // pascal case
$Customer_age = 20; //underscore 

echo $ageOfCustomer . "" . $Customer_age;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1 <?php echo $firsName ?>></h1>
    <h2 <?php echo $firsName ?>></h2>
    <h3 <?php echo $firsName ?>></h3>
</body>

</html>

<?php 
// variable int float boolean null
$firsName ="kamran";
var_dump ($firsName) ;
$intNumber = 15;
$floatNumber = 15.76;
$booleanValue = true;
$nullVariable = null;
var_dump($intNumber);
var_dump($floatNumber);
var_dump($booleanValue);
var_dump($nullVariable);
$nullVar;
var_dump(@$nullVar);
