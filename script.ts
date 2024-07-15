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
