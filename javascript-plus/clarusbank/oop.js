// // let prop1 = "name";
// // let myObj = {};
// // myObj[prop1] = "harry";
// // console.log(myObj);

// // const person1 = {
// //     name: "harry",
// //     surname: "potter"
// // };

// // // let person2 = person1;
// // let person2 = {...person1};

// // person2.name = "james"

// // console.log(person1)
// // console.log(person2)

// // delete this.name

// // function func1() {
// //     this.name = "matt";
// //     // console.log(this.age);
// // }
// // const func2 = function() {
// //     this.age = 40;
// //     // console.log(this.name);
// // }

// // console.log(this.age);
// // console.log(this.name);
// // func1();
// // console.log(this.age);
// // console.log(this.name);
// // func2();
// // console.log(this.age);
// // console.log(this.name);


// // function Person(name, surName) {
// //     this.school = "Hogwarts"
// //     this.name = name;
// //     this.surname = surName;
// // };

// // Person.prototype.getFullName = function() {
// //     return this.name + " " + this.surname
// // }

// // let harry = new Person("Harry", "Potter");
// // let draco = new Person("Draco", "Malfoy");

// // console.log(harry)
// // console.log(harry.getFullName())
// // console.log(draco)
// // console.log(draco.getFullName())

// // console.log(harry.__proto__)
// // console.log(harry.prototype)

// // console.log(Person.__proto__)
// // console.log(Person.prototype)


// class Person {
//     constructor(firstName, lastName, birthYear) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthYear = birthYear;
//         this.employment = "";
//     }
//     greet() {
//         console.log(`Hello ${this.firstName} ${this.lastName}`)
//     }
// };

// class Student extends Person {
//     constructor(firstName, lastName, birthYear) {
//         console.log("Initializing student object...")
//         super(firstName, lastName, birthYear, "Student")
//     }
//     dormWork() {
//         console.log("Studying React...")
//     }
// };

// class Teacher extends Person {};

// const harry = new Student("Harry", "Potter", 1990);
// harry.greet();
// harry.dormWork();