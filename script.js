
//@ts-nocheck
let scrollContainer = document.querySelector(".gallery");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

prev.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 500;
});
next.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 300;
});