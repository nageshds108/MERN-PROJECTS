let gameseq=[]
let userSeq=[]
let cl=["red","yellow","green","purple"]
h=document.querySelector("h3")
let Started = false;
let level=0;

document.addEventListener("keypress",function(event){
    if(Started==false){
        console.log("Game started")
        Started=true
        levelUp()
        console.log(event.target)
    }
})


function gflash(btn){
    btn.classList.add("fls")
    setTimeout(()=>{
        btn.classList.remove("fls")
    },250
    )
}
function userflash(btn){
    btn.classList.add("ufls")
    setTimeout(()=>{
        btn.classList.remove("ufls")
    },250
    )
}
function btnFlash(){
    let btn=this
    userflash(btn)
    let col=btn.getAttribute("id")
    userSeq.push(col)
    checkUp(userSeq.length-1)
}


function checkUp(idx){
    if(userSeq[idx]===gameseq[idx]){
        if(userSeq.length===gameseq.length){
            setTimeout(levelUp,1000)
        } 
    }else{
        h.innerHTML=`Game Over! Your Score is <b>${(level-1)*5}</b> <br>  Press Any Key To Start`
        reset()
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"},250)
    }
}

function levelUp(){
    userSeq=[]
    level++
    h.innerText=`level=${level}`
    let e=Math.floor(Math.random()*4)
    let rCol=cl[e]
    let rBtn=document.querySelector(`.${rCol}`)
    gflash(rBtn)
    // console.log(e)
    // console.log(b)
    // console.log(r)
    gameseq.push(rCol)
    console.log(gameseq)

}

btns=document.querySelectorAll(".child")
for (btn of btns){
    btn.addEventListener("click", btnFlash)
} 
function reset(){
    Started = false;
    level=0;
    gameseq=[]
    userSeq=[]
}