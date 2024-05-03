var levelLib = {
  level: ["Intern", "Senior", "Manager"],
  id: ["intern-level", "senior-level", "manager-level"],
  stats: [
    [0.6, 0.2],
    [0.8, 0.5],
    [0.7, 0.6],
  ],
};

const defaultCard = document.querySelector(".default-card");
defaultCard.checked = true;

// Function đổi stats
const stat1 = document.getElementById("stat-01");
const stat2 = document.getElementById("stat-02");
function changeStats(newStats) {
  stat1.style.width = newStats[0] * 100 + "%";
  stat2.style.width = newStats[1] * 100 + "%";
}

// Event listener cho các journey__card
const journeyCard = document.querySelectorAll(".journey__card");
journeyCard.forEach((card) => {
  card.addEventListener("click", () => {
    // console.log(card.innerText);
    const levelIndex = levelLib.level.indexOf(card.innerText);
    // console.log(levelIndex);
    if (levelIndex !== -1) {
      const stats = levelLib.stats[levelIndex];
      changeStats(stats);
    }
  });
});

// Function để xử lý khi click vào label
function handleLabelChange(event) {
  const input = event.target;
  const card = input.closest(".journey__card");
  if (!card) return;
  const label = card.querySelector(".label");
  label.click();
}

// Thêm sự kiện change cho mỗi input
document.querySelectorAll('input[type="radio"]').forEach(function (input) {
  input.addEventListener("change", function (event) {
    handleLabelChange(event);
  });
});
