const audio = new Audio("./assets/flashbang-cs_qoRhxLn.mp3");
audio.volume = 0.02;

function toggleMode() {
    const html = document.documentElement;

    html.classList.toggle('claro');

    const img = document.querySelector("#profile img");

    if(html.classList.contains('claro')){
        audio.currentTime = 0;
        audio.play();
        img.setAttribute('src', './assets/oclin.png');
    } else {
        img.setAttribute('src', './assets/avatar-musgas.png');
    }

}
