// Question 1: Select the <h1> element using its tag name and log it to the console.
// Your code here

let tag_h1 = document.querySelector('h1')
console.log(tag_h1);
// Question 2: Select the paragraph element using its class name and change its text content to "New content".
// Your code here
let p = document.querySelector('p')
p.textContent = "New paragraph naaa"
// Question 3: Create a new list item (<li>) element, set its text content to "New Item", and append it to the existing unordered list (<ul>).
// Your code here
let newItem = document.createElement('li')
newItem.textContent = 'Hello new list'
document.querySelector('ul').appendChild(newItem)
// Question 4: Change the value of the input field to "Updated Value".
// Your code here
let input = document.querySelector('input')
input.value = 'update value'
// Question 5: Add a click event listener to the button element. When the button is clicked, log "Button clicked!" to the console.
// Your code here
let click = document.getElementById('myButton')
click.addEventListener('click', (e)=>{
    console.log("Button Clicked");
})