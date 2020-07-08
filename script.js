// 1. -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу


// let dog = {
//     name: "Sharik",
//     age: 3,
//     owner: "Vasya",
//     breed: "Rottweller",
//     color: "Black"
// }

// let person = {
//     name: "Oleg",
//     age: 28,
//     height: 182,
//     weight: 90,
//     car: "Toyota"
// }

// let car = {
//     brand: "Ford",
//     dataCreation: 2014,
//     model: "Mondeo",
//     version: 3,
//     owner: "Serhiy"
// }

// let flat = {
//     rooms: 3,
//     floor: 10,
//     square: 75,
//     dataCreation: 2010,
//     owner: true
// }

// let book = {
//     name: "Kobzar",
//     author: "Shevchenko",
//     color: "Brown",
//     pages: 480,
//     publicationData: 1840
// }


// // 2. -- Створити масив та вивести його в консоль:
// // - з 5 собак
// // - 3 5 людей
// // - з 5 автомобілів


// let arrayWithDogs = ["Такса", "Французский бульдог", "Хаски", "Лабрадор", "Колли"];
// console.log(arrayWithDogs)

// let arrayWithPeople = ["Oleg", "Viktor", "Nadya", "Mariia", "Vova"];
// console.log(arrayWithPeople);

// let arrayWithCars = ["Volvo", "Kia", "Toyota", "Honda", "Mazda"]
// console.log(arrayWithCars)



// // 3. -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// // - будинок
// // - водій
// // - іграшку
// // - стіл
// // - сумка



// let build = {
//     room: {
//         firstRoom: "Restroom",
//         secondRoom: "Bedroom",
//         thirdRoom: "Hallway",
//         fourthRoom: "Living Room"
//     },
//     floors: 1,
//     square: 42,
//     windows: ["firstWindow", "secondWindow"],
//     color: "White"
// }

// let driver = {
//     names: {
//         oneDriver: "Oleg",
//         secondDriver: "Voktor",
//         thirdDriver: "Alibek"
//     },
//     age: [32, 18, 27],
//     height: 182,
//     weight: 90,
//     cars: ["Toyota", "Volkswagen"],
// }

// let toy = {
//     brand: "Funny Toy",
//     dataCreation: 2019,
//     model: {
//         car: "BMW",
//         animal: "Rebbit",
//         constructor: "Builder"
//     },
//     fromWho: ["boys", "girls"],
//     owner: "Serhiy Alibaba"
// }

// let table = {
//     tableShape: ["circle", "square"],
//     amount: 10,
//     amountLegs: 4,
//     dataCreation: 2020,
//     material: {
//         oakAmount: 4,
//         mapleAmount: 6,
//         cherryTreeAmount: 10
//     }
// }

// let bag = {
//     name: "clutch",
//     gender: "Women",
//     color: ["Brown", "Black", "Red"],
//     material: {
//         brown: "leather",
//         black: "Faux Lether",
//         red: "Rag",
//         amount: 200
//     }
// }


// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне


// let users = [{
//         name: 'vasya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'petya',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'kolya',
//         age: 29,
//         status: true
//     },
//     {
//         name: 'olya',
//         age: 28,
//         status: false
//     },
//     {
//         name: 'max',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'anya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'oleg',
//         age: 28,
//         status: false
//     },
//     {
//         name: 'andrey',
//         age: 29,
//         status: true
//     },
//     {
//         name: 'masha',
//         age: 30,
//         status: true
//     },
//     {
//         name: 'olya',
//         age: 31,
//         status: false
//     },
//     {
//         name: 'max',
//         age: 31,
//         status: true
//     }
// ];

// // - статус Андрія

// console.log(users[7].status)

// // - статус Максима

// console.log(users[4].status, users[10].status)

// // - ім'я передостаннього об'єкту

// console.log(users[users.length - 2].name)

// // - ім'я третього об'єкта

// console.log(users[2].name)

// // - вік Олега

// console.log(users[6].age)

// // - вік Олі

// console.log("Возраст Оли - " + users[users.length - 2].age)

// // вік + ім'я 5го об'єкта

// console.log("Возраст и Имя - " + users[4].age + " " + users[4].name)

// // вік + сатус Анни

// console.log("Возраст и статус Анны - " + users[5].age + " " + users[5].status)



// // -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // - отримує текст з параграфа з id "content"


// let idContent = document.getElementById("content");
// console.log(idContent);


// // отримує текст з блоку з id "rules"


// let idRules = document.getElementById("rules")
// console.log(idRules)

// // - замініть текст параграфа з id 'content' на будь-який інший

// let textIdContent = document.getElementById("content");

