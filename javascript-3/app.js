// const family = ["osman","şeker","muhammed","abdullah","nuriye"];
// function headers(obj) {
//   for (let i = 0; i < obj.length; i++) {
//     console.log((obj[i])[0])
//   }
// }
// headers(family);

// let a = 10;
// {
//     let b = 20;
//     console.log(a, b)
//     let a = 30;
//     console.log n(a,b)
// }

// console.log(a)

// var a;

// while (isNaN(a)) {
//     a = prompt("Enter number...")
//     a = Number(a);
//     console.log(a, typeof a);
// }

// window.alert("hello")

// function deneme() {
//     const num = 10
// }
// deneme()
// console.log(num)

// var num = 10;

// function deneme() {
//     var num = 20
//     console.log(num)
// }
// deneme()
// console.log(num)

// if (true) {
//     let num = 10;
// };
// console.log(num)

// {
//     var num = 20;
// }
// console.log(num)

// let num2 = 30;

// function deneme() {
//     console.log("içerde", num2)

// };

// deneme();

// console.log("dışarda", num2)

// console.log(num1);
// var num1 = 10;
// console.log(num2);
// let num2 = 10;
// console.log(num3);
// const num3 = 10;

// console.log("%c Hello!", "color:pink; background: white")

// console.log("selam"+5)

// const num = 10;
// {
//     console.log(num)
// }

// let num = "hi";
// console.log(isNaN(num))

// var a;

// while (isNaN(a)) {
//     a = prompt("enter a number")
//     a = Number(a)
//     console.log(a, typeof a)
// }

// let password = "Jbme";
// console.log(password.length)
// console.log(password.includes("J"))

// let num = null ?? 10
// console.log(num)

// let score = 49;
// if (score >= 50) {
//     console.log("Congrats")
// };

// if (!true) score++;
// console.log(score)

// let laps = prompt("Hoe many laps did you ride?")

// if (laps > 60) {
//     console.log("Well done!")
// } else if (laps > 40) {
//     console.log("Not bad!")
// } else {
//     console.log("Try harder!")
// }

// let day = prompt("Write the day:")
// day = day.toLowerCase()

// switch (day) {
//   case "pazartesi":
//   case "çarşamba":
//   case "perşembe":
//   case "cumartesi":
//     console.log("inclass day");
//     break;
//   case "salı":
//   case "cuma":
//     console.log("team work day");
//     break;
//   default:
//       console.log("free day")
//     break;
// }

// let i = 0;
// let sum = 0;
// while (i<6) {
//   sum = sum + i;
//   console.log(i)
//   i++;
// }
// console.log(`Total is ${sum}`)

// let i = 5, sum = 0;
// do {
//   sum += i;
// } while (i<5);
// console.log(sum);

// for (let i = 0, sum = 0; i < 8; i++, sum += i) {
//   document.write("i", i);
//   console.log("i", i);
//   console.log("sum", sum)
// }

// let brand = "Hogwarts";
// for (let i = 0, j = brand.length - 1; i < brand.length; i++, j--) {
//   console.log(
//     i + 1,
//     brand[i],
//     j + 1,
//     brand[j],
//     brand.length - i,
//     brand[brand.length - i - 1]
//   );
// }

// let i = 0;
// while (i<10) {
//   if ((i % 3 !== 0) || (i === 0)) {
//     console.log(i)
//   }
//   i++
// }

// for (let a = 0; a <= 10; a++) {
//   for (let b = 0; b <= 10; b++) {
//     console.log(`${a} * ${b} = ${a * b}`);
//   }
// }

// const number = [13, 34, 24, 67, 23, 90]
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   sum += number[i];
// }
// console.log(sum);

// function fakt(x) {
//   for (let i = 1, sum = 1; i <= x; i++) {
//     sum = i * sum
//     console.log(`sum = ${sum}, i = ${i}`)
//   }
// }
// fakt(5);

// let sum = 1, x = prompt("Faktöriyel için sayı gir...");
// for (let i = x; i > 0; i--) {
//   sum = i * sum
// }
// console.log(sum);

