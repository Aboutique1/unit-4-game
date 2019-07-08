var wins = 0
    var losses = 0 
    
    var randomScore = Math.floor(Math.random() * 100)
    $('#randomScore').html(randomScore)
    var yourScore = 0
    
    $('#yourScore').html(yourScore)




$("#one").on("click", function(){
    yourScore+=1
    $('#yourScore').html(yourScore)
    winChecker()
}) 


$("#ten").on("click", function(){
    yourScore+=10
    $('#yourScore').html(yourScore)
    winChecker()

}) 

$("#fifteen").on("click", function(){
    yourScore+=15
    $('#yourScore').html(yourScore)
    winChecker()

}) 

$("#fifty").on("click", function(){
    yourScore+=50
    $('#yourScore').html(yourScore)
    winChecker()

}) 

function winChecker(){
    console.log('run on click')

    if(randomScore==yourScore){
    $('#youWin').html('You Win!')
     wins +=1
     $('#wins').html(`Wins: ${wins}`)
    console.log('run you won')
     randomScore = Math.floor(Math.random() * 100)
     $('#randomScore').html(randomScore)
     yourScore = 0
     
     $('#yourScore').html(yourScore)
 

    }
    if(yourScore>randomScore){
        $('#youWin').html('You Lose!')
        losses+=1
        $('#losses').html(`Losses: ${losses}`)

    randomScore = Math.floor(Math.random() * 100)
    $('#randomScore').html(randomScore)
    yourScore = 0
    
    $('#yourScore').html(yourScore)

    }
}

