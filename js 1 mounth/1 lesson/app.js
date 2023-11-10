console.log('Hello world');

//Коментарии

// - строчный

/*
    блочный
**/

// переменные
// var

var name = "ADIOS"
console.log(name)

// camelcase

var nameAndSurname = ('Jenishbekov Baijigit')
console.log("name and surname - " + nameAndSurname )

//Типы данных
// 1) String

var course = "Geeks"
console.log(typeof course)
console.log(course)
// 2) number

var number1 = 25
var number2 = 4
console.log(number1 % number2)
console.log("Средний возраст группы - ", (18 + 16 + 18 + 16 + 17 + 17 + 14 + 14 + 17 + 17 + 16 + 16 + 18 + 25 + 17 + 19) / 16, 'лет')

//bolean 

// Операторы сравнения >, <, >=, <=, === (строгое равенство), == (нестрогое равенство), !==(cтрогое неравенство), != (нестрогое равенство)

var num1 = 4
var num2 = '4'
console.log(num1 !== num2)

// Условные конструкции if, else..if, else

var value1 = prompt('value 1')
var value2 = prompt('value 2')

if(value1 > value2){
    alert('Значение 1 больше чем значение2' )
}else if(value1 < value2){
    alert('значение 2 больше чем значение 1')

}else{
    alert('недоступное сравнение')
}

// Логические операторы &&, ||










