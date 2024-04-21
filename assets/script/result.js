// Level info lib
var levelLib = {
  btnClass: ["intern-level", "senior-level", "manager-level"],
  stats: [
    [0.6, 0.2],
    [0.8, 0.3],
    [0.7, 0.6],
  ],
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
// Function đổi stats
const stat1 = document.getElementById("stat-01");
const stat2 = document.getElementById("stat-02");
function changeStats(newStats) {
  stat1.style.width = newStats[0] * 100 + "%";
  stat2.style.width = newStats[1] * 100 + "%";
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
      changeCharImgSrc(src);
      changeStats(stats);
      lockedLevel(classIndex);
      btnLabel.classList.replace(
        btnLabel.classList[1],
        levelLib.btnClass[classIndex]
      );
      btnLabel.innerText = btn.innerText;
    }
  });
});

function lockedLevel(classIndex) {
  const background = document.querySelector(".character-illustration");
  const warning = document.querySelector(".warning");
  if (levelLib.btnClass[classIndex] !== "intern-level") {
    background.style.filter = "grayscale(100%)";
    warning.style.display = "inline";
  } else {
    background.style.filter = "";
    warning.style.display = "none";
  }
}
