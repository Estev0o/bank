const botaoInicarCamera = document.querySelector("[ data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

botaoInicarCamera.addEventListener("click", async function (){
    const iniciarVideo = await navigator.mediaDevices.
    getUserMedia({video: true, audio: false})

    botaoInicarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})