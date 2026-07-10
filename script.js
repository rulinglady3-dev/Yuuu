const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");

const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");


let yesScale = 1;



// No butonu kaçma

function moveNoButton() {

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;


    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;


    noBtn.style.position = "fixed";

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";


    // Yes 3 kat büyüsün

    yesScale *= 3;


    yesBtn.style.transform =
    `scale(${yesScale})`;

}



// Bilgisayar

noBtn.addEventListener(
"mouseenter",
moveNoButton
);



// Telefon

noBtn.addEventListener(
"pointerdown",
(e)=>{

    e.preventDefault();

    moveNoButton();

});




// Yes butonu

yesBtn.addEventListener(
"click",
()=>{


    questionContainer.style.display = "none";


    heartLoader.style.display = "block";



    setTimeout(()=>{


        heartLoader.style.display = "none";


        resultContainer.style.display = "block";


        if(gifResult.play){

            gifResult.play();

        }


    },3000);



});
