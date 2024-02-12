let password = 'пароль';
let userPassword = prompt ('введите пароль');
if (userPassword === password) {
    alert ('пароль введен верно');
} else {
    alert ('пароль введен не верно');
}
// задание2
let c = 5;
if (c > 0 && c < 10) {
    console.log ("верно");
} else {
    console.log ("не верно");
}
// задание3
let d = 3;
let e = 107;
if (d > 100 || e > 100) {
    console.log ("верно");
} else {
     console.log ("не верно");
}
// задание4
let a = '2';
let b = '3';
let num = Number(a) + Number(b);
alert(num);
// задание5
let monthNumber = 12;
if (monthNumber > 12) {
    console.log ("ошибка")
} else {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            console.log ("зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log ("весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log ("лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log ("осень");
            break;
        default:
            console.log ("не верный номер месяца");

    }
}
// задание7
let input = prompt("Пожалуйста, введите любое число");
if (isNaN(input)) {
    alert ("вы ввели не число")
} else {
    let number = Number(input);
    if (number % 2 === 0) {
        alert ("число четное");
    } else {
        alert ("число не четное");
    }
}
// задание8
let clientOS = 1;
if (clientOS === 0) {
    console.log ("Установите версию приложения для iOS");
} else if (clientOS === 1) {
    console.log ("Установите версию приложения для Android");
} else {
    console.log ("не удалось определить операционную систему");
}

{
// задание9
const clientDeviceYear = 2015;
const clientOS = 'iOS';

if (clientDeviceYear < 2015) {
    if (clientOS === 'iOS') {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else if (clientOS === 'Android') {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    }
} else {
    console.log('Установите приложение для вашего устройства');
}
}