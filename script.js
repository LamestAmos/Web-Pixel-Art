// *Variables
const app = document.querySelector('.app')
const boxInput = document.querySelector("#box-input")
const playArea = document.querySelector(".play-area")
const resetBtn = document.querySelector(".reset-btn")
const deleteBtn = document.querySelector(".delete-btn")
const editBtn = document.querySelector('.edit-btn')
const highlightedBoxes = document.getElementsByClassName('box-highlight')
const boxes = document.getElementsByClassName('box-animate')
const preview = document.querySelector('.preview')
const previewBtn = document.querySelector('.preview-btn')
const imageArea = document.querySelector('.image-area')
const backBtn = document.querySelector('.back-btn')
const pixels = playArea.dataset.pixels

// *Functions
function makeBox(color){
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

function editBox(color){
        [...highlightedBoxes].forEach(highlightedBox => {
            highlightedBox.style.backgroundColor = color
            highlightedBox.classList.remove('box-highlight')
        });
}
function deleteBox(){
    [...highlightedBoxes].forEach(highlightedBox =>{
        highlightedBox.style.backgroundColor = 'white'
        highlightedBox.classList.remove('box-highlight')
    })
}

function resetBoxes(){
    for (let i = 0; i < pixels; i++){
        makeBox('white')
    }
}
function removeBorder(){
    [...boxes].forEach(box =>{
        box.classList.add('no-border')
    })
}

function addBorder(){
    [...boxes].forEach(box => {
        box.classList.remove('no-border')
    })
}

// *Event Handlers
resetBoxes()
resetBtn.addEventListener('click', () => {
    playArea.innerHTML = ''
    resetBoxes()
})


backBtn.addEventListener('click', () => {
    preview.style.display = 'none'
    app.style.display = 'flex' 
    playArea.style.border = '5px solid black'
    addBorder()
})

editBtn.addEventListener('click', () => {editBox(boxInput.value)})
deleteBtn.addEventListener('click', () => {deleteBox()})

