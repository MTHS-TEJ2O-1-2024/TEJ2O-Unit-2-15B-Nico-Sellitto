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


    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

