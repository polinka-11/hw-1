//const numbs = [ 1, 5, 4, 10, 0, 3]; //№1

//numbs.forEach ((el) => {
 //   if (el == 10);
  //  console.log(el);
//})


//const numbs = [ 1, 5, 4, 10, 0, 3];  //№2

//console.log(numbs.indexOf(4));



//let numbs = [1, 3, 5, 10, 20];  //№3
//nu//mbs =numbs.join(' ');
//console.log(numbs);


//let arr =[];  /№ 4 (исправленное)

//for (let i = 0; i < 3; i++) {
	//arr[i] = []; 
	
	//for (let j = 0; j < 3; j++) {
	//arr[i].push(1); 
  
//}
//}

//console.log(arr);


//const numbs = [1, 1, 1,];  //№5
//numbs.push(2, 2, 2);

//console.log(numbs);



//const date = [9, 8, 7, 'a', 6, 5];  //№6
//date.sort();
//date.pop();
//console.log(date);


//const numbs = [9, 8, 7, 6, 5];  /№7
//let userInput = prompt("Угадайте число");

//if (numbs.includes(Number(userInput))) {
//  alert("Угадал");
//} else {
//  alert("не угадал");
//}
 
  
//const date = 'abcdef';   /№8
//let letters = date.split('').reverse().join('');
//console.log(letters);


//const numbs = [  //№9
  //  [1, 2, 3], 
   // [4, 5, 6],
//];
//console.log(numbs.reduce((flat, current) => flat.concat(current), []));


//let number = [2, 7, 4, 5, 6, 3, 8, 1, 10, 9];  //№ 10
//let sum = 0;

//for (i = 0; i< number.length; i++) {
  //  sum += number[i];
  //  console.log(sum);
//}


//function numbers() {   // № 11
   // const numbs = [2, 7, 4, 5];
  //   let result = numbs.map(a => a**2)
  //   console.log(result);
//}
//numbers();


//function words() { //№12
 //   let letters = ['стол', 'табурет', 'ноутбук', 'коробка'];
  //  letters = letters.map(str => "letters: " + (str.match(/[а-я]/gi) || []).length);
   // console.log(letters);
//}
//words();



//function filterPositive(array) {   //№13
 //   let negative = [];

    //for (let i = 0; i < array.length; i++) {
     //   if (array[i] < 0) {
      //      negative.push(array[i]);
       // }
    //}
    //return negative;
//}
//console.log(filterPositive([-1, 0, 5, -10, 56]));
//console.log(filterPositive([-25, 25, 0, -1000, -2]));



//let filtered = numbs.filter((a,i) => i %2 === 1);
//console.log(filtered);


//let numbs = [9, 6, 3, 8, 5, 2];  //№ 15
//result = numbs[Math.floor(Math.random() * numbs.length)];

 //const total = (numbers) => {
  //  let sum = 0;
   // for (let i = 0; i < numbers.length; i += 1) { 
    //  sum += numbers[i];
    //}
    //return sum / numbers.length;
  //};
  
 // console.log(total(numbs));