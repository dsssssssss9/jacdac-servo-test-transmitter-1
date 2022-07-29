modules.rotaryEncoder1.onPositionChanged(function () {
    Pos = Old_Pos - (Old_Rot - modules.rotaryEncoder1.position())
    Old_Pos = Pos
    Old_Rot = modules.rotaryEncoder1.position()
})
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showNumber(Pos)
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1000, 999, 255, 0, 471, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    radio.sendNumber(Pos)
})
let Old_Rot = 0
let Old_Pos = 0
let Pos = 0
radio.setGroup(55)
Pos = 90
Old_Pos = Pos
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
