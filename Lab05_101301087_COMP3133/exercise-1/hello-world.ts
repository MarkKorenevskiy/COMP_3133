let greeter = function (name: string) {
    console.log('Hello ' + name);
}

let greeter2 = (firstName: string, lastName: string) => {
    console.log(`Hello ${firstName} ${lastName}`);
}

greeter("Mark")
greeter2("Mark", "Korenevskiy")