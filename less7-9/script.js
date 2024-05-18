// let day = prompt('Введіть день сеансу: ');
// let month = prompt('Введіть місяць сеансу: ');
// let time = prompt('Введіть час сеансу: ');
// let nameMovie = prompt('Введіть назву фільму: ');
// let qTickets = prompt('Введіть кількість квитків: ');
// let row = prompt('Введіть ряд: ');
// let seat = prompt('Введіть місце: ');
// alert(`Дякую за бронювання! Ви замовили ${qTickets} квитки на ${day} ${month} на ${time} на фільм \"${nameMovie}\", ряд ${row}, місце ${seat}`);

// str = `<ul>
// 			<li>Дата сеансу: ${day} ${month} </li>
//             <li>Час сеансу: ${time} </li>
// 			<li>Введіть назву фільму: ${nameMovie}</li>
// 			<li>Введіть кількість квитків: ${qTickets}</li>
// 			<li>Введіть ряд: ${row}</li>
// 			<li>Введіть місце: ${seat}</li>
// 			</ul>`;
// document.body.innerHTML = str;

// let headAndShoulder = true;
// let hasBag = false;
// console.log(headAndShoulder && hasBag);
// hasBag = true;
// console.log(headAndShoulder && hasBag);

// let apple = false;
// let orange = false;
// console.log(apple || orange);
// orange = true;
// console.log(apple || orange);

// let isWeekend = false;
// let hadShower = true;
// let hadApple = true;
// let hadOrange = false;
// let goToSchool = !isWeekend && hadShower && (hadApple || hadOrange);
// console.log(goToSchool);

// let height = +prompt('Введіть свій зріст- ');
// console.log(height >= 152);
// console.log(height <= 122);

// let secretNumber = Math.round(Math.random() * 10);
// console.log(secretNumber);
// let chico = 3;
// let hardo = 5;
// let grouch = 8;
// console.log(chico === secretNumber);
// console.log(hardo === secretNumber);
// console.log(grouch === secretNumber);


// let number = +prompt('Введіть число: ');
// console.log(number > 0);

// let number = +prompt('Введіть число: ');
// console.log(number % 2 == 0);

// let str1 = prompt('Введіть слово ');
// let str2 = prompt('Введіть слово ');
// console.log(str1[0] === str2[0]);

// let number = prompt('Введіть число: ', 453);
// console.log(+number[0] + +number[number.length - 1]);

// let randomNumber = Math.random();
// let roundedNumber = Math.round(randomNumber);
// console.log(`Випадкове число: ${randomNumber}`);
// console.log(`Округлене число: ${roundedNumber}`);

// let sum = 0.6 + 0.7;
// let roundedSum = sum.toFixed(1);
// alert(roundedSum);

// let x = +prompt('Введіть x: ');
// let randomX = Math.ceil(Math.random() * x);
// alert(randomX);

// let month = prompt('Введіть місяць: ');
// if (month ===  'August' || month === 'august' || month === 'June' || month === 'june') {
//     alert('Ви поїдете у відпустку');
// }

// let record = 2.45;
// let newRecord = prompt('Введіть record: ');
// if (newRecord > record) {
//     alert('You are the best!');
// }
// else {
//     alert('You are not the best!');
// }

// let yourAge = prompt('Введіть age: ');
// if (yourAge >= 18) {
//     alert('Welcome to the HELL🧨');
// }
// else {
//     alert('We are small\(\(\(😥');
// }

// let name = prompt('Введіть name: ');
// console.log(`Привіт, ${name}`); 
// if(name.length > 7) {
//     console.log(`Вау, у тебе дійсно довге ім’я!`);
// }

// else {
//     console.log('От блін! Твоє ім’я коротке!'); 
// }
   
// let lemonChicken = false;
// let beffWithBlackBean = true;
// let sweetAndSourPork = true;
// if (lemonChicken) {
//     alert('😊🍗');
// }
// else if (beffWithBlackBean) {
//     alert('😎🥩');
// }
// else if (sweetAndSourPork) {
//     alert('😋🍖');
// }
// else {
//     alert('🤗🍛🍚');
// }

// let a = +prompt('Введіть a: ');
// let b = +prompt('Введіть b: ');
// let c = +prompt('Введіть c: ');
// if (((a+b)>c) && ((a+c)>b) && ((b+c)>a)) {
//     alert('Трикутник існує');
// }
// else {
//     alert('Трикутник не існує');
// }

// let a = prompt('Введіть a: ', 34);
// let sum = +a[0] + +a[1];
// if(sum % 2 == 0 ) {
//     alert('Summa parna');
// }
// else {
//     alert('Ne parna');
// }

