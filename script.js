const questionContainer =
document.querySelector(".question-container");


const loveContainer =
document.querySelector(".love-container");


const yesBtn =
document.querySelector(".js-yes-btn");


const noBtn =
document.querySelector(".js-no-btn");


const loveVideo =
document.querySelector(".love-video");


let yesScale = 1;



function moveNo(){


    const x =
    Math.random() *
    (window.innerWidth - noBtn.offsetWidth);


    const y =
    Math.random() *
    (window.innerHeight - noBtn.offsetHeight);



    noBtn.style.position="fixed";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";



    // Yes 3 kat büyüsün

    yesScale *= 3;


    yesBtn.style.transform =
    `scale(${yesScale})`;

}




noBtn.addEventListener(
"mouseenter",
moveNo
);



noBtn.addEventListener(
"pointerdown",
(e)=>{

    e.preventDefault();

    moveNo();

});





yesBtn.addEventListener(
"click",
()=>{


    questionContainer.style.display="none";


    loveContainer.style.display="block";


    loveVideo.play();


});
