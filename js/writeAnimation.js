// Writer Function
let textEffect = "Follow me @mahmoud_zenhom";
let start = 0;
function writeAnimation() {
  let typeWriter = setInterval(() => {
    document.querySelector(".insta-check .instaUser").textContent +=
      textEffect[start];
    start++;
    if (start > textEffect.length - 1) {
      clearInterval(typeWriter);
    }
  }, 200);
}
writeAnimation();
