let box=document.querySelector("#box")
let onbtn=document.querySelector("#onbtn")
let offbtn=document.querySelector("#offbtn")

onbtn.addEventListener("click",function(){
    box.style.backgroundColor="yellow"
})
offbtn.addEventListener("click",function(){
    box.style.backgroundColor="black"
})
