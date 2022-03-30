// JAVASCRIPT DOM

//QUERY AND REMOVE
//const p = document.querySelector('') // this finds the first mactched element
//p.remove()

//QUERY ALL AND REMOVE

const p = document.querySelectorAll('p')
p.forEach(function(p) {
    p.textContent = '*****'
    //console.log(p.textContent)
    //p.remove()
});