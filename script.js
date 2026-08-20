// Efek saat halaman selesai dimuat

document.addEventListener("DOMContentLoaded", () => {

    console.log("Welcome to Class IX B!");

});


// Efek navbar saat scrolling

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(5, 8, 22, 0.95)";
    } else {
        nav.style.background = "rgba(5, 8, 22, 0.75)";
    }

});