// Level info lib
var levelLib = {
  btnClass: ["intern-level", "senior-level", "manager-level"],
  src: [
    "./assets/img/character/eagle/intern-eagle.png",
    "./assets/img/character/eagle/senior-eagle.png",
    "./assets/img/character/eagle/manager-eagle.png",
  ],
};

// Function đổi src ảnh character
const characterImg = document.querySelector(".character-img");
function changeCharImgSrc(newSrc) {
  characterImg.src = newSrc;
}

// Lấy ra thẻ level label
const btnLabel = document.getElementById("level-label");

// Event listener cho các nút level
const levelBtn = document.querySelectorAll(".btn--level");
levelBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const classIndex = levelLib.btnClass.indexOf(btn.classList[2]);
    if (classIndex !== -1) {
      const stats = levelLib.stats[classIndex];
      const src = levelLib.src[classIndex];
      const desc = levelLib.desc[classIndex];
      changeCharImgSrc(src);
      btnLabel.classList.replace(
        btnLabel.classList[1],
        levelLib.btnClass[classIndex]
      );
      btnLabel.innerText = btn.innerText;
    }
  });
});
