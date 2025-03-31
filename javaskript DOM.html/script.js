const nadpisjedna = document.getElementById("nadpis1")
console.log(nadpisjedna)

nadpisjedna.style.color = "red"

const nadpisy = document.getElementsByClassName("nadpisy")
console.log(nadpisy)
for(var i = 0; i<nadpisy.length; i++){
    nadpisy[i].style.color = "blue"
}

const idk = document.getElementsByTagName("h1")
console.log(idk)

const QueryOne = document.querySelector(".nadpisy") //kombinace všech tří (vezme jen první ".nadpisy" který najde)
console.log(QueryOne) 

const queryAll = document.querySelectorAll(".nadpisy")
