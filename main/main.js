const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

var btn=document.getElementById("my-btn")

btn.addEventListener('click',clicked)
function clicked(e) {
    alert("product added to the cart"
    )
    
}



















































