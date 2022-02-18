
const button = document.querySelector(".button");

button.addEventListener("click", ()=>{
    document.getElementById('topNav').style.display = "none";
    document.getElementById('menu').style.display = "flex";
    document.querySelector(".exit").style.display = "block";
        })

document.querySelector(".exit").addEventListener("click", ()=>{
    document.getElementById('menu').style.display = "none";
    document.getElementById('topNav').style.display = "flex";
    
})
    