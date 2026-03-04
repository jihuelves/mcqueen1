input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Chase), music.PlaybackMode.UntilDone)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 125)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(500)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 125)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 125)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
})
basic.forever(function () {
	
})
