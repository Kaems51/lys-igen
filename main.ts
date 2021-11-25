input.onButtonPressed(Button.A, function () {
    skift = randint(24, 48)
    skift += 5 * 24
    Pause = 0
})
input.onButtonPressed(Button.AB, function () {
    Retning = 0
})
input.onButtonPressed(Button.B, function () {
    Retning = 1
})
let Pause = 0
let skift = 0
let Retning = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
strip.show()
Retning = 1
basic.forever(function () {
    if (0 < skift) {
        strip.rotate(Retning)
        strip.show()
        skift += -1
        if (skift < 24) {
            basic.pause(Pause)
            Pause += 50
        }
    } else {
        strip.rotate(Retning)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
