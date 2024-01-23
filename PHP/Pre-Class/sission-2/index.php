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

$x = 20;
if (is_numeric($x)) {
    echo "The value is numeric";
} else {
    echo "The value is not numeric";
}

echo "<hr>";

$userName = "ali";
$lastName;
$firstName;
$password;
if ($userName === "ali") {
    echo '<h1> username is true </h1>';
    if ($password === 123) {
        $fullname = "$firstName $lastName";
        echo 'Your full name is ' . $fullname . '!';
    } else {
        echo 'Wrong password!';
    }
} else {
}

echo "<hr>";

if ($userName === "ali" && $password === 123) {
    echo 'You can login now. Your full name is ' . $fullname . '!';
} else {
    echo 'Sorry, you are not allowed to login!';
}
?>

<?php
$balance = 1500;
$price = 1500;
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>

<body>
    <h1>price is 2000$</h1>


    <?php if ($price <= $balance) : ?>
        <h1>you buy it</h1>
    <?php else : ?>
        <h1>you cant buy</h1>
    <?php endif; ?>

</body>

</html>
<hr>
<hr>
<hr>
<?php
$days = 6;
if ($days === 1) {
    echo "sat";
} else if ($days === 2) {
    echo "sun";
} else if ($days === 3) {
    echo "mon";
} else if ($days === 4) {
    echo "thr";
} else if ($days === 5) {
    echo "wed";
} else if ($days === 6) {
    echo "thu";
} else if ($days === 7) {
    echo "fri";
} 
?>
<hr>
<hr>
<hr>
<hr>
<hr>
<hr>
<hr>
<hr>
<hr>
<hr>

<?php 

//exercise  
// tax salary degree hours of work 
$degree =readline("enter the degree(phd,ma,ba,di,out) : ");
$hOfWork=floatval(readline("enter the hour that you work : "));
$tax = 0.2;
echo($degree);
echo($hOfWork);
echo($tax);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h1>hello to salary calc</h1>

<?php if ($degree === "phd"):  $salary = ((250000*$hOfWork));?>
    <h1>your degree is <?php echo ($degree);  ?> </h1>
    <h1> your tax is <?php $fullTax = ($salary*$tax) ; echo ($fullTax);?> </h1>
    <h1>your salary is<?php echo ($salary - $fullTax); ?> </h1>

    <?php elseif ($degree === "ma"): $salary = ((200000*$hOfWork)); ?>
    <h1>your degree is <?php echo ($degree); ?> </h1>
    <h1> your tax is <?php $fullTax = ($salary*$tax) ; echo ($fullTax);?> </h1>
    <h1>your salary is<?php echo ($salary - $fullTax); ?> </h1>

    <?php elseif ($degree === "ba"): $salary = ((150000*$hOfWork));?>
    <h1>your degree is <?php echo ($degree); ?> </h1>
    <h1> your tax is <?php $fullTax = ($salary*$tax) ; echo ($fullTax);?> </h1>
    <h1>your salary is<?php echo ($salary - $fullTax); ?> </h1>

    <?php elseif ($degree === "di"): $salary = ((100000*$hOfWork));?>
    <h1>your degree is <?php echo ($degree); ?> </h1>
    <h1> your tax is <?php $fullTax = ($salary*$tax) ; echo ($fullTax);?> </h1>
    <h1>your salary is<?php echo ($salary - $fullTax); ?> </h1>

    <?php else: ?>
    <h1>hoy yaroo mage man maskharatam </h1>
    

    <?php endif; ?>

</body>
</html>






