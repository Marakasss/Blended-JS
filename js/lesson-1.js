

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// let number;
//    let message = "Введіть число";
//    while(true){
//      number = Number(prompt(message));
//      if (!isNaN(number)) {
//        break;
//      }
//      else {
//        message = "Введене значення не є числом, спробуйте ще раз"
//      }
//    }

//    number === 10 ? alert("вірно") : alert("невірно");






// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// const quater = Math.floor(min / 15 + 1);
// alert(`${min} входить в ${quater} чверть`);







// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = Number(prompt('Введіть число від 1 до 4'));
// let result = '';
// switch (num) {
//         case 1:
//             result = 'зима';
//             break;
//         case 2:
//             result = 'весна';
//             break;
//         case 3:
//             result = 'літо';
//             break;
//         case 4:
//             result = 'осінь';
//             break;
//         default:
//             result = 'Ви ввели некоректне число';
// }
    
// console.log(result);




// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sumEven = 0;

//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sumEven += i;
//     }
    
//   }
//   return sumEven;
// }
 
//  console.log(getNumbers(2, 12));






// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

//  function min(a, b) {
//    if (typeof a !== 'number' || typeof b !== 'number') {
//      return 'Not a number!';
//    }
//    return a < b ? a : b;
//  }

//  console.log(min(1, 60));




// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Not a number!';
//   }
//     return Math.min(a, b);
//   }

// console.log(min("1", 60));




// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   }
//   else {
//     const checkAdoult = confirm('Чи виповнилось вам 18 років');
//     return checkAdoult;
//   }

// }
// console.log(isAdult(18));





// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.


// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbazz');
//     }
//     else if (i % 3 === 0) {
//       console.log('fizz');
//     }
//     else if (i % 5 === 0) {
//       console.log('bazz');
//     }
    
//   }
// }

// fizzBuzz(100);




// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>





// const num = prompt("Введіть кількість хвилин");
// const hour = Math.floor(num / 60).toString().padStart('2', 0);
// const minutes = (num % 60).toString().padStart(2, "0");
// alert(hour+":"+minutes);


