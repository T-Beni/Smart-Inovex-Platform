let nrSlide = 1;

function showSlide(){
    window.location.href = "#slide" + nrSlide;
}
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        if(nrSlide < 15) nrSlide++;
            showSlide();
    }
    if (event.key === "ArrowLeft") {
        if(nrSlide > 1) nrSlide--;
            showSlide();
    }
});