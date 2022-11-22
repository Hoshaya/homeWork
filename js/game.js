'use strict'

const WALL = '#'
const FOOD = '.'
const POWERFOOD = '@'
const EMPTY = ' '
const CHERRY = '🍒'
var gIntervalCherry
const gGame = {
    score: 0,
    isOn: false
}
console.log(gGame.score)
var gBoard

var point = 60






function onInit() {
    console.log('hello')
    gBoard = buildBoard()
    createGhosts(gBoard)
    createPacman(gBoard)
    renderBoard(gBoard, '.board-container')
    gIntervalCherry = setInterval(addCherry, 15000)








    gGame.isOn = true
}

function buildBoard() {
    const size = 10
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i][j] = FOOD

            if (i === 1 && (j === 1 || j === 8) || i === 8 && (j === 1 || j === 8)) {
                board[i][j] = POWERFOOD

            }


            if (i === 0 || i === size - 1 ||
                j === 0 || j === size - 1 ||
                (j === 3 && i > 4 && i < size - 2)) {
                board[i][j] = WALL
            }
        }

        // console.log(board)

    }
    return board
}

function getEmptyCell() {
    var emptyPositions = []

    for (var i = 0; i < 10; i++) {

        for (var j = 0; j < 10; j++) {
            var corrCell = gBoard[i][j]
            if (corrCell === EMPTY) {
                emptyPositions.push({ i: i, j: j })


            }

        }
    }

    return emptyPositions

}

function addCherry() {
    var nums = getEmptyCell()
    var randomNum = getRandomIntInclusive(0, nums.length - 1)
    var randomEmptyCell = nums[randomNum]

    gBoard[randomEmptyCell.i][randomEmptyCell.j] = CHERRY
    renderCell(randomEmptyCell, CHERRY)
    point += 10




}


function updateScore(diff) {
    // TODO: update model and dom
    // Model
    gGame.score += diff
    // DOM
    point -= diff

    document.querySelector('h2 span').innerText = gGame.score
    winGame()

}

function gameOver() {
    console.log('Game Over')
    // TODO
    clearInterval(gIntervalGhosts)
    clearInterval(gIntervalCherry)
    gGame.isOn = false
    renderCell(gPacman.location, '👹')

    var elBoard = document.querySelector('.bord-play')
    elBoard.style.display = 'none'
    var elLoss = document.querySelector('.loss-modal')
    elLoss.style.display = 'block'
    gGhosts = []


}


function winGame() {
    console.log(gGame.score)
    if (point === 0) {
        console.log('you won')
        // TODO
        clearInterval(gIntervalGhosts)
        clearInterval(gIntervalCherry)
        gGame.isOn = false
        renderCell(gPacman.location, '😍')
        var elBoard = document.querySelector('.bord-play')
        elBoard.style.display = 'none'
        var elWon = document.querySelector('.win-modal')
        elWon.style.display = 'block'
        gGhosts = []






    }

}

function restartGame() {
    onInit()


    gGame.score = 0

    var elBoard = document.querySelector('.bord-play')
    elBoard.style.display = 'block'
    var elLoss = document.querySelector('.loss-modal')
    elLoss.style.display = 'none'
    var elWon = document.querySelector('.win-modal')
    elWon.style.display = 'none'



}


