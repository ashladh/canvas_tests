var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var mouseX = 0
var mouseY = 0
var isMouseDown


$(document).on('mousemove', function (event) {
    mouseX = event.clientX
    mouseY = event.clientY
})

$(document).on('mousedown', function (event) {
    isMouseDown = true
})

$(document).on('mouseup', function (event) {
    isMouseDown = false
})

function drawCircle (params) {
    ctx.fillStyle = params.color
    ctx.beginPath()
    ctx.arc(params.x, params.y, params.radius, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fill()
}

function randomBetween (min, max) {
    return min + Math.random() * (max - min)
}

function createRandomCircle () {
    var circle = {
        x: randomBetween(0, canvas.width),
        y: randomBetween(0, canvas.height),
        radius: randomBetween(10, 40),
        color: 'green'
    }
    return circle
}

var randomCircles = []

for (var i = 0; i < 50; i++) {
    randomCircles.push(createRandomCircle())
}

var playerCircle = {
    x: 0,
    y: 0,
    radius: 60,
    color: 'rgba(100, 200, 100, 0.7)'
}


function clearCanvas () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function renderPlayer () {
    drawCircle(playerCircle)
}

function renderRandomCircles () {
    var attraction = isMouseDown ? 1 : -1
    for (var i = 0; i < randomCircles.length; i++) {
        var randomCircle = randomCircles[i]
        if (circleVsCircle(playerCircle, randomCircle)) {
            randomCircle.color = 'red'
            randomCircle.radius = Math.max(0, randomCircle.radius - 0.09)
        }
        else {
            randomCircle.color = 'green'
            randomCircle.radius += 0.02
        }
        var attractionToMouseX = randomCircle.x - playerCircle.x
        var attractionToMouseY = randomCircle.y - playerCircle.y

        randomCircle.x -= attractionToMouseX / 200 * attraction
        randomCircle.y -= attractionToMouseY / 200 * attraction


        //randomCircle.y += randomBetween(0.5, 4)
        //randomCircle.x -= (100 - randomCircle.radius) / 40
        drawCircle(randomCircle)
    }
}

function render () {
    playerCircle.x = mouseX
    playerCircle.y = mouseY
    clearCanvas()
    renderRandomCircles()
    renderPlayer()
}

function circleVsCircle (circle1, circle2) {
    var distX = circle1.x - circle2.x
    var distY = circle1.y - circle2.y
    var distance = Math.sqrt(distX * distX + distY * distY)

    return distance < circle1.radius + circle2.radius
}

//attractionVersSourisX = (cercleX - sourisX)
//attractionVersSourisY = (cercleY - sourisY)


setInterval(render, 16)