var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

ctx.fillStyle = 'green' //rectangle
ctx.fillRect(200, 200, 100, 100)


//triangle
ctx.fillStyle = 'red'
ctx.strokeStyle = 'green'
ctx.lineWidth = 10
ctx.lineJoin = 'round'
ctx.beginPath()
ctx.moveTo(50, 50)
ctx.lineTo(100, 100)
ctx.lineTo(100, 50)
ctx.lineTo(50, 50)
ctx.closePath()
ctx.stroke()
ctx.fill()

ctx.beginPath() //cercle
ctx.arc(100, 300, 30, 0, 2 * Math.PI)
ctx.stroke()

ctx.fillStyle = 'yellow'
ctx.beginPath()
ctx.arc(200, 400, 60, 0, 2 * Math.PI)
ctx.fill()

ctx.fillStyle = 'black'
ctx.beginPath()
ctx.arc(180, 380, 5, 0, 2 * Math.PI)
ctx.arc(230, 380, 5, 0, 2 * Math.PI)
ctx.fill()
ctx.closePath()
ctx.beginPath()
ctx.arc(200, 420, 30, 0, Math.PI)
ctx.fill()

ctx.fillStyle = 'yellow'
ctx.beginPath()
ctx.arc(380, 380, 60, 0.5 * Math.PI, 1.5 * Math.PI)
ctx.fill()

ctx.clearRect(0, 0, canvas.width, canvas.height) //clear le canvas


function isEven (number) {
    return number % 2 === 0
}
//ctx.fillStyle = 'grey'
ctx.fillRect(50, 0, 50, 50)
for (var y = 0; y < 12; y++) {
    for (var x = 0; x < 6; x++) {
        var offsetBlack = isEven(y) ? 0 : 50
        var offsetGrey = isEven(y) ? 50 : 0
        ctx.fillStyle = 'black'
        ctx.fillRect(offsetBlack + x * 100, y * 50, 50, 50)
        ctx.fillStyle = 'grey'
        ctx.fillRect(offsetGrey + x * 100, y * 50, 50, 50)
    }
}

ctx.clearRect(0, 0, canvas.width, canvas.height) //clear le canvas

for (var y = 0; y < 6; y++) {
    var firstColor = isEven(y) ? 'black' : 'grey'
    var secondColor = isEven(y) ? 'grey' : 'black'
    for (var x = 0; x < 6; x++) {
        ctx.fillStyle = isEven(x) ? firstColor : secondColor
        ctx.fillRect(x * 50, y * 50, 50, 50)
    }
}