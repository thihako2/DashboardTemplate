const toggle = document.querySelector('.toggle'),sidebar = document.querySelector('.sidebar');

toggle.addEventListener('click',()=>{
    sidebar.classList.toggle('show');
})