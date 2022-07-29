modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
})
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    basic.showNumber(modules.rotaryEncoder1.position())
})
