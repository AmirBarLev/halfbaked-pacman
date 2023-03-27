'use strict'

const WALL = '#'
const FOOD = '.'
const EMPTY = ' '



const gGame = {
    score: 0,
    isOn: false,
    gFoodCounter: 0,
}

var gBoard

function init() {
    // console.log('hello')

    gBoard = buildBoard()
    createPacman(gBoard)
    createGhosts(gBoard) 
    // ghostasndlkasjdklasjdlkasdjlkasdjlaskdj

    renderBoard(gBoard, '.board-container')
    gGame.isOn = true
}

function buildBoard() {
    const size = 10
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])

        for (var j = 0; j < size; j++) {
            board[i][j] = FOOD
            gGame.gFoodCounter++

            if (i === 0 || i === size - 1 ||
                j === 0 || j === size - 1 ||
                (j === 3 && i > 4 && i < size - 2)) {
                board[i][j] = WALL
                gGame.gFoodCounter--
            }
        }
    }
    // console.log('board', board)
    return board
}

function updateScore(diff) {
    // update model 
    gGame.score += diff
    // update dom
    document.querySelector('h2 span').innerText = gGame.score
    
}

function gameOver() {
    console.log('Game Over')
    gGame.isOn = false
    isVictory()
    gameOverScr()
    renderCell(gPacman.location, EMPTY)
    clearInterval(gIntervalGhosts)
}

function resetGame() {
    var gameOverScreen = document.querySelector('.gameover-container')
    gameOverScreen.hidden = true
    gGame.score = 0
    document.querySelector('h2 span').innerText = gGame.score
    init()



}

function gameOverScr() {
    var gameOverScreen = document.querySelector('.gameover-container')
    gameOverScreen.hidden = false
    // isVictory()

}

function isVictory() {
    if(gGame.gFoodCounter === 2) {
       var winMsg = document.querySelector('.victory-screen')
       winMsg.hidden = false 

        
        
    }

}
   
