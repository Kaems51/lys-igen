input.onButtonPressed(Button.A, function () {
    skift = randint(24, 48)
    skift += 5 * 24
    retning = 1
})
input.onButtonPressed(Button.AB, function () {
    retning = 0
})
input.onButtonPressed(Button.B, function () {
    retning = -1
})
let pause2 = 0
let skift = 0
let retning = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.show()
retning = 1
basic.forever(function () {
    if (0 < skift) {
        strip.rotate(retning)
        strip.show()
        skift += -1
        if (skift == 24) {
            basic.pause(pause2)
            pause2 += 100
        } else {
            if (skift == 18) {
                basic.pause(pause2)
                pause2 += 300
            } else {
                if (skift == 12) {
                    basic.pause(pause2)
                    pause2 += 500
                } else {
                    if (skift == 6) {
                        basic.pause(pause2)
                        pause2 += 700
                    } else {
                        if (skift == 3) {
                            basic.pause(pause2)
                            pause2 += 900
                        }
                    }
                }
            }
        }
    } else {
        strip.rotate(retning)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Orange))
        strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Indigo))
        strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Indigo))
        strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Indigo))
        strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Violet))
        strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Violet))
        strip.setPixelColor(21, neopixel.colors(NeoPixelColors.Violet))
        strip.setPixelColor(22, neopixel.colors(NeoPixelColors.Purple))
        strip.setPixelColor(23, neopixel.colors(NeoPixelColors.Purple))
        strip.setPixelColor(24, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
    }
})
