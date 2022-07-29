modules.rotaryEncoder1.onPositionChanged(function () {
    Pos = Pos + (modules.rotaryEncoder1.position() - Old_Pos)
    Old_Pos = Pos
})
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showNumber(Pos)
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1000, 999, 255, 0, 471, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    radio.sendNumber(Pos)
})
let Old_Pos = 0
let Pos = 0
radio.setGroup(55)
Pos = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
