let burgerBtn = document.querySelector("#burger-button");
let mainMenu = document.querySelector("#nav-menu");

let canSeeMenu = false;

burgerBtn.addEventListener("click", () => {

    if(!canSeeMenu){
        mainMenu.classList.add("show-menu");
        canSeeMenu = true;
    }else{
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
    }
})


let closeBtn = document.querySelector("#close-button");

closeBtn.addEventListener("click", () => {
        mainMenu.classList.remove("show-menu");
        canSeeMenu = false;
})

