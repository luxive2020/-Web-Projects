const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'red';
h1.style.backgroundColor = 'black';


const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}
const person1 = {name : 'Max'};
const person2 = {name : "Manuel"}

const personData = new Map([[person1, [{date : "yester", price : 10}]]]);
personData.set(person2, [{date : 'now', price : 15}]);
console.log(personData)
console.log("------------------------------")
console.log(personData.get(person1))

for (const [key, value] of personData.entries()){
  console.log(key, value);
}
console.log("------------------------------")
for (const key of personData.keys()){
  console.log(key)
}
console.log("------------------------------")
console.log("------------------------------")
for (const value of personData.values()){
  console.log(value)
}