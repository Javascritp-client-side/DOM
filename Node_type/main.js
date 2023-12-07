// const node1 = document.querySelector('#content')

// if(node1.nodeType === Node.DOCUMENT_NODE){
//     console.log("It is document node");

// }
// else {
//     console.log("It is not ");
// }
//  console.log(node1.nodeType);
const node1 = document.querySelector('#content');
console.log(node1);
if (node1.nodeType === Node.ELEMENT_NODE) {
    console.log("It is an element node");
} else {
    console.log("It is not an element node");
}


