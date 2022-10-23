let i = 0
basic.showLeds(`
    . . . . #
    . # . # .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    i = 0
    for (let index = 0; index < 10; index++) {
        basic.showNumber(i)
        i += 1
        basic.pause(100)
    }
})
