var $buttonStone1 = document.querySelector('.button-stone-1')
var $buttonpaper1 = document.querySelector('.button-paper-1')
var $buttonscissors1 = document.querySelector('.button-scissors-1')

var $buttonStone2 = document.querySelector('.button-stone-2')
var $buttonpaper2 = document.querySelector('.button-paper-2')
var $buttonscissors2 = document.querySelector('.button-scissors-2')


var $fieldPlayer1 = document.querySelector('.field-1')
var $fieldPlayer2 = document.querySelector('.field-2')



console.log($fieldPlayer1)
console.log($fieldPlayer2)

$buttonStone1.addEventListener('click', function(){
   $fieldPlayer1.innerHTML= '<img class="image-move" src="./images/stone.png" img>'
    })
    
    $buttonStone2.addEventListener('click', function(){
        $fieldPlayer2.innerHTML= '<img class="image-move" src="./images/stone.png" img>'
         })

   
         $buttonpaper1.addEventListener('click', function(){
        $fieldPlayer1.innerHTML= '<img class="image-move" src="./images/paper.png" img>'
    })

    $buttonpaper2.addEventListener('click', function(){
        $fieldPlayer2.innerHTML= '<img class="image-move" src="./images/paper.png" img>'
    })

    $buttonscissors1.addEventListener('click', function(){
        $fieldPlayer1.innerHTML= '<img class="image-move" src="./images/scissors.png" img>'
    })
     
    $buttonscissors2.addEventListener('click', function(){
        $fieldPlayer2.innerHTML= '<img class="image-move" src="./images/scissors.png" img>'
    })