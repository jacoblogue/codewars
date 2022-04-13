<!-- PHP Functions - Default Arguments
About this Kata Series
"PHP Functions" is a Kata Series authored by donaldsebleung which focuses on the perks and interesting features of PHP functions. It is un-numbered which means that the Kata in this Series is not progressive - one kata in this Series does not necessarily depend on another. This means that as long as you know how to write "Hello World" level programs in PHP, you will probably find any Kata in this Series easy to pick up and complete.

There is, however, one main prerequisite. You must be sufficiently familiar with primitive data types in PHP (strings, booleans, floats, integers) and what they mean. You must also have a basic understanding of how to define a simple function in PHP that may or may not receive a fixed number of arguments. A good indicator that you are ready for any Kata in this Series is if you are able to complete Multiply (8kyu) in PHP without looking at external resources in the process. If you are unable to complete that Kata without researching PHP function syntax then you may have to practice with basic PHP functions until you are familiar with them before continuing on this Kata series.

Certain Kata in this Series may have additional prerequisites. If that is the case, the extra prerequisites will be listed under a Level 2 Heading called Prerequisites in said Kata. Additionally, if a certain Kata in this Series requires a thorough understanding of PHP, the kata may be labelled as [Advanced].

Lesson
PHP Functions support default arguments. A default argument is a default value that is used if a particular argument is not provided to said function. The syntax for specifying the default value for an argument is identical to variable assignment. For example:

function say_hello($name = "World") {
  echo "Hello $name";
}

say_hello("Donald"); // prints out "Hello Donald"
say_hello("Stewart"); // prints out "Hello Stewart"
say_hello("Edison"); // prints out "Hello Edison"
say_hello(); // prints out "Hello World"
A function may also have multiple default arguments:

function add($a = 0, $b = 0) {
  return $a + $b;
}

add(); // 0
add(3); // 3
add(5, 7); // 12
A function can also have required and default arguments:

function divide($a, $b = 1) {
  return $a / $b;
}

divide(3); // 3
divide(6); // 6
divide(10, 2); // 5
divide(30, 10); // 3
However, there are some rules. For example, the default (optional) arguments must always come after the required arguments in a function's argument list. For example, this will work properly:

function get_full_name($first_name, $last_name = "Leung") {
  return "$first_name $last_name";
}

get_full_name("Donald"); // "Donald Leung"
get_full_name("Simone", "Penagos"); // "Simone Penagos"
However, this will not:

function get_full_name($first_name = "Donald", $last_name) {
  return "$first_name $last_name";
}

get_full_name("Max", "Triance"); // "Max Triance"
get_full_name("Leung"); // returns "Leung " and a warning is emitted (second argument missing)
The second rule is that a default argument must be a constant expression. This means that a default argument can only ever be either a primitive (strings, numbers, booleans) or an array. You cannot pass variables in as default arguments or instances of classes:

$answer = 42;
function non_functioning_function($argument = $answer) {
  /* Some code here */
}

// Will NOT work - an error is thrown
Task
Note: The lesson provided in this Kata is designed to teach you most, if not all, of the key concepts required to complete the Task in this Kata. However, if in doubt, you are strongly encouraged to conduct your own research.

Define the following functions.

multiply_with_defaults
This function should receive 2 optional arguments, $a and $b, which should both default to 1 if they are not provided. This function should return the product of the two numbers.

circle_area
This function should receive an optional argument $radius which should default to 1 if no argument is provided. It should return the area of a circle with radius $radius. Allowances will be made for minor floating point errors.

prank_replace
This function should receive 1 required argument followed by 2 optional arguments. The first (required) argument is a string $string in which we will perform our operation on. The second and third arguments are $match and $replacement which should default to "hello" and "goodbye" respectively. The function should then return a new string which is the original $string with all instances of $match replaced with $replacement. Below are some examples:

prank_replace("hello world"); // "goodbye world"
prank_replace("Hello this is the world", "Hello"); // "goodbye this is the world"
prank_replace("apples bananas dragonfruit bananas apples kiwi apples oranges", "apples", "pears"); // "pears bananas dragonfruit bananas -->

function multiply_with_defaults($a = 1, $b = 1) {
  return $a * $b;
}

function circle_area($radius = 1) {
  return $radius**2 * pi();
}

function prank_replace($string, $match = 'hello', $replacement = 'goodbye') {
  return str_replace($match, $replacement, $string);
}