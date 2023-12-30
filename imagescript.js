previewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    preview.style.display = 'flex'
    imageArea.innerHTML = ''
    playArea.style.border = 'none'
    removeBorder()
    html2canvas(document.querySelector(".play-area")).then((canvas) => {
        imageArea.appendChild(canvas);
        });
        app.style.display = 'none' 
})


