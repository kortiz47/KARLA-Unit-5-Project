//Store each image result/result text in a variable
let gryffindor=document.querySelector(".gryffindor");
let ravenclaw=document.querySelector(".ravenclaw");
let slytherin=document.querySelector(".slytherin");
let hufflepuff=document.querySelector(".hufflepuff");
let tryAgain=document.querySelector(".tryAgain");
let results=document.querySelector(".result");
//Store the <button> as a variable in JavaScript - Lesson 5.2
let button = document.querySelector("button");
//Write a click handler
button.onclick=function(){
//Store each <input> as a variable in JavaScript - Lesson 5.3
let spellsInput = document.querySelector(".spells").value;
let potionInput = document.querySelector(".potions").value;
  //Conditional for Gryffindor House
  if((spellsInput >= 3 && spellsInput<=5) && (potionInput ==="Explosive" ||       potionInput==="explosive")){
    results.style.display="block";
    results.innerHTML = "You know " +spellsInput+ " spells and would rather make a "+potionInput+ " potion. Therefore, you are a Gryffindor!";
    gryffindor.style.display="block";
  }
  //Conditional for Ravenclaw House
  else if((spellsInput >= 3 && spellsInput<=5) && (potionInput ==="Love" ||       potionInput==="love")){
    results.style.display="block";
    results.innerHTML = "You know " +spellsInput+ " spells and would rather make a "+potionInput+ " potion. Therefore, you are a Ravenclaw!";
    ravenclaw.style.display="block";
  }
  //Conditional for Hufflepuff House
  else if((spellsInput >= 0 && spellsInput<=2) && (potionInput ==="Love" ||       potionInput==="love")){
    results.style.display="block";
    results.innerHTML = "You know " +spellsInput+ " spells and would rather make a "+potionInput+ " potion. Therefore, you are a Hufflepuff!";
    hufflepuff.style.display="block";
  }
  //Conditional for Slytherin House
  else if((spellsInput >= 0 && spellsInput<=2) && (potionInput ==="Explosive" ||       potionInput==="explosive")){
    results.style.display="block";
    results.innerHTML = "You know " +spellsInput+ " spells and would rather make a "+potionInput+ " potion. Therefore, you are a Slytherin!";
    slytherin.style.display="block";
  }
  //Else Conditional
  else{
    results.style.display="block";
    results.innerHTML = "TRY AGAIN - your responses do not match our possible answers";
    tryAgain.style.display="block";
    
  }
};