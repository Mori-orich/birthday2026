let heartTries = 0;
let letterStarted = false;

const heart = document.getElementById("heart");


// ❤️ HEART GAME

heart.addEventListener("mouseenter", function () {


    if (heartTries < 2) {


        heartTries++;


        let x = Math.random() * 600 - 300;
        let y = Math.random() * 450 - 225;


        heart.style.transform =
        `translate(${x}px, ${y}px) scale(1.25)`;


        document.getElementById("heartText").innerHTML =
        "Almost! Catch me ❤️";


    } else {


        heart.style.transform =
        "scale(1.5)";


        document.getElementById("heartText").innerHTML =
        "You caught my heart! 💕";


        heart.onclick = function () {


            createHearts();

            showScene("codeScene");


        };


    }


});





// 🌸 SCENE CHANGE


function showScene(id) {


    document
    .querySelectorAll(".scene")
    .forEach(scene => {

        scene.classList.remove("active");

    });



    setTimeout(() => {


        document
        .getElementById(id)
        .classList.add("active");


    },200);


}







// 🔐 CODE 0908


function checkCode() {


    let code =
    document
    .getElementById("code")
    .value
    .trim();



    if(code === "0908") {


        createHearts();

        showScene("storyScene");


    } else {


        document
        .getElementById("error")
        .innerHTML =
        "Wrong code 💭 Try again";


    }


}








// ❤️ FLOATING HEARTS


function createHearts() {


    for(let i = 0; i < 30; i++) {


        let heart =
        document.createElement("div");


        heart.innerHTML = "❤️";


        heart.className =
        "floating-heart";



        heart.style.left =
        Math.random() * 100 + "vw";



        heart.style.animationDuration =
        (2 + Math.random() * 3) + "s";



        heart.style.fontSize =
        (20 + Math.random() * 25) + "px";



        document.body.appendChild(heart);



        setTimeout(() => {


            heart.remove();


        },5000);


    }


}








// 🎂 CAKE


function blowCake() {


    let cake =
    document.querySelector(".cake");



    cake.style.transition =
    "1s";



    cake.style.transform =
    "scale(.7) rotate(10deg)";



    cake.style.opacity =
    "0.3";



    createHearts();



    setTimeout(() => {


        showScene("letterScene");


        startLetter();


    },1200);



}








// 💌 LETTER


function startLetter() {


    if(letterStarted) return;


    letterStarted = true;



    let message = `Dear you ❤️


I created this little surprise because I wanted to make your birthday a little more special.


Even though we are far away, I hope this small adventure brings you a big smile.


I wish you happiness, beautiful moments, dreams that come true and many reasons to smile.


Thank you for being an amazing person.


Happy Birthday 🎂


With love ❤️`;



    let i = 0;


    let area =
    document.getElementById("letter");



    function typing() {


        if(i < message.length) {


            area.innerHTML += message[i];


            i++;


            setTimeout(typing,35);


        }


    }


    typing();


}
