var scores,roundScore,activePlayer,sum,dice,isGamePlaying,dice0;


    scores=[0,0];
roundScore=0;
activePlayer=0;
sum=0;
isGamePlaying=true;
dice0=0;






//dice=Math.floor(Math.random()*6)+1;
//console.log(dice);

//document.querySelector("#current-"+activePlayer).textContent=dice;
document.querySelector(".dice").style.display='none';
if(isGamePlaying==true){
    
}
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(isGamePlaying){
       dice=Math.floor(Math.random()*6)+1;
      
    document.querySelector('.dice').style.display='block';
    document.querySelector("#current-"+activePlayer).textContent=dice;
       
    document.querySelector('.dice').src='dice-'+dice+'.png';
    
  
    
    if(dice!==1){
       
        scores[activePlayer]+=dice;
        roundScore+=dice;
       // document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    
       document.querySelector('#current-'+activePlayer).textContent=roundScore;
       if(dice*dice0===36)
       {
        scores[activePlayer]=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('#score-'+activePlayer).textContent=0;
        document.querySelector('#current-'+activePlayer).textContent=0;
    
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        dice=0;
       }
       
    dice0=dice;
       
       
    }
    else
    {
        scores[activePlayer]=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('#score-'+activePlayer).textContent=0;
        document.querySelector('#current-'+activePlayer).textContent=0;
    
        activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        dice0=0;
       
        //document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
        
        

    }
    

    }
    
     
    
   

} );
document.querySelector('.btn-new').addEventListener('click',function(){
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
    document.querySelector('#name-'+activePlayer).textContent='Player'+' '+(activePlayer+1);
    scores=[0,0];
    roundScore=0;
    activePlayer=0;
    dice0=0;
    isGamePlaying=true;
    document.querySelector('#score-0').textContent=0;
    document.querySelector('#score-1').textContent=0;
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('.dice').style.display='none';
    
    

});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(scores[activePlayer]>=20)
    {
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer]; 
        document.querySelector('#name-'+activePlayer).textContent='WINNER';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.dice').style.display='none';
        isGamePlaying=false;
    }
    else{
       // scores[activePlayer]+=dice;
        document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

        document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('#current-'+activePlayer).textContent=0;
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    roundScore=0;

    activePlayer===0?activePlayer=1:activePlayer=0;
    }
    

    

});