// let number = +prompt('Введіть number: ');
// if (number == 1) {
//     alert('Monday');
// }
// else if (number == 2) {
//     alert('Tuesday');
// }
// else if (number == 3) {
//     alert('Wednesday');
// }
// else if (number == 4) {
//     alert('Thursday');
// }
// else if (number == 5) {
//     alert('Friday');
// }
// else if (number == 6) {
//     alert('Saturday');
// }
// else if (number == 7) {
//     alert('Sunday');
// }
// else {
//     alert('Error😡');
// }

// let number = +prompt('Введіть number: ');
// if (number == 1) {
//     alert('I');
// }
// else if (number == 2) {
//     alert('II');
// }
// else if (number == 3) {
//     alert('III');
// }
// else if (number == 4) {
//     alert('IV');
// }
// else if (number == 5) {
//     alert('V');
// }
// else if (number == 6) {
//     alert('VI');
// }
// else if (number == 7) {
//     alert('VII');
// }
// else if (number == 8) {
//     alert('VIII');
// }
// else if (number == 9) {
//     alert('IX');
// }
// else {
//     alert('No numbers');
// }


// let number = prompt('Введіть number: ', 321);
// if(+number[0] == +number[1] &&  +number[0] == +number[2]) {
//     alert('Цифри однакові');
// }
// else {
//     alert('Цифри not однакові');
// }


// let a = +prompt('Введіть a: ');
// let b = +prompt('Введіть b: ');
// let c = +prompt('Введіть c: ');
// if(a == b  &&  a == c) {
//     alert('Трикутник рівностороннній');
// }


// let name = prompt('Введіть name: ');
// let myName = 'Yulia' ;
// if (name === myName || name === myName.toLowerCase() ) {
//     console.log('Hello me!');
// }
// else if (name === 'Ivan' || (name === 'ivan')) {
//     console.log('Hello dad!');
// }
// else if (name === 'Vika' || (name === 'vika')) {
//     console.log('Hello mum!');
// }
// else {
//     console.log('Hello stranger!');
// }


//3
// let resultExam = +prompt('Введіть result: ');
// if (resultExam >= 88 && resultExam <= 100) {
//     alert('Відмінно🤩');
// }
// else if (resultExam > 40 && resultExam <= 87) {
//     alert('Добре😁');
// }
// else if (resultExam >= 0 && resultExam <= 39){
//     alert('Не пройдено😓');
// }
// else {
//     alert('Такого балу не існує');
// }


//6
// let temperature = +prompt('Введіть температуру: ');
// if (temperature > 60) {
//     alert('Пожежна ситуація🆘');
// }


//11
// let number = +prompt('Введіть number: ');
// if (number % 3 == 0 ) {
//     alert('Все правильно');
// }
// else {
//     alert('Ваше число не ділиться націло на 3')
// }


//10
// let number = +prompt('Введіть number: ');
// if (number % 2 == 0 ) {
//     alert('Число парне');
// }
// else {
//     alert('Ваше число не парне');
// }


//13
// let a = prompt('Введіть a: ');
// let sum = +a[0] + +a[1];
// if(sum % 5 == 0 ) {
//     alert('Сума ділиться на 5');
// }
// else {
//     alert('Сума не ділиться на 5');
// }


//14
// let a = +prompt('Введіть a: ');
// let b = +prompt('Введіть b: ');
// let c = +prompt('Введіть c: ');
// if (a > b && a > c) {
//     alert('a найбільше');
// }
// else if (b > a && b > c) {
//     alert('b найбільше');
// }
// else if (a == c && c == b) {
//     alert('Вони однакові');
// }
// else {
//     alert('c найбільше');
// }


//15
// let a = +prompt('Введіть a: ');
// let b = +prompt('Введіть b: ');
// let x = +prompt('Введіть x: ');
// let y = +prompt('Введіть y: ');
// if ((a == x && b == y) || (a == y  && x == b)) {
//     alert('Прямокутники рівні');
// }
// else {
//     alert('Прямокутники не рівні');
// }


//5
// let a = +prompt('Введіть a: ');
// let b = +prompt('Введіть b: ');
// if (a >= 0 && b >= 0) {
//     console.log('Числа однакових знаків \(додатні\)');
// }
// else if (a < 0 && b < 0) {
//     console.log('Числа однакових знаків \(від\'ємні\)');
// }
// else {
//     console.log('Числа різних знаків');
// }


//4
// let temperature = +prompt('Введіть температуру: ');
// if (temperature < 0) {
//     alert('Твердий стан води');
// }
// else if (temperature >= 0 && temperature <= 100) {
//     alert('Рідкий стан води');
// }
// else {
//     alert('Газоподібний стан води');
// }


//7
// let m = +prompt('Введіть m: ');
// let n = +prompt('Введіть n: ');
// if (m > n) {
//     alert('Пакет перший важчий');
// }
// else {
//     alert('Пакет другий важчий');
// }
// alert(`Вага важчого пакета: ${Math.max(m, n)}`);


