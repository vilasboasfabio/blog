function passar() {
    var destaque1 = window.document.querySelector('section#principal1')
    destaque1.style.backgroundColor = '#5c5757'
    destaque1.style.outline = 'double whitesmoke'
    destaque1.style.transition = '1s'
}

function sair() {
    var destaque1 = window.document.querySelector('section#principal1')
    destaque1.style.backgroundColor = 'black'
    destaque1.style.outline = 'none'
    destaque1.style.transition = '1s'
}