//exercitiul 1.1 Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, который в зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)
/*const numar = Number( prompt('Input a number'));
switch(numar){
    case 0:
        alert("Zero");
        break;
    case 1:
         alert("One");
         break;
    case 2:
        alert("Two");
        break;
    case 3:
        alert("Three");
        break;
    case 4:
        alert("Four");
        break;
    case 5:
        alert("Five");
        break;
    case 6:
        alert("Six");
        break;
     case 7:
        alert("Seven");
        break;
    case 8:
        alert("Eight");
        break;
    case 9:
        alert("Nine");
        break;
}*/
//exercitiul 1.2 Напишите код который посчитает и выведет в консоль сумму четных чисел из интервала [a, b]
/*var sum = 0;
var start = +prompt("Inceputul: ", 0);
var finish = +prompt("Sfarsitul: ", 0);
var i = start; 
  
while (i <= finish) {
      if (i % 2 == 0) {
          sum += i; 
      }  
      i++;
}
alert( "Suma numerelor pare " + start + " pana la " + finish + " = " + sum );
console.log(sum);*/
//exercitiul 1.3 Написать код который определит наибольшее и наименьшее число из a, b, c и выведет на экран соответствующее сообщение.
/*var a = prompt('Introduceti а', '');
var b = prompt('Introduceti b', '');
var c = prompt('Introduceti c', '');
  
if (a >= b && a >= c) {
  alert( "maxim " + a );
}
else if (b >= a && b >= c) {
  alert( "maxim " + b );
}
else {
  alert( "maxim " + c );
}

function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("Antonina") */
  // exercitiul 1.4 Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом. Например:
//ucFirst("вася") == "Вася";

  /*function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("antonina") );*/
  //Exercitiul 2.3 Создать массив и произвести над ним следующие 5 операций:

//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//Удалите первый элемент массива и покажите его.
//Вставьте «Рэп» и «Регги» в начало массива.
//Массив по ходу выполнения операций:
//Джаз, Блюз
//Джаз, Блюз, Рок-н-ролл
//Джаз, Классика, Рок-н-ролл
//Классика, Рок-н-ролл
//Рэп, Регги, Классика, Рок-н-ролл

/*let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock and Roll");
console.log(styles);
styles[1] = "Clasica"
console.log(styles);
alert(styles.shift());
console.log(styles);
styles.unshift("Rap", "Reggy");
console.log(styles);*/

//exercitiul 2.4 Напишите функцию sumInputNumbers(), которая:
//Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
//Подсчитывает и возвращает сумму элементов массива.
//P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

/*function sumInput() {
    let numbers = [];
  
    while (true) {
  
      let value = prompt("Introduceti", 0);
  
      
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );*/
  //exercitiul 2.5 
/*function convert(fn, array) {
  const newArray = []
  for (let i = 0; i < array.length; ++i) {
    newArray.push(fn(array[i]))
  }
  return newArray
}*/
//exercitiul 3.10 
/*
const num =[8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];
function uniqueSorted(numar){
  var obj = {},
      out=[];
  for (var i = 0; i < num.length; i++) {
    var str = num[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }
     for (i in obj) {
       out.push(i);
     }
     return out;
 // return Object.keys(obj); // вместо второго цикла можно так
}
result = uniqueSorted(num);
alert(num); // 
alert(result);*/


//exercitiul 4.1
/*let user = new Object();
console.log(user);*/
/*let user = {     
  name: "John"
};
console.log(user);*/
/*let user = {     
  name: "John",
  surname:"Smith"
};
console.log(user);*/
/*function User() {
  this.name = "John";
  return { name: "Peter" }; 
}
console.log( new User().name );*/
/*let user = {     
  name: "John",
  surname:"Smith"
};
delete user.name;
console.log(user);*/

//exercitiul 4.2
/*let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
function SumSalary(salaries){
  let sum = 0;
  for(let salariu of Object.values(salaries))  
  sum+=salariu;
  return(sum);
}
console.log(SumSalary(salaries));*/