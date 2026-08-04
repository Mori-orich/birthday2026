let heartAttempts = 0;
let letterStarted = false;

const heart = document.getElementById("heart");



// ❤️ HEART QUEST

heart.addEventListener("mouseenter", function(){

    if(heartAttempts < 2){

        heartAttempts++;

        let x = Math.random() * 450 - 225;
        let y = Math.random() * 320 - 160;


        heart.style.transform =
        `translate(${x}px, ${y}px) scale(1.25)`;


        document.getElementById("heartMessage").innerHTML =
        "Almost... catch me ❤️";


    } else {


        heart.style.transform =
        "scale(1.5)";


        document.getElementById("heartMessage").innerHTML =
        "You caught my heart! 💕";


        heart.onclick = function(){

            createHearts();

            next("codeScene");

        };


    }

});








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


    },300);



    createHearts();


}








// 🔐 CODE


function checkCode(){


    let code =
    document
    .getElementById("codeInput")
    .value
    .trim();



    if(code === "0908"){


        next("bubuScene");


    } else {


        document
        .getElementById("error")
        .innerHTML =
        "Wrong code 💭 Try again";


    }


}








// 🗝️ QUEST WRONG ANSWER


function wrongDoor(){


    document
    .getElementById("questText")
    .innerHTML =

    "Hmm... this door is sleeping 😴 Try another one ❤️";


}









// ❤️ FLOATING HEARTS


function createHearts(){


    for(let i=0;i<25;i++){


        let h =
        document.createElement("div");


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
    "0.3";



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



    let text = `Dear you ❤️


Happy Birthday!


I created this little adventure because I wanted to give you something more than just a simple message.


I wanted you to smile, play a little game, find surprises and feel how special you are.


Even if we are far away, I hope you always remember that there are people who care about you and wish you the best.


May your days be filled with happiness, warm moments, laughter and dreams that come true.


Thank you for being an important person in my life.


Have the most wonderful birthday 🎂


With love ❤️`;



    let i=0;


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
