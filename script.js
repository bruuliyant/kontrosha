let doc = document

let text = doc.querySelector('.sasas')
let tex = doc.querySelector('.ssas')
let tet = doc.querySelector('.saasas')
let txt = doc.querySelector('.sasaas')
let xt = doc.querySelector('.saasaas')
let tx = doc.querySelector('.sassas')
let texta = doc.querySelector('.s')
let txrt = doc.querySelector('.sasssaas')
let forma = doc.querySelector('form')
let wa = doc.querySelector('.wa')
let waw = doc.querySelector('.waw')
let wawa = doc.querySelector('.wawa')
let wawaw = doc.querySelector('.wawaw')
let wawawa = doc.querySelector('.wawawa')
let wawawaw = doc.querySelector('.wawawaw')
let wawawawa = doc.querySelector('.wawawawa')
let p = doc.querySelector('.nol')

forma.addEventListener('submit', (event) => {
    event.preventDefault()
    if (text.value == '') {
        text.classList.toggle('a')
        wa.classList.toggle('aa')
        waw.classList.toggle('aa')
        wawa.classList.toggle('aa')
        wawaw.classList.toggle('aa')
        wawawa.classList.toggle('aa')
        wawawaw.classList.toggle('aa')
        wawawawa.classList.toggle('aa')
    }
    if (tet.value == '') {
        tet.classList.toggle('a')
    }
    if (txt.value == '') {
        txt.classList.toggle('a')
    }
    if (texta.value == '') {
        texta.classList.toggle('a')
    }
    if (xt.value == '') {
        xt.classList.toggle('a')
    }
    if (tx.value == '') {
        tx.classList.toggle('a')
    }
    if (txrt.value == '') {
        txrt.classList.toggle('a')
    }
})