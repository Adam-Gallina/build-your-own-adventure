function LoadElems() {
    var elems = {}

    elems.text = document.getElementById("node-text")

    var btns = document.querySelectorAll('.nodeBtn button')
    for (i = 0; i < btns.length; i++) {
        elems["btn" + i] = btns[i]
        btns[i].addEventListener('click', function(event) {
            var id = event.target.id
    
            var req = new XMLHttpRequest()
            req.open('GET', '/byoa/' + id + '/data')
            req.addEventListener('load', function(event) {
                if (event.target.status != 404) {
                    var data = JSON.parse(event.target.responseText)
                    
                    document.getElementById("story-node").remove()
                    var newPage = Handlebars.templates.storynode(data)
                    document.body.insertAdjacentHTML('afterbegin', newPage)

                    //window.history.replaceState(null, document.title, '/byoa/' + id)
                    window.history.pushState(null, document.title, '/byoa/' + id)

                    LoadElems()
                }
                else {
                    console.log("404: Couldn't retrieve node")
                }
            })
            req.send()
        })
    }
}

LoadElems()