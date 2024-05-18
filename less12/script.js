// const cat = new Object();
// const cat = {
//     name: 'Sunny',
//     legs: 4,
//     color: 'відтінок лісової кішки'
// };
// console.log(cat);


// const car = {
//     name: 'Fiat',
//     color: 'gray',
//     number: 'AI5715AH',
//     wheels: 4,
//     flavoring: true
// }
// console.log(car);
// let keys = Object.keys(car);
// alert(`В об'єкта машина є такі властивості ${keys}`);
// let property = prompt('Яка властивість вас цікавить? ');
// alert(car[property]);


// let cuboid = {
//     length: 25,
//     width: 50,
//     height: 200
// };
// let v = cuboid.length * cuboid.width *cuboid.height;
// console.log(`Об'єм куба ${v}`);


// const user = {};
// user.name = 'Іван';
// user.surname = 'Сміт';
// console.log(user);
// user.name = 'Петро';
// console.log(user);
// delete user.name;
// console.log(user);


// const bank = {};
// bank.Maryna = 10000;
// bank.Petro = 1;
// bank.Katya = 300;
// console.log(bank);
// let borg = bank.Maryna + bank.Katya + bank.Petro;
// console.log(borg);
// bank.Katya += 3;
// console.log(bank);


// const movies = {
//     'Dune': {
//        year: 2024,
//         time: '2:40:36',
//         part: 2,
//         director: 'Deny Vilnev'
//     },
//     'Max': {
//         year: 2015,
//         time: '1:50:39',
//         part: 1,
//         director: 'Boaz Yakin'
//     },
//     'Hunters': {
//         year: 2013,
//         time: '1:25:45',
//         part: 1,
//         director: 'Nisha Ganatra'
//     }

// };
// console.log(movies);
// console.log(movies.Dune);
// const movie = {
//     year: 2018,
//     time: '1:36:11',
//     part: 1,
//     director: 'Albert Hyuz'
// };
// movies['Alfa'] = movie;
// console.log(movies);

function randomNumber(min, max) {
    return Math.round(Math.random()* (max - min) + min);
    
    }
// const scores = {
//     Max: 0,
//     Artem: 0,
//     Maryna: 0,
//     Yulia: 0
// }
// // console.log(scores.Max);
// for (let i = 1; i <= 5; i++) {
//     scores.Max += randomNumber(1, 12);
//     scores.Artem += randomNumber(1, 12);
//     scores.Maryna += randomNumber(1, 12);
//     scores.Yulia += randomNumber(1, 12);
//     console.log(`Рахунок на раунді ${i}: `);
//     console.log(scores);
// }

// let n = 10;//randomNumber(1, 100);
// let res;
// let b = 1.1;
// res = b;
// for (let i = 1; i < n; i++) {
//     b += 0.1;
//     res = res * b;  
// }
// console.log(res);


// let n = 10;//randomNumber(1, 100);
// let res;
// let a = 1;
// res = 0;
// let b;
// for (let i = 1; i < n; i++) {
//         b = (1 + i * 0.1) * a;
//         res = res + b;  
//         a = a * (-1);
//     }
// console.log(res);

// let pora = prompt('Введіть пору');
// let res;
// switch (pora) {
//     case 'winter': 
//         res = "Грудень, січень, лютий";
//         break;
//     case 'spring':
//         res = "Березень, квітень, травень";
//         break;
//     case 'summer':
//         res = "Червень, липень, серпень";
//         break;
//     case 'autumn':
//         res = "Вересень, жовтень, листопад";
//         break;
// }
// alert(res);

// let countries = [
//     'Egypt',
//     'Bulgaria',
//     'Romania',
//     'Moldova',
//     'Germany'
// ];
// console.log(countries);


// let cars = [];
// cars[0] = 'Maserati';
// cars[1] = 'Ferrari';
// cars[2] = 'Bugatti';
// cars[3] = 'Pagani';
// cars[4] = 'Zhiguli';
// console.log(cars);
// cars[4] = 'Lanos';
// console.log(cars);
// cars.push('Lamborghini');
// cars.unshift('BMW');
// console.log(cars);
// console.log(cars.length);

// let styles = [
//     'Jazz',
//     'Blues'
// ];
// console.log(styles);
// styles.push('Rock-n-Roll');
// console.log(styles);
// styles[1] = 'Classics';
// console.log(styles);
// let deleteMusic = styles.shift();
// console.log(deleteMusic);
// console.log(styles);
// styles.unshift('Rap', 'Reggae');
// console.log(styles);
// console.log(styles.length);



// function fruitsInput() {
//     let fruits = [];
//     while(true) {
//     let fruit = prompt('Введіть фрукт');
//     if ((fruit === '') || (isFinite(fruit)) || (fruit === null)) {
//         break;
//     }
//     fruits.push(fruit);
//     }
//     return fruits;
// }
// console.log(fruitsInput());



// let dinozaurus = [
//     "Tyrannosaurus Rex ", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus"
// ]
// function lengthArray (array) {
//     let lengthOfArray = array.length;
//     return lengthOfArray;
// }
// console.log(lengthArray(dinozaurus));
// console.log(lengthArray(cars));


