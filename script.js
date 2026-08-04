let heartAttempts = 0;
let letterStarted = false;

const heart = document.getElementById("heart");



// ❤️ HEART GAME

heart.addEventListener("mouseenter", function(){


    if(heartAttempts < 2){


        heartAttempts++;


        let x = Math.random() * 450 - 225;
        let y = Math.random() * 320 - 160;



        heart.style.transform =
        `translate(${x}px, ${y}px) scale(1.2)`;


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







// 🌸 CHANGE SCENE


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



}








// 🔐 SECRET CODE


function checkCode(){


    let code =

    document
    .getElementById("codeInput")
    .value
    .trim();



    if(code === "0908"){


        createHearts();


        next("bubuScene");



    } else {


        document
        .getElementById("error")
        .innerHTML =

        "Try again 💭";


    }


}








// ❤️ HEART EFFECT


function createHearts(){


    for(let i=0;i<35;i++){


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



    let text = `Dear you ❤️


The little adventure is over, but the most important part is here.


I created this birthday surprise because I wanted to give you something special and personal.


Even though we are far away, I hope this little gift brings you a smile.


I wish you happiness, unforgettable moments, dreams that come true and many beautiful days ahead.


Thank you for being such an important person in my life.


Happy Birthday 🎂


With love ❤️`;



    let i=0;


    let box =
    document.getElementById("letterText");



    function write(){


        if(i<text.length){


            box.innerHTML += text[i];


            i++;


            setTimeout(write,40);


        }


    }



    write();


}
