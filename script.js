let heartAttempts = 0;
let letterStarted = false;


const heart = document.getElementById("heart");



// ❤️ HEART GAME


heart.addEventListener("mouseenter", () => {


    if (heartAttempts < 2) {


        heartAttempts++;


        let x = Math.random() * 600 - 300;
        let y = Math.random() * 450 - 225;


        heart.style.transform =
        `translate(${x}px, ${y}px) scale(1.3)`;


        document.getElementById("heartMessage").innerHTML =
        "Almost! Catch me ❤️";


    } else {


        heart.style.transform =
        "scale(1.5)";


        document.getElementById("heartMessage").innerHTML =
        "You caught my heart! 💕";


        heart.onclick = () => {


            createHearts();


            next("codeScene");


        };


    }


});








// 🌸 CHANGE SCENE


function next(sceneID){


    document
    .querySelectorAll(".scene")
    .forEach(scene => {


        scene.classList.remove("active");


    });



    setTimeout(() => {


        document
        .getElementById(sceneID)
        .classList.add("active");


    },200);


}








// 🔐 CODE 0908


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

        "Wrong code. Try again 💭";


    }


}









// ❤️ HEART EFFECT


function createHearts(){


    for(let i = 0; i < 35; i++){


        let heart = document.createElement("div");


        heart.className =
        "floating-heart";


        heart.innerHTML =
        "❤️";



        heart.style.left =

        Math.random()*100 + "vw";



        heart.style.animationDuration =

        (2 + Math.random()*3) + "s";



        heart.style.fontSize =

        (20 + Math.random()*30) + "px";



        document.body.appendChild(heart);



        setTimeout(()=>{


            heart.remove();


        },5000);


    }


}









// 🎂 CAKE


function blowCake(){


    let cake =

    document.querySelector(".cake");



    cake.style.transform =

    "scale(.7) rotate(10deg)";



    cake.style.opacity =

    "0.3";



    createHearts();



    setTimeout(()=>{


        next("letterScene");


        startLetter();


    },1200);


}









// 💌 LETTER


function startLetter(){


    if(letterStarted) return;


    letterStarted = true;



    let text = `Dear you ❤️


I created this little birthday surprise because I wanted to make something special for you.


Even though we are far away, I hope this little adventure makes you smile.


I wish you happiness, beautiful memories, dreams that come true and many reasons to be happy.


Thank you for being such an important person in my life.


Happy Birthday 🎂


With love ❤️`;



    let index = 0;


    let area =

    document.getElementById("letterText");



    function typing(){


        if(index < text.length){


            area.innerHTML += text[index];


            index++;


            setTimeout(typing,35);


        }


    }


    typing();


}
