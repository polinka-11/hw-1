//const people = [   //№1 (данный вариант, может не совсем имеет место быть)
  //{name: 'Глеб', age: 29},
  //{name: 'Анна', age: 17},
  //{name: 'Олег', age: 7},
  //{name: 'Оксана', age: 47},
//];

//console.log(people.sort(function (a, b) {
  //if (a.age > b.age) {
  //  return 1;
  //}
  //if (a.age < b.age) {
   // return -1;
  //}
  //return 0;
//}));

//const people = [   //№1 (2 вариант)
 // {name: 'Глеб', age: 29},
 // {name: 'Анна', age: 17},
  //{name: 'Олег', age: 7},
 // {name: 'Оксана', age: 47},
//];
//console.log(people.sort((a, b) => a.age - b.age));
 


//function isPositive(num) {  //№2
  //return num > 0;
//}

//function isMale(person) {
  //return person.gender === 'male';
//}

//function filter(arr, callback) {
 // let result = [];
  //for (let i = 0; i < arr.length; i++) {
   // if (callback(arr[i])) {
   //   result.push(arr[i]);
   // }
  //}
 // return result;
//}

//console.log(filter([3, -4, 1, 9], isPositive)); 

//const people = [
   //{name: 'Глеб', gender: 'male'},
   //{name: 'Анна', gender: 'female'},
   //{name: 'Олег', gender: 'male'},
   //{name: 'Оксана', gender: 'female'}
//];

//console.log(filter(people, isMale));



//timerIn = setInterval(() => console.log(new Date()), 3000);  //№3

//setTimeout(() => {clearInterval(timerIn); console.log('30 секунд прошло');
//}, 30000);



//function delayForSecond(callback) {  //№4
 //setTimeout(callback, 1000);
  //}
//delayForSecond(function(){
 // console.log('Привет, Глеб!');
//});



//function delayForSecond(cb) { // №5
  //setTimeout(() => {
    //console.log('Прошла 1 секунда');
    //if (cb) {  cb(); }
//}, 1000)
 // }
  //function sayHi (name) {
  // console.log(`Привет, ${name}!`);
  //}
  

  //delayForSecond(function () {
   // sayHi('Глеб');
  //});
  
    
  