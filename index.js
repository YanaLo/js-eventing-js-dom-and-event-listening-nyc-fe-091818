<<<<<<< HEAD
// Get the element

const main=document.querySelector('main')

// Add an event listener
function onClick(){
  alert('i was clicked')
}

main.addEventListener('click',onClick)
function onKeyDown(event){
  if(event.which===74){
    event.preventDefault()
  }
}

const input=document.querySelector('input')
input.addEventListener('keydown',onKeyDown)

const divs=document.querySelectorAll('div')
console.log(divs)

function onDivClick(event){
  event.stopPropagation() 
 console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}


for(let div of divs){
  div.addEventListener('click',onDivClick)
}
=======
const main=document.querySelector('main')

function onClick(){
  console.log('i was clicked')
}

main.addEventListener('click',onClick)
>>>>>>> 66c70a8fb75af4b6d2ad80648db2dd5b4410d936
