let hs=0;
let cs=0;


function choice(human) {
    console.log(human);
    let comp = getComputerChoice();
    console.log("computer choice: " + comp);
    playround(human, comp);
    console.log("Your Score: "+hs);
    console.log("Computer Score: "+cs);  
    document.getElementById('cc1').innerHTML=comp;
    document.getElementById('cc2').innerHTML=hs;
    document.getElementById('cc3').innerHTML=cs;

}

function getComputerChoice() {
    let c = parseInt(Math.random() * 10);
    // console.log(c);
    if (c < 4) {
        return "rock";
    }
    if (c < 7 && c >= 4) {
        return "paper";
    }
    if (c >= 7) return "scissor";
}


function playround(human, comp) {
    if (
        (comp == "rock" && human == "scissor") ||
        (comp == "paper" && human == "rock") ||
        (comp == "scissor" && human == "paper")
    )
        cs++;
    if (
        (human == "rock" && comp == "scissor") ||
        (human == "paper" && comp == "rock") ||
        (human == "scissor" && comp == "paper")
    )
        hs++;
}