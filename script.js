let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list = document.createElement('ul');

// Add your code here

for(let i = 0; i <= myArray.length - 1; i++){
  let vegetables = myArray[i];
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  listItem.appendChild(listText);
  listText.textContent = vegetables;
  list.appendChild(listItem);
}

// Don't edit the code below here!

const section = document.querySelector('section');
section.appendChild(list);
