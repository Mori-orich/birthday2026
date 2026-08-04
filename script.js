let starsFound = 0;


// PASSWORD

function checkPassword(){

    const password = document
    .getElementById("password")
    .value
    .toLowerCase()
    .trim();


    if(password === "bubu dudu"){

        showScreen("envelopeScreen");

    } else {

        document
        .getElementById("error")
        .innerHTML =
        "Wrong code 💔 Try again";

    }

}





// SCREEN CHANGE

function showScreen(id){

    document
    .querySelectorAll(".screen")
    .forEach(screen => {

        screen.classList.remove("active");

    });


    document
    .getElementById(id)
    .classList.add("active");

}





// OPEN LETTER

function openLetter(){

    showScreen("letterScreen");


    const message =
    "Today is a special day because someone wonderful was born. I hope your life is full of smiles, dreams, adventures and beautiful memories ❤️";


    let i = 0;

    const text =
    document.getElementById("text");


    text.innerHTML="";


    const typing =
    setInterval(()=>{


        text.innerHTML += message[i];


        i++;


        if(i >= message.length){

            clearInterval(typing);

        }


    },45);

}




// GO TO QUEST

function nextQuest(){

    showScreen("questScreen");

}




// FIND STARS

function findStar(element){


    if(!element.classList.contains("found")){


        element.classList.add("found");


        starsFound++;


        document
        .getElementById("counter")
        .innerHTML =
        "Stars found: " + starsFound + "/3";



        if(starsFound === 3){


            setTimeout(()=>{

                showScreen("finalScreen");

            },1000);


        }


    }

}
