var greeter = function (name) {
    console.log('Hello ' + name);
};
var greeter2 = function (firstName, lastName) {
    console.log("Hello ".concat(firstName, " ").concat(lastName));
};
greeter("Mark");
greeter2("Mark", "Korenevskiy");
