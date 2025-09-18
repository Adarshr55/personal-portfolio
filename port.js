const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeButton = document.getElementById("close-button");

menuButton.addEventListener("click",()=>{
    mobileMenu.classList.toggle("translate-x-full")
});

closeButton.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("translate-x-full")
});

const mobileNav = document.getElementById("mobileNav");
const mobileNavList = mobileNav.querySelectorAll("li");
mobileNavList.forEach((list)=> {
    list.addEventListener("click", ()=> {
        closeButton.click();
    })
})
