var scores,activePlayer,roundScore,dice;
scores=[0,0];
activePlayer=0;
dice=Math.floor(Math.random()*6)+1;
document.querySelector('#current'+activePlayer).textContent=dice;
document.querySelector('.dice').style.display='none;'