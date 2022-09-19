
let ftPlus = document.getElementById("ft+");
let ftminus = document.getElementById("ft-");
let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let theme3 = document.getElementById("theme3"); // by callback function "theme3Fn"
let theme4 = document.getElementById("theme4"); // by callback function "theme4Fn"
let theme5 = document.getElementById("theme5");
let reset = document.getElementById("reset");
let mousee = document.getElementById("item3");
let input = document.getElementById("input");
let history = document.getElementById("search-history");
let dropHist = document.getElementById("dropdown-history");
let historyText = document.getElementById("history-text");


ftPlus.onclick = () => {
    let text1 = document.getElementById("bb-view");
    text1.style.fontSize = `${
        +window.getComputedStyle(text1).fontSize.slice(0, -2) + 3
      }px`
    
    let text2 = document.getElementById("ss-view");
    text2.style.fontSize = `${+window.getComputedStyle(text2).fontSize.slice(0, -2) + 3}px`

    // console.log(window.getComputedStyle(text1).fontSize) // css properties
}


ftminus.onclick = () => {
    let text1 = document.getElementById("bb-view");
    text1.style.fontSize = `${+window.getComputedStyle(text1).fontSize.slice(0, -2) - 3}px`;

    let text2 = document.getElementById("ss-view");
    text2.style.fontSize = `${+window.getComputedStyle(text2).fontSize.slice(0, -2) - 3}px`;
}


theme1.addEventListener('click', () => {
    let allView = document.querySelectorAll(".view");

    let txt = "";

    for(let x of allView){
        x.style.background = "linear-gradient(120deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
        x.style.color = "white";
    }
})


theme2.addEventListener('click', ()=>{
    let allView = document.getElementsByClassName("view");

    for(y in allView){
        allView[y].style.background = "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)";
        allView[y].style.color = "white";
        // console.log(allView[y])
    }

    // console.log(allView);
})


function theme3Fn(){
    let allView = document.querySelectorAll(".view");

    for(let a of allView){
        a.style.background = "linear-gradient(120deg, #acb6e5 0%, #86fde8 100%)";
        a.style.color = "black";
    }

    // console.log(allView)
}
theme3.addEventListener('click', theme3Fn)

function theme4Fn(){
    let allView = document.querySelectorAll(".view");

    for(let x = 0; x < allView.length; x++){
        allView[x].style.background = "linear-gradient(90deg, #9796f0 0%, #fbc7d4 100%)"
        allView[x].style.color = "black";
    }
}

theme4.addEventListener('click', theme4Fn)


theme5.addEventListener('click', ()=>{
    let allView = document.getElementsByClassName("view")
    for(z in allView){
        allView[z].style.background = "linear-gradient(60deg, #ff6e7f 0%, #bfe9ff 100%)"
        allView[z].style.color = "black";

    // console.log(allView[z])
    }
})


reset.addEventListener('click', ()=>{
    let allView = document.getElementsByClassName("view")

    for(let i = 0; i<allView.length; i++){
        allView[i].style.background = "black";
        allView[i].style.color = "white";
        // window.getComputedStyle(allView[i]).fontSize = "18px";
        // allView[i].style.fontSize = '16';

        // console.log(allView[i].style)
    }
    document.body.style.cssText = `background: whitesmoke;
    color: black;`
    // console.log(allView)
})


document.body.addEventListener('keypress', (e)=>{
    if(e.key === 'r'){
        const allView = document.querySelectorAll(".view");
        for(let b = 0; b < allView.length; b++){
            allView[b].style.background = "black";
            allView[b].style.color = "whitesmoke";
            allView[b].style.fontSize = "16px";

           // console.log(allView[b].style)
        }

        document.body.style.cssText = `background: whitesmoke;
        color: black;`
    }
    if(e.key == 1){
        document.body.style.cssText = `background: linear-gradient(90deg, #00416A 0%, #E4E5E6 100%);
        color: whitesmoke;`
    }
    if(e.key == 2){
        document.body.style.cssText = `background: linear-gradient(120deg, #ee9ca7 0%, #ffdde1 100%);
        color: whitesmoke;`
    }
    if(e.key == 3){
        document.body.style.cssText = `background: linear-gradient(to right, #00b4db, #0083b0);
        color: whitesmoke;`
    }
})


mousee.addEventListener('pointerover', ()=>{
    let allView = document.getElementsByClassName("view");

    for(let a of allView){
        a.style.background = "white";
        a.style.color = "black";
        
        // console.log(a)
    }

    // console.log(allView)
})


mousee.addEventListener('pointerout', ()=> {
    let allView = document.querySelectorAll(".view");

    for(let q = 0; q < allView.length; q++){
        allView[q].style.background = "black";
        allView[q].style.color = "whitesmoke";
    }
})


input.addEventListener('focus', ()=>{
    let inp = document.getElementById("input");

    inp.style.border = "3px solid white";
    inp.style.boxShadow = "0px 0px 4px black";
})


input.addEventListener('blur', ()=>{
    let histAdd = document.createElement("div");
    histAdd.classList.add("sub-drop")
    histAdd.innerText = `${input.value}`;

    historyText.append(histAdd);
    //console.log(input.value)
})


history.addEventListener('pointerover', ()=>{
    let dropDown = document.getElementById("dropdown-history");

    dropDown.style.display = "flex";
})


history.addEventListener('pointerout', ()=>{
    let dropDown = document.getElementById("dropdown-history");

    dropDown.style.display = "none";
})

