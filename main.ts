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
    // setup
    basic.clearScreen()
    loopCount = 0
    sprite = game.createSprite(0, 0)

    //right
    while (loopCount <= 5) {
        sprite.set(LedSpriteProperty.X, loopCount)
        loopCount = loopCount + 1
        basic.pause(500)
    }

    // down
    loopCount = 0
    while (loopCount <= 5) {
        sprite.set(LedSpriteProperty.Y, loopCount)
        loopCount = loopCount + 1
        basic.pause(500)
    }
    //left
    loopCount = 5
    while (loopCount >= 0) {
        sprite.set(LedSpriteProperty.X, loopCount)
        loopCount = loopCount - 1
        basic.pause(500)
    }
    //up
    loopCount = 5
    while (loopCount >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCount)
        loopCount = loopCount - 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// sends the pixel around the screen counter clockwise
input.onButtonPressed(Button.B, function () {
    // setup
    basic.clearScreen()
    loopCount = 0
    sprite = game.createSprite(0, 0)
    //down
    while (loopCount <= 5) {
        sprite.set(LedSpriteProperty.Y, loopCount)
        loopCount = loopCount + 1
        basic.pause(500)
    }
    //Right
    loopCount = 0
    while (loopCount <= 5) {
        sprite.set(LedSpriteProperty.X, loopCount)
        loopCount = loopCount + 1
        basic.pause(500)
    }
    //up
    loopCount = 5
    while (loopCount >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCount)
        loopCount = loopCount - 1
        basic.pause(500)
    }
    //left
    loopCount = 5
    while (loopCount >= 0) {
        sprite.set(LedSpriteProperty.X, loopCount)
        loopCount = loopCount - 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
