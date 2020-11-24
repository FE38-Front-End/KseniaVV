///
//Задание 1

// Рассчитать количество метров трубы которая может поместиться в
// контейнер 

// Пользователь вводит параметры контейнера
// И вводит диаметр трубы

// Как результат мы должны видеть 
// количество погонных метров трубы которое можно разместить в контейнере

const containerWidth = prompt ('Введите ширину контейнера','');
const containerLength = prompt ('Введите длинну контейнера','');
const containerHeigth = prompt ('Введите высоту контейнера','');

const pipeDiameter = prompt ('Введите диаметр трубы','');

let containerCapacity = containerWidth*containerHeigth
let pipeArea = (Math.PI*Math.pow(pipeDiameter,2))/4

let pipeAmount = (Math.floor(containerCapacity/pipeArea)*containerLength)

console.log(pipeAmount);