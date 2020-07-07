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