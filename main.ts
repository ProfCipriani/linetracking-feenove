function LineTracking22 () {
    trackingValues = Rover.LineTracking()
    if (trackingValues == 2 || trackingValues == 5) {
        Rover.setALLRGB(Rover.colors(RoverColors.Green))
        Rover.Move(trackingSpeed)
    } else if (trackingValues == 4 || trackingValues == 6) {
        Rover.setALLRGB(Rover.colors(RoverColors.Red))
        Rover.MotorRunDual(speedSlowSide, speedFastSide)
    } else if (trackingValues == 1 || trackingValues == 3) {
        Rover.setALLRGB(Rover.colors(RoverColors.Blue))
        Rover.MotorRunDual(speedFastSide, speedSlowSide)
    } else {
        Rover.setALLRGB(Rover.showColor(0xff00ff))
        Rover.MotorStopAll(MotorActions.Stop)
        pianino = trackingSpeed / 3
        Rover.Move(pianino)
    }
}
let pianino = 0
let trackingValues = 0
let speedFastSide = 0
let speedSlowSide = 0
let trackingSpeed = 0
basic.showIcon(IconNames.Happy)
trackingSpeed = 150
speedSlowSide = 25
speedFastSide = 100
basic.forever(function () {
    LineTracking22()
})
