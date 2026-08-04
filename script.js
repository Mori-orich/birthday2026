let heartAttempts = 0;
let letterStarted = false;


// ----------------
// HEART GAME
// ----------------

const heart = document.getElementById("heart");


heart.addEventListener("mouseenter", () => {


    if (heartAttempts < 2) {


        heartAttempts++;


        const x = Math.random() * 250 - 125;
        const y = Math.random() * 200 - 100;


        heart.style.transform =
        `translate(${x}px, ${y}px) scale(1.1)`;


        document.getElementById("heartText").innerHTML =
        "Almost! Catch it ❤️";


    } else {


        heart.style.transform =
        "scale(1.3)";


        document.getElementById("heartText").innerHTML =
        "You caught my heart! 💕";


        heart.onclick = () => {


            nextScene("codeScene");


        };


    }


});





// ----------------
// DATE CODE
// ----------------


function checkDate(){


    let answer =
    document.getElementById("dateInput")
    .value
    .trim();



    if(answer === "09.08"){


        nextScene("storyScene");


    } else {


        document.getElementById("codeError")
        .innerHTML =
        "Not quite... try again 💭";


    }


}







// ----------------
// SCENE CHANGE
// ----------------


function nextScene(id){


    document
    .querySelectorAll(".scene")
    .forEach(scene=>{

        scene.classList.remove("active");

    });



    document
    .getElementById(id)
    .classList.add("active");



}







// ----------------
// CAKE
// ----------------


function blowCandles(){


    const cake =
    document.querySelector(".cake");


    cake.style.transform =
    "scale(.8)";


    cake.style.opacity =
    "0.5";



    setTimeout(()=>{


        nextScene("letterScene");


        startLetter();


    },1200);



}






// ----------------
// PERSONAL LETTER
// ----------------


function startLetter(){


    if(letterStarted) return;


    letterStarted=true;



    const text = `

Dear you ❤️


I made this little surprise because I wanted to give you something special.

Even though we are far away from each other, I hope this little journey can bring you a smile.


I wish you happiness, good moments, dreams that come true and many beautiful memories.


Thank you for being such an important person in my life.


Happy Birthday 🎂


With love ❤️

`;



let i = 0;


const area =
document.getElementById("letterText");



function typing(){


    if(i < text.length){


        area.innerHTML += text[i];


        i++;


        setTimeout(typing,35);


    }


}


typing();


}