// textIdContent.innerText = `lorem20`;
// console.log(textIdContent);

// // - замініть текст параграфа з id 'rules' на будь-який інший

// let textIdRules = document.getElementById("rules");
// textIdRules.innerText = "other rules"
// console.log(textIdRules);

// // - змініть кожному елементу колір фону на червоний

// let tagBackColorRed = document.body.getElementsByTagName("*")
// console.log(tagBackColorRed)
// for (let i = 0; i < tagBackColorRed.length; i++) {
//     tagBackColorRed[i].style.backgroundColor = "red";
// }


// // - змініть кожному елементу колір тексту на синій

// let tagBackColorBlue = document.body.getElementsByTagName("*")
// console.log(tagBackColorBlue)
// for (let i = 0; i < tagBackColorBlue.length; i++) {
//     tagBackColorBlue[i].style.backgroundColor = "blue";
// }


// // - отримати весь список класів елемента з id=rules і вивести їх в console.log

// let listClassElements = document.getElementsByClassName("fc bp");
// console.log(listClassElements)

// // - отримати всі елементи з класом fc_rules

// let allElementsClassFc = document.getElementsByClassName("fc_rules");
// console.log(allElementsClassFc)

// // - поміняти колір тексту у всіх елементів fc_rules на червоний

// let allElemChColorRed = document.getElementsByClassName("fc_rules");
// for (let i = 0; i < allElemChColorRed.length; i++) {
//     allElemChColorRed[i].style.backgroundColor = "red"
// }

// ---------------------------------------------------------------------
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

// let colorTextElemId = document.getElementById("main_header");
// colorTextElemId.style.color = "blue";
// console.log(colorTextElemId)

// -- робить шириниу елементу ul 400 пікселів

// let widthElementUl = document.getElementsByTagName("ul");
// widthElementUl[0].style.width = "400px"

// -- робить шириниу всіх елементів з класом linkList шириною 50%

// let widthAllElemClList = document.getElementsByClassName("linkList");
// for (let i = 0; i < widthAllElemClList.length; i++) {
//     widthAllElemClList[i].style.width = "50%"
// }


// -- отримує текст який зберігається в елементі з класом listElement2

// let textInElemList = document.getElementsByClassName("listElement2");
// console.log(textInElemList[0])


// -- отримує всі елементи li та змінює ім колір фону на сірий

// let allElemLiBackColor = document.getElementsByTagName("li")
// for (let i = 0; i < allElemLiBackColor.length; i++) {
//     allElemLiBackColor[i].style.backgroundColor = "silver"
// }


// -- отримує всі елементи 'a' та додає їм клас anchor

// let allElementsA = document.getElementsByTagName("a");
// for (let i = 0; i < allElementsA.length; i++) {
//     allElementsA[i].classList.add("anchor")
// }


// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів


// let allElementsAIf = document.getElementsByTagName('a');
// for (let i = 0; i < allElementsAIf.length; i++) {
//     console.log(allElementsAIf[i])
//     if (allElementsAIf[i].textContent === "link3") {
//         allElementsAIf[i].style.fontSize = "40px"
//     }
// }


// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a


// let allElementsAClassAdd = document.getElementsByTagName('a');
// for (let i = 0; i < allElementsAClassAdd.length; i++) {
//     allElementsAClassAdd[i].classList.add("element_XXX");
//     allElementsAClassAdd[i].innerHTML = "XXX";
// }


// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()


// let allElementsSubBackColor = document.getElementsByClassName("sub-header");
// for (let i = 0; i < allElementsSubBackColor.length; i++) {
//     allElementsSubBackColor[i].style.backgroundColor = prompt("Введите цвет фона")
// }


// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let allSubHeadColorText = document.getElementsByClassName("sub-header");
// for (let i = 0; i < allSubHeadColorText.length; i++) {
//     if (allSubHeadColorText[i].textContent === "content 2 segment") {
//         allSubHeadColorText[i].style.color = prompt("Введите цвет текста")
//     }
// }


// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()


// let elementWithClassCont = document.getElementsByClassName("content_1");
// elementWithClassCont[0].innerHTML = prompt("Введите текст")


// -- отримати елементи p та змінити їм paddin на довільне значення

// let elemPaddin = document.getElementsByTagName("p");
// for (let i = 0; i < elemPaddin.length; i++) {
//     elemPaddin[i].style.padding = "40px";
// }


// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

// let elementsTextAndChange = document.getElementsByClassName("text2");
// for (let i = 0; i < elementsTextAndChange.length; i++) {
//     elementsTextAndChange[i].innerHTML = "Good story about your love"
// }