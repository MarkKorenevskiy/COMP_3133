export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public greeter(): void {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }

    public getAge(): void {
        console.log(this.age);
    }
}