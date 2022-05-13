let location_box = document.getElementById('location_box');
let search_arrow = document.getElementById('search_arrow');
let search_address = document.getElementById('search_address');

search_address.addEventListener('focusin',()=>{
    location_box.style.visibility="visible";
    search_arrow.style.transform="rotate(180deg)";
    location_box.style.opacity = 1;
});

search_address.addEventListener('focusout',()=>{
    location_box.style.visibility="hidden";
    search_arrow.style.transform="rotate(0deg)";
    location_box.style.opacity=0;
});
