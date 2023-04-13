export function videoFormEvents() {

    const firstVideoCont = document.querySelector("#second-video .video-youtube iframe")
    const secondVideoCont = document.querySelector("#second-video .video-youtube iframe")
    const videoChoose = false;

    let videoChooseJson = JSON.stringify(videoChoose);
    localStorage.setItem("videoChoose", videoChooseJson)

    window.addEventListener('load', function () {

        let videoChooseLocal = localStorage.getItem("videoChoose")
        let videoChooseFinal = JSON.parse(videoChooseLocal);

        if (videoChooseFinal === false) {
            firstVideoCont.style.display = "block";
            secondVideoCont.style.display = "none"
            videoChooseFinal = true;
        } else {
            secondVideoCont.style.display = "block"
            firstVideoCont.style.display = "none";
            videoChooseFinal = false;
        }

    })


}
