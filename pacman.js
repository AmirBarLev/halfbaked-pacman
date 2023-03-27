'use strict'

const PACMAN = '😷'
var gPacman

function createPacman(board) {
    // initialize gPacman...
    gPacman = {
        location: {
            i: 6,
            j: 7
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN
    gGame.gFoodCounter--
}

function movePacman(ev) {
    if (!gGame.isOn) return
    // use getNextLocation(), nextCell

    const nextLocation = getNextLocation(ev)
    if (!nextLocation) return
    // console.log('nextLocation', nextLocation)

    const nextCell = gBoard[nextLocation.i][nextLocation.j]
    // console.log('nextCell', nextCell)

    // return if cannot move
    if (nextCell === WALL) return
    // hitting a ghost? call gameOver
    if (nextCell === GHOST) {
        gameOver()
        return
    }
    if (nextCell === FOOD) {
        gGame.gFoodCounter--
        isVictory()
        updateScore(1)
    }

    // moving from current location:
    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // update the DOM
    renderCell(gPacman.location, EMPTY)

    // Move the pacman to new location:
    // update the model
    gPacman.location = nextLocation
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN
    // update the DOM
    renderCell(gPacman.location, PACMAN)
}

function getNextLocation(eventKeyboard) {
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    // figure out nextLocation
    // console.log('eventKeyboard.key', eventKeyboard.key)
    switch (eventKeyboard.key) {
        case 'ArrowUp':
            nextLocation.i--
            break
        case 'ArrowDown':
            nextLocation.i++
            break
        case 'ArrowLeft':
            nextLocation.j--
            break
        case 'ArrowRight':
            nextLocation.j++
            break
        default: return null
    }
    return nextLocation
}