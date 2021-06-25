window.addEventListener('load', () => {
    // traer botones
    const button = document.getElementById('crearLinea')
    const buttonCrearArco = document.getElementById('crearArco')
    const buttonCrearCurva = document.getElementById('crearCurva')
    const buttonCrearCurvaBezier = document.querySelector("#crearCurvaBezier")
    // traer el canvas
    const canvas = document.getElementById('canvas')
    // creamos el contexto

    const ctx = canvas.getContext('2d')
    
    // Boton de crear linea
    button.addEventListener('click', () => {
        ctx.clearRect(0,0,200,200)
        ctx.beginPath()
        ctx.moveTo(10,10)
        ctx.lineTo(180,20)
        ctx.moveTo(10,20)
        ctx.lineTo(180,20)
        ctx.lineWidth = 1 //1px
        ctx.strokeStyle = 'red'
        ctx.stroke()
    })

    // Boton de crear arco
    buttonCrearArco.addEventListener('click', () => {
        ctx.clearRect(0,0,200,200)
        ctx.beginPath()
        // los arcos aceptan dos formatos: o radianes o angulos con Math.PI === 3.1415...
        // ANGULOS: Math.PI === 180°
        // RADIANES: (Math.PI / 180) * ANGULO
        // ctx.arc(x,y,r,sa,ea,r) 
        //ctx.arc(70, 70, 50, 0, Math.PI * 1.5, true) // CON ANGULOS
        //ctx.arc(150, 150, 50, 0, (Math.PI / 180) * 270, true)// CON RADIANES
        /**
         * Ejercicio carita feliz con arcos
         */
        ctx.arc(75,75,50,0,Math.PI*2,true)
        ctx.moveTo(110,75)
        ctx.arc(75,75,35,0,Math.PI,false)
        ctx.moveTo(65,65)
        ctx.arc(60,65,5,0,Math.PI*2,true)
        ctx.moveTo(95,65)
        ctx.arc(90,65,5,0,Math.PI*2,true)
        ctx.lineWidth = 3 //3px
        ctx.strokeStyle = 'green'
        ctx.stroke()
        ctx.closePath()
    })

    // Boton de crear curva
    buttonCrearCurva.addEventListener('click', () => {
        ctx.clearRect(0,0,200,200)
        ctx.beginPath()
        ctx.moveTo(50,50)
        ctx.quadraticCurveTo(160,30,200,180)
        ctx.lineWidth = 2 //3px
        ctx.strokeStyle = 'blue'
        ctx.stroke()
        ctx.closePath()
    })

    // Boton de crear curva bezier
    buttonCrearCurvaBezier.addEventListener('click', () => {
        ctx.clearRect(0,0,200,200)
        ctx.beginPath()
        ctx.moveTo(10,110)
        ctx.bezierCurveTo(80,0,120,280,190,90)
        ctx.lineWidth = 1 //1px
        ctx.strokeStyle = 'black'
        ctx.stroke()
        ctx.closePath()
    })
})