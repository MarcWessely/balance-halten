let Punktx = 2
let Punkty = 2
basic.forever(function () {
    Punktx += Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 5)
    Punkty += Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 5)
    basic.clearScreen()
    led.plot(Punktx, Punkty)
})
