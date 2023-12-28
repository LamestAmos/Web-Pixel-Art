// *Variables
const boxInput = document.querySelector("#box-input")
const makeBtn = document.querySelector(".make-btn")
const playArea = document.querySelector(".play-area")
const deleteBtn = document.querySelector(".delete-btn")

// *Functions
function makeBox(color){
    if (playArea.childElementCount === 72) return
    box = document.createElement('span')
    box.style.backgroundColor = color
    box.classList.add('box-animate')
    playArea.appendChild(box)
    highlightBox(box)
} 

function highlightBox(box){
    box.addEventListener('click', () => {
    box.classList.toggle('box-highlight')
}) 
}

// TODO Add more Utility
function moveBox(){}
function editBox(){}
function deleteBox(){}

function deleteBoxes(){
    playArea.innerHTML = ''
}

// *Event Handlers
makeBtn.addEventListener('click', () => {makeBox(boxInput.value)})
deleteBtn.addEventListener('click', () => {deleteBoxes()})