// function sumInput() {
//     let numbers = [];
//     while(true) {
//     let number = prompt('Введіть number');
//     if ((number === '') || !(isFinite(number)) || (number === null)) {
//         break;
//     }
//     numbers.push(+number);
// }
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//        sum = sum+ numbers[i];
//     }

//     return sum;
// }
// console.log(sumInput());


// let tecnologies = [
//     'HTML', 'CSS', 'Python', 'JavaScript', 'Excel', 'Scratch', 'Word 2016', 'Word 2021'
// ];
// alert(tecnologies[12]);


// let eat = ['Вареники🥟',

// 'Сало з часником🧄',

// 'Шашлик🍽',

// 'Млинці🥞',

// `М'ясо по французьки🥩`];
// console.log(eat);
// let numberOfMenu = +prompt('Введіть номер страви');
// eat[numberOfMenu] = 'Борщ🧄';
// console.log(eat);

// let myBooks = [
//     'Карти на стіл',
//     'Лісова пісня',
//     'Тореадори з Васюківки'
// ];
// let yourBooks = [
//     'Квіти для Ердженона',
//     'Казки про дивних',
//     'Білі Міліган'
// ];
// let ourBooks = myBooks.concat(yourBooks);
// console.log(ourBooks);

// let fruits = [
//     'Pineapple',
//     'Apple',
//     'Orange',
//     'Pear'
// ];
// let vegetables = [
//     'Potato',
//     'Cucumber',
//     'Tomato'
// ];
// let sweets = [
//     'Candies',
//     'Waffles',
//     'Pancakes',
//     'Cake'
// ];
// let eat = fruits.concat(vegetables, sweets);
// console.log(eat);

// let a = fruits.indexOf('Cucumber');
// console.log(a);

// let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
// let a = boringAnimals.join(',  ');
// console.log(a);


// let nameBraz = ["Ivan", "Vasyl", "Petro", "Silvester", "Mykolayovuch", "Kovalenko"];
// let a = nameBraz.join('-');
// console.log(a);

// let road = [];
// road.push('Мій будинок');
// road.push( 'Магазин Біля Дома');
// road.push( '721 маршрутка');
// road.push( 'Південна Борщагівка');
// road.push( 'Шаурма');
// road.push('Церква');
// road.push( 'Будинок моєї подруги');
// console.log(road.pop());
// console.log(road.pop());
// console.log(road.pop());
// console.log(road.pop());
// console.log(road.pop());
// console.log(road.pop());
// console.log(road.pop());
// console.log(road);


// let magicBall8 = ['Дуже ймовірно', 'Зірки говорять ні', 'Безумовно', 'Відповідь ні', 'Без сумнівів', 'Ні', 'Не сподівайтеся', 'Запитайте знову', 'Не можу сказати', 'Повинно бути так', 'Абсолютно точно', 'Відповідь не зрозуміла', 'Навряд чи', 'Запитайте пізніше', 'Так', 'Мені здається так', 'Духи говорять так', 'Схоже так', 'Мало шансів', 'Не схоже', 'Просто ідіть і відпочиньте🍟'];
// let question = prompt('Задайте питання');
// let result = magicBall8[randomNumber(0, magicBall8.length - 1)];
// alert(`Your question: ${question}, answer for you: ${result}`);

// let partOfBody = ['ніс', 'нога', 'пузо','щоки'];
// let prikmetnuk = ['смішний', 'товстий', 'прищавий', 'тупий'];
// let animal = ['мартишка', 'криса', 'лосось']
// alert(`Your ${partOfBody[randomNumber(0, partOfBody.length - 1)]}, look like ${prikmetnuk[randomNumber(0, prikmetnuk.length - 1)]} ${animal[randomNumber(0, animal.length - 1)]}` );

// let masuv = [3, 2, 1] ;
// console.log(masuv.join(' is bigger than '));
// console.log(masuv);

// let array = [];
// let suma = 0;
// for (let i = 0; i < 20; i++) {
//     array.push(randomNumber(0, 100));
//     if (array[i] < 10) {
//         suma = suma +  array[i];
//     }
// }
// console.log(array);
// console.log(suma);

// let followers = ['Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata',
// 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata', 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata', 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata', 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata', 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata', 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata','Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata', 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata',
// 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata', 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata', 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata', 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata', 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata', 'Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata','Maryna', 'Nastya','Oleksii', 'Olya', 'Anonim', 'Dmytro', 'Renata'];
// function checkFollowers100 (array) {
//     if (array.length > 100) {
//         alert('You are not luser');
//     }
//     else {
//         alert('You luzer');
//     }
// }
// checkFollowers100(followers);


let array = [];
for (let i = 0; i < 20; i++) {
    array.push(randomNumber(0, 20));
  
}
console.log(array);

function kvadrat (array) {
    let newArray = [];
    for (let a = 0; a < array.length; a++) {
       newArray.push(array[a]** 2) ;
    }
    console.log(newArray);
}
kvadrat(array);


