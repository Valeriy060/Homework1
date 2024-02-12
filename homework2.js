// задание 1
let a = 10;
alert (a);
a = 20;
alert (a);
// задание 2
let firstIphone = 2007;
alert (`год выпуска первого айфона ${firstIphone}`); 
// задание3
let jsCraetor = "Брендан Эйх";
alert (`имя создателя языка Js ${jsCraetor}`);
// задание4
let b = 10;
let c = 2;
let sum = b + c;
let dif = b - c;
let mult = b * c;
let div = b / c;
result1 = b / c; 
alert (`сумма ${sum}\nразность ${dif}\nпроизведение ${mult}\nделение ${div}`);
// задание5
let f = 2;
let h = 5;
result = f ** h;
alert (`результат возведения в степени ${result}`);
// задание6
let d = 9;
let j = 2;
alert (`находим остаток от деления ${d / j}`);
// задание7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++ ;
num -- ;
alert (num);
// задание8
 let age = Number(prompt("сколько вам лет"));
 alert (age)
//  задание9
let user = {
    name: "Valeriy",
    age: 35,
    isAdmin: true,
}
user["city of residence"] = "Симферополь";
user.age = 33;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert (user[info]);
// задание10
let names = (prompt("Как тебя зовут?")); 
let greetings = `Привет ${names}`;
alert (greetings);
