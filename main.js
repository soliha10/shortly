const elMenuBtn = document.querySelector(".js-btn");

elMenuBtn.addEventListener("click",  () =>{
  elMenuBtn.closest(".site-header").classList.toggle("open");
  elMenuBtn.closest("body").classList.toggle("unscroll");
})