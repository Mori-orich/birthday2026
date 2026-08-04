let heartClicks = 0;
let currentQuestion = 1;
let letterStarted = false;


// ❤️ HEART GAME

const heart = document.getElementById("heart");


function randomHeartPosition(){

    let x = Math.random() * 500 - 250;
    let y = Math.random() * 350 - 175;


    heart.style.transform =
    `translate(${x}px, ${y}px) scale(1.2)`;

}



heart.onclick = function(){


    heartClicks++;


    createHearts();



    if(heartClicks < 3){


        document.getElementById("heartText").innerHTML =

        `You found me ${heartClicks}/3 ❤️`;


        randomHeartPosition();


    } else {


        document.getElementById("heartText").innerHTML =

        "You caught my heart! 💕";


        setTimeout(()=>{


            next("codeScene");


        },800);


    }


};









// 🌸 SCENE CHANGE


function next(id){


    document
    .querySelectorAll(".scene")
    .forEach(scene=>{


        scene.classList.remove("active");


    });



    setTimeout(()=>{


        document
        .getElementById(id)
        .classList.add("active");


    },250);


}









// 🔐 CODE


function checkCode(){


    let code =

    document
    .getElementById("codeInput")
    .value
    .trim();



    if(code === "0908"){


        createHearts();


        next("quizIntro");


    } else {


        document
        .getElementById("error")
        .innerHTML =

        "Wrong code 💭 Try again";


    }


}









// 🕵️ QUIZ


function startQuiz(){


    next("question1");


}





function answer(correct){


    if(correct){


        if(currentQuestion === 1){


            currentQuestion = 2;


            next("question2");


        }


        else if(currentQuestion === 2){


            currentQuestion = 3;


            next("question3");


        }


        else {


            createHearts();


            next("successScene");


        }


    } else {


        alert("Hmm... try again 😄");


    }


}









// ❤️ HEART PARTICLES


function createHearts(){


    for(let i=0;i<20;i++){


        let h =
        document.createElement("div");


        h.className =
        "floating-heart";


        h.innerHTML =
        "❤️";


        h.style.left =
        Math.random()*100+"vw";


        h.style.fontSize =
        (20+Math.random()*35)+"px";


        h.style.animationDuration =

        (3+Math.random()*3)+"s";



        document.body.appendChild(h);



        setTimeout(()=>{


            h.remove();


        },6000);


    }


}









// 🎂 CAKE


function blowCake(){


    let cake =
    document.querySelector(".cake");


    cake.style.transition =
    "1.5s";


    cake.style.transform =
    "scale(.7) rotate(8deg)";


    cake.style.opacity =
    ".3";



    createHearts();



    setTimeout(()=>{


        next("letterScene");


        startLetter();


    },1500);


}









// 💌 LETTER


function startLetter(){


    if(letterStarted) return;


    letterStarted = true;



    let text = `Dear George ❤️


Happy Birthday! 🎂


I wanted to create something a little different for you.

Not just a simple birthday message, but a small adventure with surprises, smiles and little moments made especially for you.


Even though we are far away, I want you to know that you are a very special person to me.

I hope this little gift reminds you that someone is thinking about you and wishing you happiness.


May your days be full of laughter, success, amazing memories and moments that make you smile.


Never stop being the wonderful person you are.


Thank you for all the conversations, jokes and unforgettable moments.


I hope your birthday is as amazing as you deserve ❤️


With love,
Maria ❤️`;



    let box =
    document.getElementById("letterText");


    let i = 0;



    function typing(){


        if(i < text.length){


            box.innerHTML += text[i];


            i++;


            setTimeout(typing,35);


        }


    }


    typing();


}
