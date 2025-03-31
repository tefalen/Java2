function pozdrav(){
    alert("klikl jsi na mě")
}

var is = false
document.getElementById("button").addEventListener("click", ()=>{
    if(is == false){
        document.getElementById("barva").style.backroundColor = "blue"
        is=true
    }
    else{
        document.getElementById("barva").style.backroundColor = "red"
        is=false
    }
})