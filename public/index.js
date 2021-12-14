function getBtnCallback(btnId) {
    return function(event) {
        console.log("Clicked: " + btnId)
    }
}

var btns = document.querySelectorAll('.nodeBtn button')
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', getBtnCallback(btns[i].id))
}