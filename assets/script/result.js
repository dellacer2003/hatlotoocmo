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
  desc: [
    "In the bustling job village, Intern Ego Eagle spreads its wings, eager to learn. Its self-esteem, akin to a fledgling fledgling, stands at a modest level, a 6 out of 10. With each new task, it bravely faces challenges, though its adaptability, like a stiff breeze, struggles to reach beyond 2 out of 10. From filing papers to fetching coffee, it soars with determination, ready to prove its worth in the pixelated workplace.",
    "Ascending to Senior level, Ego Eagle radiates confidence, its self-esteem soaring at an impressive 8 out of 10. Its adaptability, like a seasoned navigator, has grown to 3 out of 10, allowing it to gracefully maneuver through the complexities of the job village. A veteran of the pixelated workplace, it mentors juniors and navigates tasks with seasoned skill. With each flap of its wings, it commands respect, soaring to new heights in the pixelated skyline.",
    "At the managerial summit, Ego Eagle reigns supreme with self-esteem standing tall at 7 out of 10. Its adaptability, like a weathered captain, stands at 6 out of 10, allowing it to steer the team through any storm. From delegating tasks to strategizing for success, it orchestrates the job village with precision. A beacon of pixelated leadership, it inspires others to spread their wings and soar, painting the sky with dreams of achievement.",
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
// Function đổi desc
const characterDesc = document.querySelector(".character_desc");
function changeCharDesc(newDesc) {
  characterDesc.innerText = newDesc;
}
// Default desc
characterDesc.innerText = levelLib.desc[0];

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
      changeStats(stats);
      lockedLevel(classIndex);
      changeCharDesc(desc);
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
  const noti = document.querySelector(".noti");
  if (levelLib.btnClass[classIndex] !== "intern-level") {
    background.style.filter = "grayscale(100%)";
    noti.style.display = "flex";
  } else {
    background.style.filter = "";
    noti.style.display = "none";
  }
}
