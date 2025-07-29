//DICE ROLLER PROGRAM
function rolldice(){
  const noofdice = document.getElementById("noofdice").value;
  const diceresult = document.getElementById("diceresult");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const images =[];

  for(let i =0; i < noofdice; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="Dice_Images/${value}.svg" alt="Dice ${value}">`);
  }
  
  diceresult.textContent = `dice: ${values.join(', ')}`;
  diceimages.innerHTML = images.join('');
}
