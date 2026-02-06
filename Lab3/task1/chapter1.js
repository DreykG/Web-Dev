alert("Я JavaScript!");

// let admin, name;

// name = "Джон";

admin = name;

alert( admin );

const birthday = '18.04.1982';

const age = someCode(birthday);

let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?

let a = 1, b = 1;

alert( ++a ); 
alert( b++ ); 

alert( a );
alert( b ); 

"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); // 3

5 > 4 → true
"ананас" > "яблоко" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false

if ("0") {
  alert( 'Привет' );
}

let value = prompt('Введите число', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result = (a + b < 4) ? 'Мало' : 'Много';

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

  alert( null || 2 || undefined );

  alert( alert(1) || 2 || alert(3) );
  alert( 1 && null && 2 );
  alert( alert(1) && alert(2) );

  let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value);

if (age >= 14 && age <= 90);

if (!(age >= 14 && age <= 90));

if (age < 14 || age > 90);

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}

let user;

alert(user ?? "Аноним"); // Аноним (user не существует)

alert(undefined ?? NaN ?? null ?? "" ?? " ");

let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city);

let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2;

let num1 = 10,
    num2 = 20,
    result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
}

let i = 3;

while (i) {
  alert( i-- );
}

for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

let num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i );
}

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n >= 1 && n % 1 == 0) {
  alert( pow(x, n) );
} else {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);

let sum = (a, b) => a + b;

/* Эта стрелочная функция представляет собой более короткую форму:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
//Если аргументов нет, круглые скобки будут пустыми, но они должны присутствовать:
let sayHi = () => alert("Hello!");

sayHi();

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);