const users = [
    {   
        имя: "Алексей",
        возраст: 20,
        адрес: {
            город: "Москва",
            улица: "Алексеевская",
            дом: 34
        }
    },

    {
        имя: "Дмитрий",
        возраст: 21,
        адрес: {
            город: "Москва",
            улица: "Дмитриевская",
            дом: 12
        }
    },

    {
        имя: "Роман",
        возраст: 25,
        адрес: {
            город: "Москва",
            улица: "Романовская",
            дом: 14
        }
    },

    {
        имя: "Екатерина",
        возраст: 61,
        адрес: {
            город: "Москва",
            улица: "Екатеринская",
            дом: 17
        }
    },

    {
        имя: "Катер",
        возраст: 62,
        адрес: {
            город: "Москва",
            улица: "Катерская",
            дом: 19
        }
    }
];

function getTotalAge(users) {
    let totalAge = 0;
    for (let i = 0; i < users.length; i++) {
        totalAge += users[i].возраст;
    }
    return totalAge;
}

function getUsersStreets(users) {
    const usersStreets = [];
    for (let i = 0; i < users.length; i++) {
        usersStreets.push(users[i].адрес.улица);
    }
    return usersStreets;
}

function getOldPeople(users) {
    const oldPeople = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].возраст > 60) {
            oldPeople.push(users[i].имя + " - " + users[i].возраст);
        }
    }
    return oldPeople;
}

for (let i = 0; i < users.length; i++) {
    console.log("Имя: " + users[i].имя);
    console.log("Возраст: " + users[i].возраст);
    console.log("Адрес: " + users[i].адрес.город + ", " + users[i].адрес.улица + ", " + users[i].адрес.дом);
    console.log("---")
}

let totalAge = getTotalAge(users);
console.log("Общий возраст пользователей: " + totalAge);

let usersStreets = getUsersStreets(users);
console.log("Список улиц, на которых живут пользователи: " + usersStreets.join(", "));

let oldPeople = getOldPeople(users);
console.log("Список пользователей, которым больше 60 лет: ", oldPeople.join(", "));
