<?php
// single line 
/*
multi line
*/
$firstName = "turaj";
$lastName = "ahmadi";
$email = "alictf1@gmail.com";
$password = "1234";
var_dump($firstName . ' ' . $lastName);
echo ($firstName . "</br>" . $lastName . "</br>" . $email . "</br>" . $password);
?>
<hr>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1> <?php echo ($firstName . ' ' . $lastName); ?></h1>
    <h2> <?php echo ($firstName . ' ' . $lastName); ?></h2>
    <h3> <?php echo ($firstName . ' ' . $lastName); ?></h3>
</body>

</html>

<hr>
<hr>
<hr>

<?php 
echo ("<h1> my name is $firstName and my last name is $lastName </h1>");

?>
<hr>
<hr>
<hr>
<?php 
//Numbers = float anb int 
$num1 = 100;
$num2 = 10.1234511454564645465;
$num3 = 1000500060007;
var_dump($num1);
var_dump($num2);
var_dump($num3);

//boolean
$flag = true;
$flag2 = false;
var_dump($flag);
var_dump($flag2);
$flag3 = null;
var_dump($flag3);
?>
<hr>
<hr>
<hr>
<?php   
//immutable
//gc garbage collector : dynamic change for variables . change type an value of variable .  primitive primary variables .
$x = 'ali';
echo ($x);
$x = 100;
echo ($x);
//operator
$x = 100;
$y = 200;
$sum =$x+$y;
echo("<h1>$sum</h1>");
$sub =$x-$y;
echo("<h1>$sub</h1>");
$mul =$x*$y;
echo("<h1>$mul</h1>");
$div =$x/$y;
echo("<h1>$div</h1>");
//assignment
$x = 10;
$y = 20;
$x+=$y;
echo($x);
$x-=$y;
echo($x);
$x*=$y;
echo($x);
$x/=$y;
echo($x);
//boolean comparative == output is boolean
$x = 20;
$y = 30;
$result =  $x > $y;
echo("</br>");
var_dump($result);
$result =  $x >= $y;
echo("</br>");
var_dump($result);
$result =  $x < $y;
echo("</br>");
var_dump($result);
$result =  $x <= $y;
echo("</br>");
var_dump($result);
$x = "30";
$y = 30;
$result =  $x == $y;
echo("</br>");
var_dump($result);
$result =  $x === $y;
echo("</br>");
var_dump($result);
$result =  $x !== $y;
echo("</br>");
var_dump($result);
$result =  $x != $y;
echo("</br>");
var_dump($result);
// and or && || !
$x = 20;
$y = 30;
$z = 40;
$c = 40;
$result =  $x > $y && $x > $z && $x == $z;
echo("</br>");
var_dump($result);
$result =  $x > $y || $x > $z || $x == $z;
echo("</br>");
var_dump($result);
$result = !($x > $y || $x > $z || $x == $z);
echo("</br>");
var_dump($result);
?>
<hr>
<hr>
<hr>
<?php 
// is 
$x = 100;
echo is_int($x);// is_int : return the type of that variable that is true or false
echo("</br>");
var_dump(is_int($x));
echo("</br>");
var_dump(intval($x)); //casting  change type to int : intval floatval strval boolval these change the variable type 
echo("</br>");
$x =$_GET['id'];
var_dump($x);
echo("</br>");
$x =intval($_GET['id']);
var_dump($x);// prevent the data leakage  
// numeric string : if we have string number it returns true 
?>
<?php 






