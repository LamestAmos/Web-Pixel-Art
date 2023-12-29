// *Variables
const boxInput = document.querySelector("#box-input")
const makeBtn = document.querySelector(".make-btn")
const playArea = document.querySelector(".play-area")
const deleteBtn = document.querySelector(".delete-btn")
const editBtn = document.querySelector('.edit-btn')
const highlightedBoxes = document.getElementsByClassName('box-highlight')

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
    if (highlightedBoxes.length) editBtn.disabled = false
    else editBtn.disabled = true
}) 
}

// TODO Add more Utility
function editBox(color){
        [...highlightedBoxes].forEach(highlightedBox => {
            highlightedBox.style.backgroundColor = color
            highlightedBox.classList.remove('box-highlight')
        });
        editBtn.disabled = true
}
function deleteBox(){}

function deleteBoxes(){
    playArea.innerHTML = ''
}

// *Event Handlers
makeBtn.addEventListener('click', () => {makeBox(boxInput.value)})
deleteBtn.addEventListener('click', () => {deleteBoxes()})
editBtn.addEventListener('click', () => {editBox(boxInput.value)})


