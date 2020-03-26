const $wrapperVideo = document.querySelector(".wrapper-video");
/**
 * @type {HTMLMediaElement} $videoDininho
 */
const $videoDininho = document.querySelector(".video-dininho");
const $videoOpacity = document.querySelector(".video-opacity");
const $play = document.querySelector(".play");
const $volume = document.querySelector(".volume");

console.log($videoDininho.currentTime);

$wrapperVideo.addEventListener("click", function() {
  toggleActive();
  if ($videoDininho.classList.contains("-active")) {
    $videoDininho.play();
  } else {
    $videoDininho.pause();
  }
});

$volume.addEventListener("click", function(event) {
  event.stopPropagation();
  $volume.classList.toggle("-off");
  $videoDininho.muted = !$videoDininho.muted;
});

function toggleActive() {
  $videoDininho.classList.toggle("-active");
  $videoOpacity.classList.toggle("-active");
  $play.classList.toggle("-active");
}

$videoDininho.addEventListener("ended", toggleActive);
