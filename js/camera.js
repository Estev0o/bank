const botaoInicarCamera = document.querySelector("[ data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTirar = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");

let imagemURL = "";

botaoInicarCamera.addEventListener("click", async function (){
    const iniciarVideo = await navigator.mediaDevices.
    getUserMedia({video: true, audio: false})

    botaoInicarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

botaoTirar.addEventListener("click", function(){
    canvas.getContext('2d').drawImage(video,0,0, canvas.Width, canvas.heigth)

    imagemURL = canvas.toDataURL ("image/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})