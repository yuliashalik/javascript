// alert("Я-JavaScript");
console.log("Я-JavaScript");
//Lesson10
console.log(125 / 25 + 10);
console.log(2 * 3 * 4 * 5 / 6);
console.log(765 / 9 + 48 * 4 - 121);
console.log(245, 245.5);
console.log(typeof 245);
console.log(typeof 245.5);
console.log(typeof 34 * "avocado");
console.log(typeof 1 / 0);
console.log('Yulia', "Yulia", `Yulia`);
console.log(4<5);
console.log(typeof (4 < 5));
console.log(null);
// console.table(
// 	{
// 	name: "Maryna", 
// 	job: 'teacher'
// 	}
// )
//Змінні
var nameUser;
console.log(nameUser);
nameUser = 'Yulia';
console.log(nameUser);
nameUser = 'Maryna';
console.log(nameUser);
var nameUser2 = 'Yulia';
console.log(nameUser2);

var numberOfSiblings = 1 + 3;
var numberOfCandies = 8;
var candiesForSiblings = numberOfCandies / numberOfSiblings;
console.log (candiesForSiblings);

var admin;
var name;
name = "Maryna";
admin = name;
// alert(admin);

var nameOurPlanet = "Earth";
var nameUserSite;

var temp;
var a = "Chicken";
var b = "Elephant";
temp = b;
b = a;
a = temp;
temp = null;
console.log(a, b);

var secInHv = 60;
var hvInHour = 60;
var secInHour = secInHv * hvInHour;
console.log("Секунд у годині = ", secInHour);

var hourInDay = 24;
var secInDay = hourInDay * secInHour;
console.log("Секунд у дні = ",  secInDay);

var dayInYear = 365;
var secInYear = dayInYear * secInDay;
console.log("Секунд у році = ", secInYear);

var age = 15;
var secInAge = secInYear * age;
console.log("Секунд у мені = ", secInAge);