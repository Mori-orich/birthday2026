let heartClicks = 0;
let currentQuestion = 1;
let letterStarted = false;


// ❤️ HEART GAME

const heart = document.getElementById("heart");


function moveHeart(){


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


        moveHeart();


    } else {


        document.getElementById("heartText").innerHTML =

        "You caught my heart! 💕";


        setTimeout(()=>{


            next("codeScene");


        },700);


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









// 🧩 QUIZ


function startQuiz(){


    next("question1");


}





function answer(correct){


    if(correct){


        if(currentQuestion === 1){


            currentQuestion++;


            next("question2");


        }

        else if(currentQuestion === 2){


            currentQuestion++;


            next("question3");


        }

        else {


            next("successScene");


            createHearts();


        }


    } else {


        alert("Hmm... not this one 😄 Try again!");

    }


}









// ❤️ HEART EFFECT


function createHearts(){


    for(let i=0;i<20;i++){


        let h = document.createElement("div");


        h.className =
        "floating-heart";


        h.innerHTML =
        "❤️";


        h.style.left =
        Math.random()*100+"vw";


        h.style.fontSize =
        (20+Math.random()*30)+"px";


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


    letterStarted=true;



    let text = `Dear Georgiii ❤️


Happy Birthday!


I created this little adventure because I wanted to make your day more special.


I wanted you to smile, play a little game and feel how important you are.


Even though we are far away, I hope this small surprise reminds you that someone is thinking about you.


I wish you happiness, amazing moments, good luck and dreams that come true.


Thank you for being you.


Have the best birthday ever 🎂


With love ❤️`;



    let i = 0;


    let box =
    document.getElementById("letterText");



    function typing(){


        if(i < text.length){


            box.innerHTML += text[i];


            i++;


            setTimeout(typing,35);


        }


    }


    typing();


}
