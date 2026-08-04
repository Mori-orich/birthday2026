let love = 0;

let heartsFound = 0;

let currentQuestion = 1;

let pawsFound = 0;

let bananasCaught = 0;

let letterStarted = false;





// ❤️ LOVE VESSEL


document.getElementById("heartButton").onclick = function(){


if(love < 100){


love += 10;


document.getElementById("loveFill").style.height =
love + "%";


document.getElementById("lovePercent").innerHTML =
love + "%";


document.getElementById("loveText").innerHTML =
"Love is growing ❤️";


createHearts();


}



if(love === 100){


document.getElementById("loveText").innerHTML =
"Love vessel is full! 💕";



setTimeout(()=>{


next("catLoveScene");


},1000);


}


};









// SCENE CHANGE


function next(id){


document.querySelectorAll(".scene")
.forEach(scene=>{


scene.classList.remove("active");


});



setTimeout(()=>{


document.getElementById(id)
.classList.add("active");



if(id==="minionScene"){

startBananas();

}


},300);


}









// HEART EFFECTS


function createHearts(){


for(let i=0;i<12;i++){


let h=document.createElement("div");


h.className="floating-heart";


h.innerHTML="❤️";


h.style.left=Math.random()*100+"vw";


h.style.fontSize =
20+Math.random()*30+"px";



document.body.appendChild(h);



setTimeout(()=>{


h.remove();


},4000);


}


}









// HIDDEN HEARTS


document.querySelectorAll(".hiddenHeart")
.forEach(heart=>{


heart.onclick=function(){


if(this.dataset.done)return;


this.dataset.done=true;


this.style.opacity=".3";


heartsFound++;



document.getElementById("hiddenText")
.innerHTML =

`Hearts found: ${heartsFound}/5`;



createHearts();



if(heartsFound===5){


setTimeout(()=>{


next("codeScene");


},1000);


}


}


});









// CODE


function checkCode(){


let code =
document.getElementById("codeInput")
.value
.trim();



if(code==="0908"){


next("duduReward");


}

else{


document.getElementById("error")
.innerHTML="Wrong code 💭";


}


}









// QUIZ


function startQuiz(){


next("question1");


}





function answer(correct){


if(!correct){


alert("Try again 😄");


return;


}



if(currentQuestion===1){


currentQuestion=2;


next("question2");


}

else if(currentQuestion===2){


currentQuestion=3;


next("question3");


}

else{


next("georgeReward");


}


}









// 🐾 PAWS


function findPaw(paw){


if(paw.dataset.done)return;



paw.dataset.done=true;


paw.style.opacity=".3";


pawsFound++;



document.getElementById("pawText")
.innerHTML =

`Paws found: ${pawsFound}/3`;



createHearts();



if(pawsFound===3){


setTimeout(()=>{


next("catReward");


},1000);


}


}









// 🍌 BANANA GAME


function startBananas(){


let box =
document.getElementById("bananaGame");



let interval=setInterval(()=>{


if(bananasCaught>=5){


clearInterval(interval);


return;

}



let banana =
document.createElement("div");



banana.className="banana";


banana.innerHTML="🍌";


banana.style.left =
Math.random()*90+"%";



banana.onclick=function(){


bananasCaught++;


this.remove();



document.getElementById("bananaText")
.innerHTML =

`Bananas caught: ${bananasCaught}/5`;



if(bananasCaught===5){


document.getElementById("bananaContinue")
.disabled=false;


}



};



box.appendChild(banana);



setTimeout(()=>{


banana.remove();


},4000);



},700);


}









// 🎂 CAKE


function blowCake(){


let cake=document.querySelector(".cake");


cake.style.transform="scale(.7)";


cake.style.opacity=".3";



createHearts();



setTimeout(()=>{


next("letterScene");


startLetter();



},1200);



}









// 💌 LETTER


function startLetter(){


if(letterStarted)return;


letterStarted=true;



let text=`Dear George ❤️

Happy Birthday! 🎂

I wanted to create something special for you — a little adventure full of surprises, smiles and warm moments.

Even though we are far away, I want you to know that you are a very special person to me.

I wish you happiness, success, amazing memories and many reasons to smile.

Thank you for all the conversations, jokes and unforgettable moments.

Stay the amazing person you are.

Have the best birthday ever ❤️

With love,
Maria ❤️`;



let box =
document.getElementById("letterText");


let i=0;



function typing(){


if(i<text.length){


box.innerHTML+=text[i];


i++;


setTimeout(typing,30);


}


}


typing();


}
