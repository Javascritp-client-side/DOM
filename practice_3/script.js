// Task 1: Select all paragraphs inside the <div> with the ID 'container' and change their font size to '18px'.

document.querySelectorAll('#container > p').forEach((paragraph)=>{
    paragraph.style.fontSize = '18px'
})
// Task 2: Create a new <div> element, set its class to 'new-div', and append it as the first child of the <body> element.
let newDiv = document.createElement('div')
newDiv.className = 'new-div'
document.querySelector('body').insertBefore(newDiv,document.body.firstChild)
// Task 3: Select the third list item with the class 'list-item' and change its text color to 'orange'.
document.querySelectorAll('ul > li')[2].style.color = 'orange'
// Task 4: Remove the 'placeholder' attribute from the text input with the ID 'textInput' when the page loads.
document.getElementById('textInput').removeAttribute('placeholder')
// Task 5: Add a 'mouseover' event listener to the <ul> element. When the user hovers over any list item, log the item's text content to the console.
document.querySelector('ul').addEventListener('mouseover',(e)=>{
    console.log(e);
    if(e.target.tagName === 'LI'){
        console.log(e.target.textContent);
    }
}) 
// Task 6: Select the <h1> element and create a copy of it. Append the copy as the last child of the <body> element.

// Task 7: Create a function called 'changeTextColor' that takes a color as an argument. When called, change the text color of all list items with the class 'list-item' to the provided color.

// Task 8: Add a 'keydown' event listener to the text input with the ID 'textInput'. When the user presses the 'Enter' key, log the input value to the console and clear the input.

// Task 9: Select the <ul> element and remove the first list item with the class 'list-item'.

// Task 10: Add a 'resize' event listener to the window. When the window is resized, log the current width and height to the console.

// Task 11: Create a button with the text 'Hide List' and append it to the <div> with the ID 'container'. Add a click event listener to the button that toggles the visibility of the <ul> element.

// Task 12: Select all paragraphs inside the <div> with the ID 'container' and change their text content to "Paragraph {index}" where {index} is the index of the paragraph (1-based index).

// Task 13: Add a 'mouseleave' event listener to the <body> element. When the user leaves the page, display an alert saying "Don't go!"

// Task 14: Select the second list item with the class 'list-item' and add a data attribute 'data-index' with the value '2' to it.

// Task 15: Create a function called 'highlightText' that takes an element as an argument. When called, add a class 'highlighted' to the element, and set a timeout to remove the class after 3 seconds. Test this function by passing different elements.

// Task 16: Select the <h1> element and rotate it by 45 degrees when the 'Toggle Colors' button is clicked.

// Task 17: Create a new <a> element with an href attribute set to 'https://www.example.com'. Append it as the last child of the <body> element.

// Task 18: Add a 'mousemove' event listener to the <body> element. When the user moves the mouse, log the current mouse coordinates (clientX and clientY) to the console.

// Task 19: Select all list items with the class 'list-item' and shuffle their order randomly. Hint: You can use the Fisher-Yates shuffle algorithm.

// Task 20: Create a function called 'countWords' that takes a paragraph element as an argument and logs the number of words in that paragraph to the console.
