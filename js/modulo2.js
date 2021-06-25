window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas')
    const btnCrearGrilla = document.getElementById('crearGrilla')
    const btnCrearEvento = document.getElementById('crearEvento')
    const btnDibujar = document.getElementById('dibujar')
    const btnEmbImage = document.getElementById('embeberImagen')
    const btnTexto = document.getElementById('texto')
    const btnLimpiarCanvas = document.getElementById('limpiarCanvas')
    const ctx = canvas.getContext('2d')

    btnCrearGrilla.addEventListener('click', () => {
        let distX, distY;
        distX = distY = 20;
        let lineColor = 'red'
        let lineWidth = .5

        for (let i = distX + lineWidth; i < ctx.canvas.width; i += distX) {
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i, ctx.canvas.height)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = lineWidth
            ctx.stroke()
            ctx.closePath()
        }

        for (let i = distY + lineWidth; i < ctx.canvas.height; i += distY) {
            ctx.beginPath()
            ctx.moveTo(0, i)
            ctx.lineTo(ctx.canvas.width, i)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = lineWidth
            ctx.stroke()
            ctx.closePath()
        }
    })

    btnCrearEvento.addEventListener('click', () => {
        canvas.addEventListener('mousemove', e => {
            const realPosition = canvas.getBoundingClientRect()
            let x = e.clientX - realPosition.left
            let y = e.clientY - realPosition.top
            //console.log(x,y)
        })
    })

    var initialPosition = {}
    var finalPosition = {}
    btnDibujar.addEventListener('click', () => {
        // Adding the mousemove event
        canvas.addEventListener('mousemove', e => {
            const realPosition = canvas.getBoundingClientRect()
            let x = e.clientX - realPosition.left
            let y = e.clientY - realPosition.top
            initialPosition = {
                x: 0,
                y: 0
            };
            finalPosition = {
                x,
                y
            };
            ctx.beginPath()
            ctx.moveTo(initialPosition.x, initialPosition.y)
            ctx.lineTo(finalPosition.x, finalPosition.y)
            ctx.stroke()
        })


        /* canvas.addEventListener('mousedown', e => {
            const realPosition = canvas.getBoundingClientRect()
            let x = e.clientX - realPosition.left
            let y = e.clientY - realPosition.top
            initialPosition = {
                x,
                y
            };
        })

        canvas.addEventListener('mouseup', e => {
            const realPosition = canvas.getBoundingClientRect()
            let x = e.clientX - realPosition.left
            let y = e.clientY - realPosition.top
            finalPosition = {
                x,
                y
            };
            ctx.beginPath()
            ctx.moveTo(initialPosition.x, initialPosition.y)
            ctx.lineTo(finalPosition.x, finalPosition.y)
            ctx.strokeStyle = 'green'
            ctx.lineWidth = 1
            ctx.stroke()
        }) */
    })

    // boton Crear imagen
    btnEmbImage.addEventListener('click', () => {
        const image = new Image(400,400)
        image.src = 'https://s1.eestatic.com/2019/08/02/actualidad/Actualidad_418469879_131481155_854x640.jpg'
        image.onload = () => {
            ctx.drawImage(image,0,0,400,400)
        }
    })

    btnTexto.addEventListener('click', () => {
        ctx.clearRect(0,0,canvas.width,canvas.height)
        ctx.font = '20px Arial'
        ctx.fillText('Texto con canvas', 10, 50)
    })

    btnLimpiarCanvas.onclick = () => {
        ctx.clearRect(0,0,canvas.width,canvas.height)
    }
})