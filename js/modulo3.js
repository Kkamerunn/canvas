const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const limpiarCanvas = () => ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
const btnCreateRect = document.getElementById('crearRectangulo')
const btnCreateAni = document.getElementById('crearAnimacion')
var topDistance = 100
var leftDistance = 10
const collision = x => {return (x + 100) > 150}
var isGameOver = false

window.addEventListener('load', () => {
    btnCreateRect.addEventListener('click', () => {
        limpiarCanvas()

        ctx.fillStyle = 'blue'
        ctx.fillRect(10,50,170,100)

        ctx.fillStyle = 'green'
        ctx.fillRect(190,50,170,100)
    })

    btnCreateAni.addEventListener('click', () => {
        const imageEarth = new Image()
        imageEarth.src = 'https://images.pexels.com/photos/45208/world-earth-planet-globe-45208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        // Hay que cambiar la imagen para que se vea mejor

        const imageMoon = new Image()
        imageMoon.src = 'https://images.theconversation.com/files/152548/original/image-20170112-16521-5iwg58.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
        // Hay que cambiar la imagen para que se vea mejor

        const imageSun = new Image()
        imageSun.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/220px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg'
        // Hay que cambiar la imagen para que se vea mejor

        function drawSolarSystem() {
            ctx.globalCompositeOperation = 'destination-over'
            limpiarCanvas()
            ctx.fillStyle = 'rgba(0,0,0,.4)'
            ctx.strokeStyle = 'rgba(0,153,255,.4)'
            ctx.save()
            ctx.translate(150,150)

            // Tierra
            var time = new Date()
            ctx.rotate( (2*Math.PI/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() )
            ctx.translate(105,0)
            ctx.fillRect(0,-12,50,24)
            ctx.drawImage(imageEarth,-12,-12)

            // La luna
            ctx.save()
            ctx.rotate( (2*Math.PI/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() )
            ctx.translate(0,28,5)
            ctx.drawImage(imageMoon,-3.5,-3.5)
            ctx.restore() //inicial
            ctx.restore() //la luna

            ctx.beginPath()
            ctx.arc(150,150,105,0,Math.PI*2,false)
            ctx.stroke()
            ctx.drawImage(imageSun,0,0,canvas.clientWidth,canvas.clientHeight)

            window.requestAnimationFrame(drawSolarSystem)
        }

        window.requestAnimationFrame(drawSolarSystem)
    })

    window.addEventListener('keyup', e => {
        if (!isGameOver) {
            let valTecla = e.code
            limpiarCanvas()
            ctx.fillStyle = 'red'
            // test
            if (valTecla === 'ArrowUp') {
                topDistance -= 1
            } else if (valTecla === 'ArrowRight') {
                leftDistance += 1
            } else if (valTecla === 'ArrowDown') {
                topDistance += 1
            } else if (valTecla === 'ArrowLeft') {
                leftDistance -= 1
            }

            ctx.fillRect(leftDistance,topDistance,170,100)
            if (collision(leftDistance)) {
                isGameOver = true
                const imageGameOver = new Image()
                imageGameOver.src = 'https://image.freepik.com/vector-gratis/fondo-game-over-distorision_23-2148083448.jpg'
                imageGameOver.onload = () => {
                    limpiarCanvas()
                    ctx.drawImage(imageGameOver,0,0,canvas.clientWidth,canvas.clientHeight)
                }
            }

            ctx.fillStyle = 'green'
            ctx.fillRect(190,50,170,100)
        }
        
    })

})

