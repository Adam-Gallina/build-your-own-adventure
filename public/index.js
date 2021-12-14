// Test functions for proof of concept
function LoadElems() {
    var elems = {}

    elems.text = document.getElementById("node-text")

    var btns = document.querySelectorAll('.nodeBtn button')
    for (i = 0; i < btns.length; i++) {
        elems["btn" + i] = btns[i]
        btns[i].addEventListener('click', getBtnCallback(btns[i].id))
    }

    return elems
}

function RenderPage(elems, text, btnData) {
    elems.text.innerHTML = text
    for (i = 0; i < btnData.length; i++) {
        elems["btn" + i].id = btnData[i].btnId
        elems["btn" + i].innerHTML = btnData[i].btnText
    }
}

// @TODO: function is exposed to client, can change pages w/o interacting with buttons
//      - could potentially change to a page outside of the current branch
function getBtnCallback(btnId) {
    return function(event) {
        var id = event.target.id

        var req = new XMLHttpRequest()
        req.open('GET', '/byoa/' + id)
        req.addEventListener('load', function(event) {
            if (event.target.status != 404) {
                var data = JSON.parse(event.target.responseText)
                RenderPage(elems, data.text, data.buttons)
            }
        })
        req.send()
    }
}

elems = LoadElems()