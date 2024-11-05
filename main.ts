/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Nov 2024
 * This program moves a pixel around a screen
*/

let sprite: game.LedSprite = null
let loopCount = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// sends the pixel around the screen clockwise
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    loopCount = 0
    sprite = game.createSprite(0, 0)
    while (loopCount <= 5) {
    basic.pause(500)
    loopCount + 1
    sprite.move(1)
        while (loopCount >= 5) {
            sprite.turn(Direction.Right, 90)
            loopCount = 0
            basic.pause(500)
        }
    }
})

input.onButtonPressed(Button.B, function () {
    basic.showNumber(loopCount)
})