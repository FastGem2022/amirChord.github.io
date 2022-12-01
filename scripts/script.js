const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector(".menu");

window.addEventListener("load" , () => {

if(navigator.onLine) {
console.log("online");
btnMenu.addEventListener("click", () => {
menu.classList.toggle("active");
})

    
}else{
    console.log("offline");
}



})

