let width = document.querySelector('.width')
let border = document.querySelectorAll('.border')
// let colorbtn = document.querySelector('.colors')
let colorset = document.querySelector('.colors11')
let block = document.querySelectorAll('.block')
let colors = ['red', 'black', 'green', 'cyan', 'yellow']

// colorbtn.addEventListener('click', () =>{
//     colorset.style.opacity = '1'
//     colorset.style.visibility = 'visible'
//     colorset.style.transition = '1s ease-in'
// })


width.addEventListener('click', () =>{
    let widthes = [200, 220, 250, 300, 400, 500]
    for (let i = 0; i < widthes.length; i++) {
        let math = Math.floor(Math.random() * i)
        block.style.width = `${math}px`
    }
})

border.addEventListener('click', () =>{
    for (let i = 0; i < colors.length; i++) {
        let rnd = Math.floor(Math.random() * i)  
        block.style.border = `3px solid ${rnd}`
    }
})