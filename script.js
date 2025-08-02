const videoPlayer = document.getElementById("video-player");
const nextBtn = document.getElementById("next-btn");
const videos = ["videos/video1.mp4", "videos/video2.mp4", "videos/video3.mp4"];
let current = 0;

function playVideo(index) {
  videoPlayer.src = videos[index];
  videoPlayer.play();
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % videos.length;
  playVideo(current);
});

window.onload = () => {
  playVideo(current);
};
