let heartTries = 0;
let letterStarted = false;


// ---------------------
// HEART GAME
// ---------------------

const heart = document.getElementById("heart");


heart.addEventListener("mouseenter", function(){


    if(heartTries < 2){


        heartTries++;


        let x = Math.random() * 250 - 125;
        let y = Math.random() * 200 - 100;


        heart.style.transform =
        `translate(${x}px, ${y}px) scale(1.1)`;


        document.getElementById("heartText").innerHTML =
        "Almost! Try again ❤️";


    } else {


        heart.style.transform =
        "scale(1.3)";


        document.getElementById("heartText").innerHTML =
        "You caught my heart! 💕";


        heart.onclick = function(){


            showScene("codeScene");


        };


    }


});






// ---------------------
// CHANGE SCENES
// ---------------------


function showScene(id){


    document
    .querySelectorAll(".scene")
    .forEach(scene => {

        scene.classList.remove("active");

    });



    document
    .getElementById(id)
    .classList.add("active");


}








// ---------------------
// DATE CODE
// ---------------------


function checkCode(){


    let code =
    document
    .getElementById("code")
    .value
    .trim();



    if(code === "09.08"){


        showScene("storyScene");


    } else {


        document
        .getElementById("error")
        .innerHTML =
        "Try again 💭";


    }


}








// ---------------------
// CAKE
// ---------------------


function blowCake(){


    let cake =
    document.querySelector(".cake");


    cake.style.transition =
    "1s";


    cake.style.opacity =
    "0.4";


    cake.style.transform =
    "scale(.85)";



    setTimeout(()=>{


        showScene("letterScene");


        startLetter();



    },1200);


}








// ---------------------
// PERSONAL LETTER
// ---------------------


function startLetter(){


    if(letterStarted) return;


    letterStarted = true;



    let message = `Dear you ❤️


I created this little birthday adventure because I wanted to give you something special.


Even though we are far away, I hope this small surprise brings a smile to your face.


I wish you happiness, unforgettable moments, dreams that come true and lots of reasons to smile.


Thank you for being an important person in my life.


Happy Birthday 🎂


With love ❤️`;



    let index = 0;


    let area =
    document.getElementById("letter");



    function write(){


        if(index < message.length){


            area.innerHTML += message[index];


            index++;


            setTimeout(write,35);


        }


    }



    write();


}
