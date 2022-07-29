// Display current angle on Micro:Bit when rotary button pushed down
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showNumber(Pos)
})
// When rotary encoder is moved calculate how many clicks it has moved & in which direction - now add this to the Pos variable . This gives us the desired angle of the Servo
// 
// *******
// PLEASE NOTE ROTATING THE ROTARY ENCODER TOO QUICKLY CAN MEAN IT MISSES CLICKS SO THE POSITION VALUE MAY NOT BE ACCURATE!
// **********
modules.rotaryEncoder1.onPositionChanged(function () {
    Pos = Old_Pos - (Old_Rot - modules.rotaryEncoder1.position())
    Old_Pos = Pos
    Old_Rot = modules.rotaryEncoder1.position()
})
// When Jacdac button pushed down play a tune & send value of Pos variable via radio
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1000, 999, 255, 0, 471, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    radio.sendNumber(Pos)
})
// Variable "Pos" is the required angle of servo - here starting at 90 as this is the center posistion of the servo - range from 0 to 180
// 
let Old_Rot = 0
let Old_Pos = 0
let Pos = 0
radio.setGroup(55)
Pos = 90
Old_Pos = Pos
basic.showIcon(IconNames.Yes)
