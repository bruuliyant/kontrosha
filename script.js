let doc = document

let inout = doc.querySelectorAll('input')
let requered = doc.querySelectorAll('.required')
let form = doc.querySelector('form')
let text_requered = doc.querySelectorAll('.text')
let twelwe = doc.querySelector('.twelwe').innerHTML
let six = doc.querySelector('.six').innerHTML
let nol = doc.querySelector('.nol').innerHTML
let error_nol = doc.querySelector('.error_nol').innerHTML

form.addEventListener('submit', (event) => {
    event.preventDefault()
    for (let item of requered) {
        for (let item2 of text_requered) {
            if (item.value == '') {
                item.classList.toggle('requered_active')
                item2.classList.toggle('required_active')
            }
            for (let item3 of inout) {
                if (item3.value !== '') {
                    twelwe = twelwe - 1
                    six = six - 1
                    nol = nol + 1
                    error_nol = error_nol - 1
                }
            }
        }
    }
})

console.log(requered);
console.log(inout);
console.log(twelwe);
console.log(six);
console.log(nol);
console.log(error_nol);
