let gameseq = [];
let userseq = [];

let gamestart = false;
let level = 0;
let btns = ["rosybrown","greenyellow","palevioletred","yellow"]


let h2 = document.querySelector('h2');

document.addEventListener("keypress", function() {
    
    if (gamestart == false){
        console.log("game started");
        gamestart = true;


        levelUp()
    }
    
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout ( function() {
        btn.classList.remove("flash");
    },250);
}

function buttonFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function() {
        btn.classList.remove("userflash")
    },250)
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;

    let random = Math.floor(Math.random() * 3);
    let randomcolor = btns[random];
    let randombtn = document.querySelector(`.${randomcolor}`)
    gameseq.push(randomcolor);
    gameFlash(randombtn);
}

function checkAns(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerText = `Game over Press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "white";
        }, 150);
        reset();
    }
}


function btnpress() {
    let btn = this
    buttonFlash(btn)

    usercolor = btn.getAttribute("id")
    console.log(usercolor)
    userseq.push(usercolor)

    checkAns(userseq.length - 1)

}
let allbtns = document.querySelectorAll(".btn")
for(btnn of allbtns){
    btnn.addEventListener("click", btnpress)
}

function reset(){
    gamestart = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
























