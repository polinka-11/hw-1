function monthNumber() {   //№8
  let num = prompt('Введите номер месяца'); 
  if (num == 1 || num == 2 || num == 12) {
    return alert('Зима');
  }
  if (num == 3 ||num == 4 || num == 5) {
    return alert('Весна');
  }
  if (num == 6 || num == 7 || num == 8) {
    return alert('Лето');
  }
  if (num == 9 || num == 10 || num == 11) {
   return alert('Осень');
  }
  if (num < 0 || num > 13) {
 return alert('Такого месяца не существует, попробуй еще раз!');
  }
 }




function gameRememberFruit () {   // №11
  let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  words = words.sort(() => Math.random() - 0.5);
  alert(`Запомни слова: ` + words);
  let firstWord = prompt('Какое слово было первым?');
  let lastWord = prompt('Какое слово было последним?');
  if (firstWord == words[0].toLowerCase() && lastWord == words[words.length-1].toLowerCase()) {
    alert('Ура! У тебя хорошая память.');
  } else if (firstWord == words[0].toLowerCase()) {
    alert('Ты был близок к победе');
  } else if (lastWord == words[words.length-1].toLowerCase()) {
    alert('Ты был близок к победе');
  } else {
   alert('Ты ответил неверно');
  } { 
  } {  
  }
}
