// Question 1: Select the <h1> element and change its text content to "DOM Practice Completed!"
// Your code here
let selectH1 = document.querySelector('h1')
selectH1.textContent = "DOM Practice Completed!"
// Question 2: Select the paragraph with the ID 'myParagraph' and change its text content to "Great job practicing DOM manipulation!"
// Your code here
document.getElementById('myParagraph').textContent = "Great job practicing DOM manipulation!"
// Question 3: Select all list items with the class 'list-item' and change their text content to "New Item"
// Your code here
let listItem = document.querySelectorAll('.list-item')
console.log(listItem);
listItem.forEach((i)=>{
    i.textContent = "New item"
})
// Question 4: Add a new list item to the existing <ul> with the text content "Brand New Item"
// Your code here
let newItem = document.createElement('li')
newItem.textContent = "Brand New Item"
document.querySelector('ul').appendChild(newItem)


// Question 5: Add a click event listener to the button with the ID 'myButton'.
// When the button is clicked, toggle the background color of the entire <body> between red and blue.
// Your code here
document.getElementById("myButton").addEventListener('click',(e)=>{
  document.querySelector('body').style.backgroundColor = document.querySelector('body').style.backgroundColor === 'red' ? 'blue' :'red'
   
})


console.log(document.querySelector('body').parentElement);
console.log(document.querySelector('body').parentNode);