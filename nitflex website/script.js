const icon = document.querySelectorAll('#icon');

icon.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("nav .active").classList.remove("active");
        btn.classList.add("active");
    }); 
});

