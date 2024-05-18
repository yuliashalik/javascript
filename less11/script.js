// let min = 1;
// let max = 100;
// let number = Math.round(Math.random()* (max - min) + min);
// console.log(number);

// function preload() {
//     console.log('Loading');
// }
// preload();
// preload();

function randomNumber(min, max) {
return Math.round(Math.random()* (max - min) + min);

}
// randomNumber(1, 100);
// randomNumber(50, 1000);


// let count = +prompt('vvedit Q ');
// let str = prompt('Vvedit shos`');
// function kotikDraw(number, str) {
//     for (let i = 0; i < number; i++) {
//     console.log(i + ' '+ str);
//     }
// }
// kotikDraw(count, str);

// function summa(par1, par2) {
//     alert(par1 + par2);
// }
// let number1 = randomNumber(1, 10);
// console.log(number1);
// let number2 = randomNumber(20, 60);
// console.log(number2);
// summa(number1, number2);

// function main() {
//     var goalsTeam1 = +prompt();
//     var goalsTeam2 = +prompt();
//     // визов функції
//     finalResult(goalsTeam1, goalsTeam2)
    
// }
// //заверш функцію
// function finalResult(par1, par2) {
//     if (par1 > par2) {
//         console.log("Команда 1 перемогла");
//     }
//     else if (par1 < par2) {
//         console.log("Команда 2 перемогла");
//     }
//     else {
//         console.log("Ничія");
//     }
    
// };
// main();

// let numb1 = randomNumber(1, 20);
// console.log(numb1);
// let numb2 = randomNumber(1, 20);
// console.log(numb2);
// let numb3 = randomNumber(1, 20);
// console.log(numb3);
// function average(num1, num2, num3) {
//     return (num1 + num2 + num3) / 3;
// }

// let x = average(numb1, numb2, numb3);
// alert(x);

// let zminna = parseFloat(prompt('Vvedit` number'));
// let zminna2 = parseFloat(prompt('Vvedit` number'));
// function myFunction(par1) {
//     return Math.floor(par1);
// }
// let result = myFunction(zminna) + myFunction(zminna2);
// console.log(result);

// function converter (summa, kurs) {
//     return summa/kurs;
// }
// let result = converter(200, 38.78);
// console.log(result);


// function vinagoroda (ochko) {
//     if (ochko < 3) {
//         return 'Bronza';
//     }
//     if (ochko < 7) {
//         return 'Sriblo';
//     }
//     return 'Zoloto'; 

// }
// let result = vinagoroda(6);
// alert(result);

// function bukva (bukva) {
//     if (bukva == 'а' || bukva == 'o' || bukva == 'e' || bukva == 'y' || bukva == 'и' || bukva == 'ю' || bukva == 'і' || bukva == 'є' || bukva == 'ї' || bukva == 'й') {
//         return true;
//     }
//     return false;

// }

// alert(bukva('к'));

// function vik (rik) {
//     let vik = 2024 - rik;
//     if (vik < 18) {
//         return 'Увага: ви не досягли повнолітнього віку!';
//     }
//     return vik;
// }
// let rik = +prompt('Введіть рік: ');
// console.log(vik(rik));


// function lenghtRow (ryadok) {
//     return ryadok.length;
// }
// let row = prompt('Vvedit ryadok: ');
// console.log(lenghtRow(row));

// function verkhniyRegistr (ryadok) {
//     return ryadok.toUpperCase();
// }
// let row = prompt('Vvedit ryadok: ');
// console.log(verkhniyRegistr(row));

// function kubNumber (number) {
//     return Math.pow(number, 3);
// }
// let chislo = +prompt('Vvedit chislo: ');
// console.log(kubNumber(chislo));

// function typeOfNumber (number) {
//     if (number >= 0) {
//         return '+++';
//     }
//     return '---';
// }
// let chislo = +prompt('Vvedit chislo: ');
// console.log(typeOfNumber(chislo));

// function countOfIteration (number) {
//     let count = 0;
//     for (let i = number; i > 10; i = i / 2) {
//         count++;
//     }
//     return count;
// }
// let chislo = +prompt('Vvedit chislo: ');
// alert(countOfIteration(chislo));


// function bigNumber (number1, number2) {
//    return number1 > number2 ? number1 : number2 > number1 ? number2 :  "Вони однакові";
//     // if (number1 > number2) {
//     //     return number1;
//     // }
//     // else if (number2 > number1) {
//     //     return number2;
//     // }
//     // else {
//     //     return  "Вони однакові";
//     // }
// }
// let number1 = +prompt('Введіть число: ');
// let number2 = +prompt('Введіть число: ');
// alert(bigNumber(number1, number2));


// function school (number) {
//     return number >= 6 && number <= 17 ? 'Ви ще навчаєтесь в школі' : 'Ви закінчили школу';
// }
// let number = +prompt('Введіть вік: ');
// console.log(school(number));

// function countProbiliv (string) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i]==' ') {
//             count++;
//         }
//     }
//     return count;
// }
// let ryadok = prompt('Введіть речення: ');
// alert(countProbiliv(ryadok));

// function temperature (t) {
//     if (t < 0) {
//         return 'Занадто холодно!';
//     }
//     else if (t >= 0 && t <= 15) {
//         return 'Прохолодно';
//     }
//     else if (t >= 16 && t <= 25) {
//         return 'Приємна температура';
//     }
//     else if (t >= 26 && t <= 35) {
//         return 'Гаряче';
//     }
//     else {
//         return 'Занадто жарко!';
//     }
// }
// let random = randomNumber(-100, 100);
// alert(random);
// alert(temperature(random));


// function sTr (a, b, c) {
//    let p = (a + b + c) / 2;
//    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//    return S;
// }
// function sPr (a, b) {
//     let S = a * b;
//     return S;
// }
// alert(sTr(4, 5, 6));
// alert(sPr(3, 78));


//5
// let t = +prompt('Введіть температуру: ');
// let v = +prompt('Введіть v: ');
// if (t > -25 && t <= 20 && v <= 7  )  {
//     alert('діти підуть до школи');
// }
// else {
//     alert('діти не підуть до школи');
// }


//4
// let pora = prompt('Введіть пору року: ');
// if (pora == 'літо' || pora == 'Літо') {
//     alert('Червень, липень, серпень');
// }
// else if (pora == 'осінь' || pora == 'Осінь') {
//     alert('Вересень, жовтень, листопад');
// }
// else if (pora == 'зима' || pora == 'Зима') {
//     alert('Грудень, січень, лютий');
// }
// else if (pora == 'весна' || pora == 'Весна'){
//     alert('Березень, квітень, травень');
// }
// else {
//     alert('Це що?');
// }


//2
// function findProduct(N) {
//     if (N <= 0) {
//       return 1;
//     }
  
//     let product = 1;
//     for (let i = 1; i <= N; i++) {
//       product *= (1 + i * 0.1);
//     }
  
//     return product;
//   }
//   let N = 9;
//   let product = findProduct(N);
//   console.log(`Добуток від 1.1 до 1.${N} = ${product}`);


//8
// let grade = prompt('Введіть grade: ');
// if (grade >= 0 && grade <= 20) {
//     alert('F');
// }
// else if (grade >= 21 && grade <= 40) {
//     alert('D');
// }
// else if (grade >= 41 && grade <= 60) {
//     alert('C');
// }
// else if (grade >= 61 && grade <= 80) {
//     alert('B');
// }
// else {
//     alert('A');
// }

