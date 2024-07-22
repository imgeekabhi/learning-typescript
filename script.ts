//object types
// const obj: {
//   name: string;
//   age: number;
// } = {
//   name: "abhishek",
//   age: 43,
// };
// console.log("obj", obj);

//nested object type
// const obj: {
//   name: string;
//   age: number;
//   address: {
//     city: string;
//     state: string;
//   };
// } = {
//   name: "abhishek",
//   age: 43,
//   address: {
//     city: "Bhopal",
//     state: "Madhya Pradesh",
//   },
// };
// console.log("obj", obj);

//array
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
//   name: "abhishek",
//   age: 43,
//   hobbies: ["sports", "cooking"],
// };
// for (const hobby of person.hobbies) {
//   console.log("hobbies", hobby.toUpperCase());
// }

//working with tuples
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "abhishek",
//   age: 43,
//   hobbies: ["sports", "cooking"],
//   role: [1, "author"],
// };
// console.log("person", person);
// for (const hobby of person.hobbies) {
//   console.log("hobbies", hobby.toUpperCase());
// }

//any
// let a: any = 34;
// console.log(a);
// a = "string";
// console.log(a);

//union type
// let b: number | string = 34;
// console.log(b);
// b = "hello";
// console.log(b);

//literal types
// let a: "hello" | "world";
// a = "hello";
// console.log(a);
// // a = "Abhi"; //error
// console.log(a);

//type aliaseas
// type Combinable = number | string;
// let a: Combinable = 34;
// let b: Combinable = "hello";

// console.log(a);

//type aliaseas with object
// type Person = {
//   name: string;
//   age: number;
// };
// const person: Person = {
//   name: "abhishek",
//   age: 43,
// };

//function return type
// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }
// const result = add(3, 4);
// console.log(result);

//function return type void
// function add(n1: number, n2: number): void {
//   console.log(n1 + n2);
// }
// add(3, 4);

// never type
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }
// generateError("An server error occured!", 500);

// class Department {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   printData() {
//     console.log("dept emp name - ", this.name);
//   }
// }

// const accoutingDept = new Department("Accounting");
// accoutingDept.printData();

// interface Person {
//   name: string;
//   age: number;
//   greet(message: string): void;
// }
// const person: Person = {
//   name: "abhishek",
//   age: 43,
//   greet(message: string) {
//     console.log(message + " " + this.name);
//   },
// };
// person.greet("Hello");

// access modifiers
// class Person {
//   private name: string;
//   public age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Emplyee extends Person {
//   private empId: number;
//   constructor(name: string, age: number, empId: number) {
//     super(name, age);
//     this.empId = empId;
//   }
// }

// class Student extends Person {
//   private rollNo: number;
//   constructor(name: string, age: number, rollNo: number) {
//     super(name, age);
//     this.rollNo = rollNo;
//   }
// }

// const emp = new Emplyee("Abhishek Sharma", 24, 1004);
// const std = new Student("Ranjan Sharma", 21, 1003);
// console.log({ emp });
// console.log({ std });

// // normal generic

// function greetUser<T>(arg: T): T {
//   return arg;
// }
// const res = greetUser("2");
// const res2 = greetUser(2);
// console.log(res);
// console.log(res2);

// array generic

// function arrayGen<T>(arg: T[]): T[] {
//   const res = arg.map((el) => {
//     return el;
//   });
//   return res;
// }
// const res = arrayGen(["hello", "123", 234, true]);
// // const res2 = arrayGen(true); //error
// console.log(res);

//generic array funciton

// const arrowGeneric = <T>(product: T[]): T[] => {
//   return product;
// };

// const res = arrowGeneric(["hello", "123", 234, true]);
// console.log("product", res);

// extend generic

// interface Product {
//   name: string;
//   age: number;
// }
// const genericExtend = <T, G extends Product>(arg1: T, arg2: G): object => {
//   return {
//     arg1,
//     ...arg2,
//   };
// };
// const res2 = genericExtend("hello", { name: "abhishek", age: 43 });
// console.log("res2", res2);

// keyof constraints
// const student = {
//   name: "abhishek",
//   age: 43,
//   address: "Bhopal",
// };
// function getData<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }
// const stdName = getData(student, "name");
// console.log("name", stdName);

// generic class
// class dataStorage<T> {
//   private data: T[] = [];
//   public setData = (item: T) => {
//     this.data.push(item);
//   };
//   public getData() {
//     return [...this.data];
//   }

//   public removeData(item: T) {
//     this.data.splice(this.data.indexOf(item), 1);
//   }
// }
// const storageStr = new dataStorage<string>();
// const storageNum = new dataStorage<number>();
// storageStr.setData("hello");
// storageStr.setData("Abhishek");
// storageStr.setData("Sharma");
// console.log("get data", storageStr.getData());
// storageStr.removeData("Abhishek");
// console.log("get data", storageStr.getData());
console.log("first");
