'use strict'

const PACMAN = '😷'
var gPacman
var powerFood = 0

function createPacman(board) {
    // DONE: initialize gPacman...
    gPacman = {
        location: {
            i: 2,
            j: 2
        },
        isSuper: false
    }
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN

}

function movePacman(ev) {

    if (!gGame.isOn) return
    // DONE: use getNextLocation(), nextCell
    const nextLocation = getNextLocation(ev.key)
    const nextCell = gBoard[nextLocation.i][nextLocation.j]

    // DONE: return if cannot move
    if (nextCell === WALL) return

    if (nextCell === POWERFOOD) {
        // gPacman.isSuper = true
        if (gPacman.isSuper) return
        updateScore(1)
        gPacman.isSuper = true
        console.log(gPacman.isSuper)
        var ghj = setInterval(gPacman.isSuper = false, 5000)
        console.log(gPacman.isSuper)
        // setTimeout(gPacman.isSuper = false, 5000)
        powerFood += 1

    }

    // DONE: hitting a ghost? call gameOver
    if (nextCell === GHOST) {

        // if (powerFood > 0) {
        //     var po = 2
        //     return
        // }

        gameOver()
        return
    }

    if (nextCell === FOOD) {
        updateScore(1)
    }

    if (nextCell === CHERRY) {
        updateScore(10)
    }


    // DONE: moving from current location:
    // DONE: update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // DONE: update the DOM
    renderCell(gPacman.location, EMPTY)


    // DONE: Move the pacman to new location:
    // DONE: update the model
    gBoard[nextLocation.i][nextLocation.j] = PACMAN
    gPacman.location = nextLocation
    // DONE: update the DOM
    renderCell(nextLocation, PACMAN)
}

function getNextLocation(eventKeyboard) {
    // console.log(eventKeyboard)
    const nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    // DONE: figure out nextLocation
    switch (eventKeyboard) {
        case 'ArrowUp':
            nextLocation.i--
            break;
        case 'ArrowRight':
            nextLocation.j++
            break;
        case 'ArrowDown':
            nextLocation.i++
            break;
        case 'ArrowLeft':
            nextLocation.j--
            break;
    }
    return nextLocation
}