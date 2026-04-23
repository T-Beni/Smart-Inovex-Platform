const fereastraNotificari = document.getElementById("fereastraNotificari");
const butonNotificare = document.getElementById("notificari");
const notificareMark = document.getElementById("notificareMark");
let afisareFereastra = true;
let notificare = true;
function checkNotificare(){
    if(notificare){
        butonNotificare.style.backgroundImage = 'url("Imagini/notification_icon_true.png")';
    }
    else {
        butonNotificare.style.backgroundImage = 'url("Imagini/notification_icon.png")';
        notificareMark.style.display = "none";
    }
}

function clickNotificari() {
    checkNotificare();
    if(afisareFereastra){
        fereastraNotificari.style.display = "block";
        afisareFereastra = false;
        if(notificare) notificare = false;
    }
    else {
        fereastraNotificari.style.display = "none";
        afisareFereastra = true;
    }
}