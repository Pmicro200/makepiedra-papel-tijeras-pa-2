let mi_jugadinha = 0
input.onGesture(Gesture.Shake, function () {
    mi_jugadinha = randint(1, 3)
    if (mi_jugadinha == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            `)
    } else if (mi_jugadinha == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (false) {
    	
    }
})
basic.forever(function () {
	
})
