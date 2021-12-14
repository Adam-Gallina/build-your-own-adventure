// @TODO: function is exposed to client, can change pages w/o interacting with buttons
//      - could potentially change to a page outside of the current branch
function getBtnCallback(btnId) {
    return function(event) {
        console.log("Clicked: " + btnId)

        var req = new XMLHttpRequest()
        req.open('GET', '/byoa/' + btnId)
        req.addEventListener('load', function(event) {
            console.log(event.target.status + ": " + event.target.response)
        })
        req.send()
    }
}

var btns = document.querySelectorAll('.nodeBtn button')
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', getBtnCallback(btns[i].id))
}