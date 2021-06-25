const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('webgl')
const limpiarCanvas = () => ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
//const btnWebGL = document.querySelector('#crearWebGL')

window.addEventListener('load', () => {
    btnWebGL.addEventListener('click', () => {
        console.log(ctx)
    })
})

