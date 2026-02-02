const crtBtn = document.querySelector('.crtBtn');
const sidebar = document.querySelector('.sidebar');

crtBtn.addEventListener('click' , function(){
    sidebar.classList.toggle('show');
    crtBtn.classList.toggle('open');
})