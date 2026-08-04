let heartClicks = 0;

let currentQuestion = 1;

let pawsFound = 0;

let letterStarted = false;



// ❤️ HEART GAME


const heart = document.getElementById("heart");


function moveHeart(){

    let x = Math.random() * 450 - 225;

    let y = Math.random() * 250 - 125;


    heart.style.transform =
    `translate(${x}px, ${y}px) scale(1.2)`;

}



heart.onclick = function(){


    heartClicks++;


    createHearts();



    if(heartClicks < 3){


        document.getElementById("heartText").innerHTML =

        `You found me ${heartClicks}/3 ❤️`;


        moveHeart();


    } else {


        document.getElementById("heartText").innerHTML =

        "You caught my heart! 💕";


        setTimeout(()=>{


            next("codeScene");


        },800);


    }


};









// 🌸 CHANGE SCENE


function next(id){


    document.querySelectorAll(".scene")
    .forEach(scene=>{

        scene.classList.remove("active");

    });



    setTimeout(()=>{


        document
        .getElementById(id)
        .classList.add("active");



        if(id==="minionScene"){

            startBananas();

        }


    },300);


}









// 🔐 CODE


function checkCode(){


    let code =
    document.getElementById("codeInput")
    .value
    .trim();



    if(code==="0908"){


        createHearts();

        next("quizIntro");


    } else {


        document.getElementById("error").innerHTML =

        "Wrong code 💭";


    }


}









// 🕵️ QUIZ


function startQuiz(){

    next("question1");

}





function answer(correct){


    if(correct){


        if(currentQuestion===1){


            currentQuestion=2;

            next("question2");


        }

        else if(currentQuestion===2){


            currentQuestion=3;

            next("question3");


        }

        else {


            createHearts();

            next("successScene");


        }



    } else {


        alert("Try again 😄");


    }


}









// 🐾 PAW QUEST


function findPaw(element){


    if(element.classList.contains("found")) return;



    element.classList.add("found");


    pawsFound++;



    document.getElementById("pawText").innerHTML =

    `Paws found: ${pawsFound}/3`;



    createHearts();



    if(pawsFound===3){


        setTimeout(()=>{


            next("catMessageScene");


        },1000);


    }


}









// ❤️ PARTICLES


function createHearts(){


    for(let i=0;i<15;i++){


        let heart =
        document.createElement("div");


        heart.className =
        "floating-heart";


        heart.innerHTML =
        "❤️";


        heart.style.left =
        Math.random()*100+"vw";


        heart.style.fontSize =
        20+Math.random()*30+"px";



        document.body.appendChild(heart);



        setTimeout(()=>{


            heart.remove();


        },5000);


    }


}









// 🍌 MINION BANANAS


function startBananas(){


    let box =
    document.getElementById("bananaRain");



    for(let i=0;i<20;i++){


        let banana =
        document.createElement("div");



        banana.className =
        "banana";


        banana.innerHTML =
        "🍌";


        banana.style.left =
        Math.random()*100+"%";


        banana.style.animationDelay =
        Math.random()*3+"s";



        box.appendChild(banana);



        setTimeout(()=>{


            banana.remove();


        },6000);


    }


}









// 🎂 CAKE


function blowCake(){


    let cake =
    document.querySelector(".cake");



    cake.style.transform =
    "scale(.7) rotate(10deg)";


    cake.style.opacity =
    ".4";



    createHearts();



    setTimeout(()=>{


        next("letterScene");


        startLetter();


    },1500);


}









// 💌 LETTER


function startLetter(){


    if(letterStarted) return;


    letterStarted=true;



    let text = `Dear George ❤️

Happy Birthday! 🎂

I wanted to create something special for you — not just a simple message, but a little adventure made with care, surprises and smiles.

Even though we are far away, I want you to know that you are a very special person to me. I hope this little gift reminds you that someone is thinking about you.

I wish you happiness, success, beautiful memories and many reasons to smile.

Thank you for all the conversations, jokes and unforgettable moments.

Stay the amazing person you are.

Have the best birthday ever ❤️

With love,
Maria ❤️`;



    let box =
    document.getElementById("letterText");


    let i=0;



    function type(){


        if(i<text.length){


            box.innerHTML += text[i];


            i++;


            setTimeout(type,30);


        }


    }


    type();


}
