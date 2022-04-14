const $buttonStone1 = document.querySelector('.button-stone-player-1');
const $buttonPaper1 = document.querySelector('.button-paper-player-1');
const $buttonScissors1 = document.querySelector('.button-scissors-player-1');
const $fieldPlayer1 = document.querySelector('.field-player-1');
const $fieldPlayer2 = document.querySelector('.field-player-2');
const $buttonStone2 = document.querySelector('.button-stone-player-2');
const $buttonPaper2 = document.querySelector('.button-paper-player-2');
const $buttonScissors2 = document.querySelector('.button-scissors-player-2');

const $winnerTitle = document.querySelector('.winner_title')

let movePlayer1 = ''
let movePlayer2 = ''
let gameResult = null

function verifyGame(){
    if (movePlayer1 == 'stone' && movePlayer2 == 'paper'){
       gameResult = 2
    } else if (movePlayer1 == 'stone' && movePlayer2 == 'scissors'){
        gameResult = 1
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'stone'){
        gameResult = 1
    } else if (movePlayer1 == 'paper' && movePlayer2 == 'scissors'){
       gameResult = 2
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'stone'){
       gameResult = 2
    } else if (movePlayer1 == 'scissors' && movePlayer2 == 'paper'){
        gameResult = 1
    } else if (movePlayer1 == movePlayer2){
        gameResult = 0
    }
}

function printGameResult(){
    if ( gameResult == 0){
        $winnerTitle.innerHTML = 'Empatou!'
    } else if (gameResult == 1){
        $winnerTitle.innerHTML = 'Jogadora 1 ganhou!'
    } else if (gameResult == 2){
        $winnerTitle.innerHTML = 'Jogadora 2 ganhou!'
    }
}

$buttonStone1.addEventListener("click", function(){
    $fieldPlayer1.innerHTML =
    '<img class="move-image" src="assets/stone.png" alt="mão fechada" title="desenho de uma luvinha direita, na cor branco fechada, com o polegar voltado para cima." />'
    movePlayer1 = 'stone'
    verifyGame()
    printGameResult()
});
$buttonPaper1.addEventListener("click", function(){
    $fieldPlayer1.innerHTML = 
    '<img class="move-image" src="assets/paper.png" alt="mão aberta" title="desenho de uma luvinha direita, na cor branco, polegar voltado para cima e com os dedos esticados e afastados."/>'
    movePlayer1 = 'paper'
    verifyGame()
    printGameResult()
});
$buttonScissors1.addEventListener("click" , function(){
    $fieldPlayer1.innerHTML = 
    '<img class="move-image" src="assets/scissors.png" alt="mão fazendo um dois" title="desenho de uma luvinha direita, na cor  branco, com os dedos indicador e dedo médio esticados, e o restantes encolhidos, formando uma tesoura."/>'
    movePlayer1 = 'scissors'
    verifyGame()
    printGameResult()
});
$buttonStone2.addEventListener("click" , function(){
    $fieldPlayer2.innerHTML =
    '<img class="move-image" src="assets/stone.png" alt="mão fechada" title="desenho de uma luvinha esquerda, na cor branco fechada, com o polegar voltado para cima."/>'
    movePlayer2 = 'stone'
    verifyGame()
    printGameResult()
})
$buttonPaper2.addEventListener("click" , function(){
    $fieldPlayer2.innerHTML =
    '<img class="move-image" src="assets/paper.png" alt="mão aberta" title="desenho de uma luvinha esquerda, na cor branco, polegar voltado para cima e com os dedos esticados e afastados."/>'
    movePlayer2 = 'paper'
    verifyGame()
    printGameResult()
})
$buttonScissors2.addEventListener("click" , function(){
    $fieldPlayer2.innerHTML =
    '<img class="move-image" src="assets/scissors.png" alt="mão fazendo um dois" title="desenho de uma luvinha esquerda, na cor  branco, com os dedos indicador e dedo médio esticados, e o restantes encolhidos, formando uma tesoura."/>'
    movePlayer2 = 'scissors'
    verifyGame()
    printGameResult()
})
