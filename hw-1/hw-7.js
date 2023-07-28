//console.log('js'.toUpperCase()); //№1


//let animals = ['Кит', 'Кот', 'Собака', 'Петух', 'Лошадь', 'Лось', 'Змея'];  //№2
//let search = 'о';
//function searchStart(animals, search) {  
 //       animals.forEach((pet) => {
  //     if (pet.toLowerCase().includes(search.toLowerCase())) {
  //     console.log(pet);   
   //    }
    //})
    //}
    //searchStart(animals, search);


//let number = 32.58884;  //№3
//console.log(Math.floor(number)); //3.1
//console.log(Math.ceil(number)); //3.2
//console.log(Math.round(number)); // 3.3



//console.log(Math.max(52, 53, 49, 77, 21, 32)); //№4 вариант 1
//console.log(Math.min(52, 53, 49, 77, 21, 32));

//let numbs = [52, 53, 49, 77, 21, 32]; // №4 вариант 2
//let numbersMax = Math.max(...numbs);
//console.log(numbersMax);
//let numbersMin = Math.min(...numbs);
//console.log(numbersMin);



//function numbers(max, min) { //№ 5
 // return Math.floor(Math.random() *10) + 1;
//}
//console.log(numbers(1, 10));


//const numb = (max) => {  // №6
  //  let array = new Array();
    //while (array.length < Math.floor(max/2)) {
      //  array.push(Math.round(Math.random() * (max - 1)) + 1);
    //}
    //console.log(array);
//}
//numb(10);


//function getNumbers(max, min) {  //№7
   // return Math.floor(Math.random() * (max- min)) +min;
//}
//console.log(getNumbers(4, 9));


//let currentDate = new Date(); //№8
//console.log(currentDate);


//let currentDate = new Date();  //№9
//console.log(+currentDate);
//currentDate.setDate(currentDate.getDate() + 73);
//console.log(currentDate);


//function currentDate () {  //№10
  //  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Черверг", "Пятница", "Суббота"];
   // const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    //let myDate = new Date();
    //let hour = myDate.getHours();
    //let minutes = myDate.getMinutes();
    //let seconds = myDate.getSeconds();
    
  //  let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()];
   // console.log(fullDate);
    //console.log("Текущее время: " + hour + ":" + minutes + ":" + seconds);
//}
//currentDate();
  

//function gameRememberFruit () {   // №11
  //let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
 // words = words.sort(() => Math.random() - 0.5);
  //alert(`Запомни слова: ` + words);
 // let firstWord = prompt('Какое слово было первым?');
 // let lastWord = prompt('Какое слово было последним?');
  //if (firstWord == words[0].toLowerCase() && lastWord == words[words.length-1].toLowerCase()) {
  //  alert('Ура! У тебя хорошая память.');
  //} else if (firstWord == words[0].toLowerCase()) {
 //   alert('Ты был близок к победе');
 // } else if (lastWord == words[words.length-1].toLowerCase()) {
 //   alert('Ты был близок к победе');
 // } else {
 //   alert('Ты ответил неверно');
 // } { 
  //} {  
 // }
//}
//gameRememberFruit();