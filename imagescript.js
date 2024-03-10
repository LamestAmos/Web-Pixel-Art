previewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    try {
        preview.style.display = 'flex'
        imageArea.innerHTML = ''
        playArea.style.border = 'none'
        removeBorder()
        html2canvas(document.querySelector(".play-area")).then((canvas) => {
            imageArea.appendChild(canvas);
            });
            app.style.display = 'none' 
    } catch (ReferenceError) {
        window.alert("No Connection")
        preview.style.display = 'none'
        playArea.style.border = '5px solid black'
        app.style.display = 'flex'
        addBorder()
    } 
})


