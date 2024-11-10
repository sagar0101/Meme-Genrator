const genrate_btn = document.querySelector(".genrate-btn");
const meme_title = document.querySelector(".meme-title");
const meme_img = document.querySelector(".meme-img");
const meme_author = document.querySelector(".meme-author span");
function getMeme() {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      meme_title.innerText = data.title;
      meme_img.src = data.url;
      meme_author.innerText = data.author;
    });
}
getMeme()
genrate_btn.addEventListener("click", () => {
    getMeme()
});
