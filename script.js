// 1. -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу


let dog = {
    name: "Sharik",
    age: 3,
    owner: "Vasya",
    breed: "Rottweller",
    color: "Black"
}

let person = {
    name: "Oleg",
    age: 28,
    height: 182,
    weight: 90,
    car: "Toyota"
}

let car = {
    brand: "Ford",
    dataCreation: 2014,
    model: "Mondeo",
    version: 3,
    owner: "Serhiy"
}

let flat = {
    rooms: 3,
    floor: 10,
    square: 75,
    dataCreation: 2010,
    owner: true
}

let book = {
    name: "Kobzar",
    author: "Shevchenko",
    color: "Brown",
    pages: 480,
    publicationData: 1840
}


// 2. -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів


let arrayWithDogs = ["Такса", "Французский бульдог", "Хаски", "Лабрадор", "Колли"];
console.log(arrayWithDogs)

let arrayWithPeople = ["Oleg", "Viktor", "Nadya", "Mariia", "Vova"];
console.log(arrayWithPeople);

let arrayWithCars = ["Volvo", "Kia", "Toyota", "Honda", "Mazda"]
console.log(arrayWithCars)



// 3. -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка



let build = {
    room: {
        firstRoom: "Restroom",
        secondRoom: "Bedroom",
        thirdRoom: "Hallway",
        fourthRoom: "Living Room"
    },
    floors: 1,
    square: 42,
    windows: ["firstWindow", "secondWindow"],
    color: "White"
}

let driver = {
    names: {
        oneDriver: "Oleg",
        secondDriver: "Voktor",
        thirdDriver: "Alibek"
    },
    age: [32, 18, 27],
    height: 182,
    weight: 90,
    cars: ["Toyota", "Volkswagen"],
}

let toy = {
    brand: "Funny Toy",
    dataCreation: 2019,
    model: {
        car: "BMW",
        animal: "Rebbit",
        constructor: "Builder"
    },
    fromWho: ["boys", "girls"],
    owner: "Serhiy Alibaba"
}

let table = {
    tableShape: ["circle", "square"],
    amount: 10,
    amountLegs: 4,
    dataCreation: 2020,
    material: {
        oakAmount: 4,
        mapleAmount: 6,
        cherryTreeAmount: 10
    }
}

let bag = {
    name: "clutch",
    gender: "Women",
    color: ["Brown", "Black", "Red"],
    material: {
        brown: "leather",
        black: "Faux Lether",
        red: "Rag",
        amount: 200
    }
}


// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне


let users = [{
        name: 'vasya',
        age: 31,
        status: false
    },
    {
        name: 'petya',
        age: 30,
        status: true
    },
    {
        name: 'kolya',
        age: 29,
        status: true
    },
    {
        name: 'olya',
        age: 28,
        status: false
    },
    {
        name: 'max',
        age: 30,
        status: true
    },
    {
        name: 'anya',
        age: 31,
        status: false
    },
    {
        name: 'oleg',
        age: 28,
        status: false
    },
    {
        name: 'andrey',
        age: 29,
        status: true
    },
    {
        name: 'masha',
        age: 30,
        status: true
    },
    {
        name: 'olya',
        age: 31,
        status: false
    },
    {
        name: 'max',
        age: 31,
        status: true
    }
];

// - статус Андрія

console.log(users[7].status)

// - статус Максима

console.log(users[4].status, users[10].status)

// - ім'я передостаннього об'єкту

console.log(users[users.length - 2].name)

// - ім'я третього об'єкта

console.log(users[2].name)

// - вік Олега

console.log(users[6].age)

// - вік Олі

console.log("Возраст Оли - " + users[users.length - 2].age)

// вік + ім'я 5го об'єкта

console.log("Возраст и Имя - " + users[4].age + " " + users[4].name)

// вік + сатус Анни

console.log("Возраст и статус Анны - " + users[5].age + " " + users[5].status)



// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"


let idContent = document.getElementById("content");
console.log(idContent);


// отримує текст з блоку з id "rules"


let idRules = document.getElementById("rules")
console.log(idRules)

// - замініть текст параграфа з id 'content' на будь-який інший

let textIdContent = document.getElementById("content");

textIdContent.innerText = `lorem20`;
console.log(textIdContent);

// - замініть текст параграфа з id 'rules' на будь-який інший

let textIdRules = document.getElementById("rules");
textIdRules.innerText = "other rules"
console.log(textIdRules);

// - змініть кожному елементу колір фону на червоний

let tagBackColorRed = document.body.getElementsByTagName("*")
console.log(tagBackColorRed)
for (let i = 0; i < tagBackColorRed.length; i++) {
    tagBackColorRed[i].style.backgroundColor = "red";
}


// - змініть кожному елементу колір тексту на синій

let tagBackColorBlue = document.body.getElementsByTagName("*")
console.log(tagBackColorBlue)
for (let i = 0; i < tagBackColorBlue.length; i++) {
    tagBackColorBlue[i].style.backgroundColor = "blue";
}


// - отримати весь список класів елемента з id=rules і вивести їх в console.log

let listClassElements = document.getElementsByClassName("fc bp");
console.log(listClassElements)

// - отримати всі елементи з класом fc_rules

let allElementsClassFc = document.getElementsByClassName("fc_rules");
console.log(allElementsClassFc)

// - поміняти колір тексту у всіх елементів fc_rules на червоний

let allElemChColorRed = document.getElementsByClassName("fc_rules");
for (let i = 0; i < allElemChColorRed.length; i++) {
    allElemChColorRed[i].style.backgroundColor = "red"
}