//8
// let a = +prompt('Введіть скільки всього дівчата зібрали полуниці: ');
// let y = +prompt('Введіть скільки зібрала Віра: ');
// let x = a - y;
// if (y > x) {
//     alert('Віра зібрала більше');
// }
// else {
//     alert('Валя зібрала більше');
// }
// let max = Math.max(y, x) - Math.min(y, x);
// alert(`Більше на ${max} кг`);


//9
// let a = +prompt('Введіть a: ');
// let b = +prompt('Введіть b: ');
// let k = +prompt('Введіть k: ');
// let m = +prompt('Введіть m: ');
// let ab = a * b;
// let km = k * m;
// if (ab > km) {
//     alert('Перша сіра тканина дорожча');
// }
// else {
//     alert('Друга сіра тканина дорожча');
// }
// let max = Math.max(ab, km) - Math.min(ab, km);
// alert(`Дорожча на ${max}`);


// let age = +prompt('Введіть age: ');
// if ( age > 0 && age <= 3 ) {
//     alert('Привіт, малявка👶');
// }
// else if (age > 3 && age <= 18) {
//     alert('Привіт');
// }
// else if ( age > 18 && age <= 101) {
//     alert('Добрий день!');
// }
// else {
//     alert('Хмм, якийсь незвичайний вік!');
// }

// let a = +prompt('Введіть a: ');
// if (a > 0) {
//     alert(1);
// }
// else if (a < 0) {
//     alert(-1);
// }
// else {
//     alert(0);
// }

// let result;
// let a = +prompt('Введіть a: ');
// let b = +prompt('Введіть b: ');

// a + b < 4 ? result = 'Мало' : result = 'Багато';
// console.log(result);

// let name = prompt('Введіть name: ');
// let result;
// name == 'Netscape' ? result = 'Ви молодці' : result = 'Фууууу, Netscape';
// alert(result);

// let name = prompt('Введіть name: ');
// let result;
// name == 'ECMAScript' ? result = 'Ви молодці' : result = 'Фууууу, Netscape';
// alert(result);


// let login = prompt('Введіть login: ');
// let result;
// login == 'Працівник' ? result = 'Привіт' : 
//     login == 'Директор' ? result = 'Добрий день!' :
//         login == '' ?  result = 'Немає такого логіна' :
//             result = '' ;
// alert(result);


// let number = +prompt('Введіть number: ');
// switch(number) {
//     case 1:
//         alert('Monday');
//         break;
//     case 2:
//         alert('Tuesday');
//         break;
//     case 3:
//         alert('Wednesday');
//         break;
//     case 4:
//         alert('Thurday');
//         break;
//     case 5:
//         alert('Friday');
//         break;
//     case 6:
//         alert('Saturday');
//         break;
//     default:
//         alert('What is it???🥨🥞🍕🍕🍕🍕🍕🍳'); 
// }


// let number = +prompt('Введіть number: ');
// switch(number) {
//     case 1:
//         alert('Light');
//         break;
//     case 2:
//         alert('Dark');
//         break;
//     case 3:
//         alert('Nocturne');
//         break;
//     case 4:
//         alert('Terminal');
//         break;
//     case 5:
//         alert('Indigo');
//         break;
//     default:
//         alert('What is it');   
// }


// let x = +prompt('Введіть x: ');
// let f;
// if (x <= 0) {
//     f = -x;
// }
// else if (x > 0 && x < 2) {
//     f = x**2;
// }
// else {
//     f = 4;
// }
// alert(`Функція: ${f}`);


// let x = +prompt('Введіть x: ');
// let f;
// x > 0 ? f = 2 * Math.sin(x) : f = 6 - x;
// alert(`Функція: ${f}`);

// let K = +prompt('Введіть K: ');
// switch(K) {
//         case 1:
//             alert('Baddddd😡😈');
//             break;
//         case 2:
//             alert('Not very bad');
//             break;
//         case 3:
//             alert('Not bad');
//             break;
//         case 4:
//             alert('Well');
//             break;
//         case 5:
//             alert('Perfectoo momento😎');
//             break;
//         default:
//             alert('Error');   
//     }
    

// let number = +prompt('Введіть number: ');
// switch(number) {
//     case 1:
//     case 2:
//     case 12:
//         alert('Winter');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert('Spring');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert('Summer');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('Autumn');
//         break;
//     default:
//         alert('What is it');   
// }



let number = +prompt('Введіть number: ');
let a = +prompt('Введіть number: ');
let b = +prompt('Введіть number: ');
switch(number) {
    case 1: 
        alert(a + b);
        break;
    case 2: 
        alert(a - b);
        break;
    case 3: 
        alert(a * b);
        break;
    case 4: 
        alert(a / b);
        break;
    default:
        alert('Такої дії нема');
}
