const firstName = {
    0: 'Wade',
    1: 'Dave',
    2: 'Seth',
    3: 'Ivan',
    4: 'Riley',
    5: 'Gilbert',
    6: 'Jorge',
    7: 'Dan',
    8: 'Brian',
    9: 'Roberto',
    10: 'Ramon',
    11: 'Miles',
    12: 'Liam',
    13: 'Nathaniel',
    14: 'Ethan',
    15: 'Lewis',
    16: 'Milton',
    17: 'Claude',
    18: 'Joshua',
    19: 'Glen',
    /**------------------------------*/
    20: 'Daisy',
    21: 'Deborah',
    22: 'Isabel',
    23: 'Stella',
    24: 'Debra',
    25: 'Beverly',
    26: 'Vera',
    27: 'Angela',
    28: 'Lucy',
    29: 'Lauren',
    30: 'Janet',
    31: 'Loretta',
    32: 'Tracey',
    33: 'Beatrice',
    34: 'Sabrina',
    35: 'Melody',
    36: 'Chrysta',
    37: 'Christina',
    38: 'Vicki',
    39: 'Molly',
};
const lastName = {
    0: 'Williams',
    1: 'Harris',
    2: 'Thomas',
    3: 'Robinson',
    4: 'Walker',
    5: 'Scott',
    6: 'Nelson',
    7: 'Mitchell',
    8: 'Morgan',
    9: 'Cooper',
    10: 'Howard',
    11: 'Davis',
    12: 'Miller',
    13: 'Martin',
    14: 'Smith',
    15: 'Anderson',
    16: 'White',
    17: 'Perry',
    18: 'Clark',
    19: 'Richards',
    /**------------------------------*/
    20: 'Wheeler',
    21: 'Warburton',
    22: 'Stanley',
    23: 'Holland',
    24: 'Terry',
    25: 'Shelton',
    26: 'Miles',
    27: 'Lucas',
    28: 'Fletcher',
    29: 'Parks',
    30: 'Norris',
    31: 'Guzman',
    32: 'Daniel',
    33: 'Newton',
    34: 'Potter',
    35: 'Francis',
    36: 'Erickson',
    37: 'Norman',
    38: 'Moody',
    39: 'Lindsey',
};
const getRandomSalary = () => {
    let res;
    res = Math.round(Math.random()*50);
    if (res < 10) {
        res = 10;
    }
    res *= 100;
    return res;
};
const getArrayOfRandomObjects = quantity => {
    let stuff = [];
    for (let i = 0; i < quantity; i++) {
        let employee = {
            fullName: '',
            salary: 0,
        };
        employee.fullName = `${firstName[Math.round(Math.random()*39)]} ${lastName[Math.round(Math.random()*39)]}`;
        employee.salary = getRandomSalary();
        stuff.push(employee);
    }
    return stuff;
};
const sortStuffBySalary = (arr, typeOfSort) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            switch (typeOfSort) {
                case 'asc':
                    if (arr[i].salary < arr[j].salary) {
                        let temp = arr[j];
                        arr[j] = arr[i];
                        arr[i] = temp;
                    }
                    break;
                case 'desc':
                    if (arr[i].salary > arr[j].salary) {
                        let temp = arr[j];
                        arr[j] = arr[i];
                        arr[i] = temp;
                    }
                    break;
            }
        }
    }
    return arr;
};
const stuff = getArrayOfRandomObjects(10);
