// задание 1
// let a = prompt ("Введите первое число");
// let b = prompt ("Введите второе число");

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
//   console.log (min (a,b));

// задание 2
// let theNum = prompt ("Введите число");

// function even(theNum) {
//     return theNum % 2 === 0 ? 'Число четное' : 'Число нечетное';
//   }
//   console.log (even (theNum));


// задание 3.1
// function square(number) {
//     const userInput = number;
//     let square = userInput * userInput;
//     console.log(square);
//   }

//     let number = prompt ("Введите число");
//     square(number);

// задание 3.2
// let number = prompt ("Введите число");

// function square(number) {
//     return number * number;
//   }
//     console.log(square(number));

// задание 4
// let userAge = prompt("Сколько Вам лет?");

// function age(age) {
//   if (age < 0) {
//     console.log("Вы ввели неправильное значение.");
//   } else if (age <= 12) {
//     console.log("Привет, друг!");
//   } else {
//     console.log("Добро пожаловать!");
//   }
// }

// age(userAge);

// задание 5
// let firstNumber = prompt("Введите первое число");
// let secondNumber = prompt("Введите второе число");

// function multiply(firstNumber, secondNumber) {
//     if (isNaN(firstNumber) || isNaN(secondNumber)) {
//       return "Одно или оба значения не являются числом";
//     }
//     return firstNumber * secondNumber;
//   }
//   console.log (multiply(firstNumber, secondNumber));

// задание 6
// let userInput = prompt("Введите число:");

// function cubeNumber() {
//     if (isNaN(userInput)) {
//       return "Переданный параметр не является числом";
//     }

//     let cube = userInput * userInput * userInput;
//     return `${userInput} в кубе равняется ${cube}`;
//   }
//   console.log (cubeNumber(userInput));


// задание 7
// function getArea() {
//     console.log(this.radius * this.radius * 3.14);
// }

// function getPerimeter() {
//     console.log(2 * 3.14 * this.radius);
// }

// const circle1 = {
//     radius: 10,
//     getArea: getArea,
//     getPerimeter: getPerimeter,
// }

// const circle2 = {
//     radius: 16,
//     getArea: getArea,
//     getPerimeter: getPerimeter,
// }

// circle1.getArea()
// circle1.getPerimeter()
// circle2.getArea()
// circle2.getPerimeter()

// задание 8
function season() {
    let userMonth = prompt("Ведите номер месяца");

      if (userMonth >= 1 && userMonth <= 2 || userMonth === 12) {
        alert("Зима");
      } else if (userMonth >= 3 && userMonth <= 5) {
        alert("Весна");
      } else if (userMonth >= 6 && userMonth <= 8) {
        alert("Лето");
      } else if (userMonth >= 9 && userMonth <= 11) {
        alert("Осень");
      }
      else {
        alert("Такого месяца нет");
      }
  }
