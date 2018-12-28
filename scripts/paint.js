var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var canvasCenterX = canvas.width / 2
var canvasCenterY = canvas.height / 2
var radius = parseInt($('#radius').val(), 10)
var circlesCount = parseInt($('#circles_count').val(), 10)
var colorChoice = $('#color_choice').val()
var isMouseDown
var mouseX
var mouseY


function drawCircle (params) {
    ctx.fillStyle = params.color
    ctx.beginPath()
    ctx.arc(params.x, params.y, params.radius, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fill()
}

function clearCanvas () {
    //ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function randomBetween (min, max) {
    return min + Math.random() * (max - min)
}

function spray (x, y) {
    for (var i = 0; i < circlesCount; i++) {
        var alpha = randomBetween(0.5, 1)
        drawCircle({
            x: randomBetween(x - 20, x + 20),
            y: randomBetween(y - 20, y + 20),
            radius: randomBetween(radius - radius /2, radius + radius /2),
            color: 'rgba(100, 200, 100,' + alpha + ')'
        })
    }
}

function render () {
    if (isMouseDown) {
        spray(mouseX, mouseY)
        ctx.strokeStyle = colorChoice
        ctx.lineTo(mouseX, mouseY)
        ctx.stroke()
    }
    clearCanvas()
}


//clearCanvas()
spray(10,20)

$(document).on('mousemove', function (event) {
    mouseX = event.clientX
    mouseY = event.clientY
})

$(document).on('mousedown', function (event) {
    isMouseDown = true
    ctx.closePath()
    ctx.beginPath()
})

$(document).on('mouseup', function (event) {
    isMouseDown = false
})

$('#radius').on('input', function () {
    radius = parseInt($(this).val(), 10)
})

$('#circles_count').on('input', function () {
    circlesCount = parseInt($(this).val(), 10)
})

$('#color_choice').on('input', function () {
    colorChoice = $(this).val()
})

setInterval(render, 16)
