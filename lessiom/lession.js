let cartquantity =0;
let number = 0;
true;
false;
console.log(3<5);
function getRandomNum(){
    let copNum = Math.random();
    let computerMove = '';
    if(copNum > 0 && copNum < 1/3){
        computerMove = 'rock';
    }else if(copNum > 1/3 && copNum < 2/3){
        computerMove = 'paper';
    }else if(copNum > 2/3 && copNum < 1){
        computerMove = 'scissor';
    }
    return computerMove;
}
console.log(getRandomNum());

function pickResult(pickChoice){
    let thm = localStorage.getItem('score')
console.log(thm);
let score = JSON.parse(thm) 
if(!score){
    score = {
        win:0,
        loss:0,
        tie:0
        
    }
}
    let result = '';
    let outPut = getRandomNum();
    if(pickChoice === 'rock'){
    
        if(outPut === 'rock'){
            result = 'tie';
        }else if(outPut === 'paper'){
            result = 'you lose';
        }else if( outPut === 'scissor'){
            result = 'you win';
        }
        
        
    }
    
    else if(pickChoice==='paper'){
        if(outPut === 'paper'){
            result = 'tie';
        }else if(outPut === 'scissor'){
            result = 'you lose';
        }else if( outPut === 'rock'){
            result = 'you win';
        }
        
    }else if(pickChoice === 'scissor'){
        if(outPut === 'scissor'){
            result = 'tie';
        }else if(outPut === 'paper'){
            result = 'you lose';
        }else if( outPut ===  'rock'){
                    result = 'you win';
                }
                
            }
            if(result === 'you win'){
                score.win += 1;
            }else if(result === 'you lose'){
                score.loss += 1;
            }else if(result === 'tie'){
                score.tie += 1;
            }
            let springScore = JSON.stringify(score);
            console.log(springScore);
            localStorage.setItem('score',springScore);
            alert(`you picked ${pickChoice} and computer picked ${outPut} so ${result}
                win ${score.win} lose ${score.loss} tie ${score.tie}`);
            
            }
            function reSet(){
                
                localStorage.removeItem('score')
            }
            
        