// let num = 100;
// for (let i = 1; i <= num; i++) {
//   if (i % 3 === 0 && i % 5 !== 0) {
//     console.log(`${i} fizz`);
//   } else if (i % 3 !== 0 && i % 5 === 0) {
//     console.log(`${i} buzz`);
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} fizzbuzz`);
//   } else
//   console.log(i);
// }

// function hello() {
//     console.log("Hello my friend!")
// }
// hello()

// function sum(a,b) {
//     return a + b;
// }
// let num = sum(5,3);
// console.log(num);

// function addTwo(number) {
//     return +number+2;
// }
// console.log(addTwo("2"))

// function addTwo2(number) {
//     return Number(number)+2;
// }
// console.log(addTwo2("2"))

// function karsıla() {
//     let name = prompt("İsmini yaz...")
//     console.log(`Hoşgeldin ${name}`)
//     return document.write(`Hoşgeldin ${name}`)
// }
// karsıla()

// function karsıla(name) {
//     return document.write(`Hoşgeldin ${name}`)
// }
// karsıla("Muhammed")

// function karsıla(name) {
//   if (name == undefined) {
//     return document.write(`Hoşgeldin`);
//   } else {
//     return document.write(`Hoşgeldin ${name}`);
//   }
// };
// karsıla();

// let student = {};
// student.name = "Harry"
// student.surName = "Potter"

// function sayHi(student) {
//     console.log(`${student.name}  ${student.surName}           entry`);
//     student.name = "James";
//     console.log(`${student.name}  ${student.surName}             fist`);
//     student = {surName: "Weasley"};
//     console.log(`${student.name} ${student.surName}      inside`);
// }
// sayHi(student)
// console.log(`${student.name}  ${student.surName}              outside`);

// console.log(typeof infinity)

// function div(num1, num2) {
//     if (num1 == 0 || num2 == 0) return "Dont use zero"; return (num1 / num2)
// }
// console.log(div(10,2))

// function div(num1, num2) {
//     return num1 && num2 ? num1 / num2 : "Sıfır kullanma!"
// }
// console.log(div(10,2))

// function sum(a,b, ...args) {
//     console.log(arguments);
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
// console.log(sum(5,5,5,5,5))

// const sayHi = function greet() {
//     return "Hello 2"
// }

// console.log(sayHi())

// const pascalNum = function (n) {
//     return (n*(n+1)/2)
// }

// console.log(pascalNum(4))

// const pascalNum = function total(n) {
//     if (n===1) return 1;
//     return n + total(n - 1)
// }

// console.log(pascalNum(5))

// let pascal = (
//     function total(n) {
//         if (n === 1) return 1;
//         return n + total(n - 1);
//     }
// )(5);
// console.log("result = ", pascal)

// let selam = (function(name) {
//     // let name = prompt("İsmini yaz...")
//     console.log(`Hoşgeldin ${name}`)
//     return document.write(`Hoşgeldin ${name}`)
// })("harry")

// function add(a) {
//     return a + 100;
// }
// console.log(add(44));

// let add2 = function (a) {
//     return a + 100;
// }
// console.log(add2(44));

// let add3 = (function (a) {
//     return a + 100;
// })(44)
// console.log(add3);

// (function (a) {
//     t = a + 100;
//     console.log(t);
// })(44)

// const arrow = (a) => {
//     return a + 100;
// }
// console.log(arrow(44))

// const arrow = (a) => a + 100;
// console.log(arrow(44))

// const arrow = a => a + 100;
// console.log(arrow(44))

// const user = "Mark";
// const sayHi = ((user = "New User") => `Welcome ${user}`)("Murat")
// console.log(sayHi());
// console.log(sayHi("Harry"))

// const division = (num1, num2) => num1 / num2;

// const division = (num1, num2) =>  {
//     if (num2 === 0) {
//         return "Dont use zero!";
//     }
//     return num1/num2
// }
// console.log(division(144,0))

// const division = (num1, num2) => num2 === 0 ? "Dont use zero!" : num1/num2 ;
// console.log(division(144,12))

// const calcArea = radius => 3.14 * radius**2
// console.log(`Area --> ${calcArea(5)}`)

// const hogwarts = {
//   good: "Harry",
//   beautiful: "Hermoine",
//   bad: "Malfoy",
//   team(){
//       return this.good
//   }
// };
// console.log(hogwarts.team())

// let str1 = "hello";
// let str2 = 'hi';
// let str3 = `yes`;
// let str4 = new String("string object");
// let str5 = String("string object");

// console.log(typeof str1);
// console.log(typeof str2);
// console.log(typeof str3);
// console.log(typeof str4);
// console.log(typeof str5);

// let str1 = "h\ni";
// console.log(str1[0])
// console.log(str1[1])
// console.log(str1[2])
// console.log(str1.length)

// let hogwarts = "Harry, Hermoine, Ron";
// console.log(hogwarts.includes("rr"));
// console.log(hogwarts.includes(", R"));

// let hogwarts = "Harry, Hermoine, Ron";
// console.log(hogwarts.lastIndexOf("x"))

// let salute = "Hello Harry!";
// salute = salute.replace("Hello","Hi")
// console.log(salute)

// let names = ["apo","cero"];
// names[0][1]
// console.log(names[0][1])

// const family = ["osman","seher","muhammed","abdullah","nuriye"];
// function headers(obj) {
//   for (let i = 0; i < obj.length; i++) {
//     console.log((obj[i])[0])
//   }
// }
// headers(family);

// let cars = ["ford", "ferrari", "lamborghini"];
// console.log(cars.shift())
// cars.unshift("bugatti")
// console.log(cars.unshift())

// var names = ["harry", "ron", "hermoine"];
// var deleted = names.splice(1,2,"cedric", "hermoine");
// console.log(names);
// console.log(deleted);

// const nums = [5, 6, 9, 10, 1, 13];
// function artır(array) {
//     array.pop()
// }
// console.log(nums);
// artır(nums);
// console.log(nums);

// const str = "harry";
// function artır(array) {
//     array += "potter"
//     console.log(array);
// }
// artır(str);
// console.log(str);


// const nums = [5, 6, 9, 10, 1, 13];
// console.log(nums);
// const [a,b,c] = nums
// console.log(a,b,c);


// let n1 = 1;
// let n2 = 2;
// let n3 = 3;
// let n4 = 4;
// [n1, n2, n3, n4] = [n4, n3, n2, n1];

// console.log(n1, n2, n3, n4);


