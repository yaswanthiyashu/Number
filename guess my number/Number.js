let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.para2').textContent = message;
}


document.querySelector('.btn2').addEventListener('click', function(){
    const number = Number(document.querySelector('.input').value);
    console.log(number);

    if(!number){
        displayMessage("No Number!")
    } else if(number === secretNumber){
        displayMessage("Correct Number!")
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "lightpink";
        document.querySelector('.number').style.width = "140px";

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore2').textContent = highscore
        }
    } else if(number !== secretNumber) {
        if(score > 1){
            // document.querySelector('.para2').textContent = number > secretNumber ? "Too High!" : "Too Low!"
            displayMessage(number > secretNumber ? "Too High!" : "Too Low!")
            score--;
            document.querySelector('.score2').textContent = score;
        } else {
            displayMessage("You Lost The Game!")
        }
        
    } 
    document.querySelector('.btn1').addEventListener('click', function(){
        score = 20;
        document.querySelector('.number').textContent = "?";
        secretNumber = Math.trunc((Math.random()*20)+1);
        document.querySelector('.input').value = "";
        displayMessage("Start Guessing...")
        document.querySelector('.score2').textContent = score;
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('.number').style.width = "70px";
    })
})
        