modules.rotaryEncoder1.onPositionChanged(function () {
    Pos = Pos + (modules.rotaryEncoder1.position() - Old_Pos)
    Old_Pos = Pos
})
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    basic.showNumber(Pos)
})
let Old_Pos = 0
let Pos = 0
radio.setGroup(55)
Pos = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
