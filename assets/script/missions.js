const completedMissionProgress = document.querySelector(".metrics-progress");
completedMissionProgress.style.width = "100%";

let currentExp = 20;
const levelProgress = document.querySelector(".level-score");
levelProgress.style.width = currentExp + "%";

const enableBtn = document.querySelector(".btn--mission--enable");
enableBtn.addEventListener("click", () => {
  const claimExp = document.querySelector(".reward__value");
  const remainingExp = document.getElementById("remaining-exp");
  remainingExp.innerText =
    parseInt(remainingExp.innerText) - parseInt(claimExp.innerText);
  currentExp = currentExp + parseInt(claimExp.innerText);
  levelProgress.style.width = currentExp + "%";
  enableBtn.classList.remove("btn--mission--enable");
  setTimeout(() => {
    const completedMission = document.querySelector(".mission");
    completedMission.style.filter = "grayscale(90%)";
    completedMission.classList.add("completed-mission");
    enableBtn.style.visibility = "hidden";
  }, 300);
});
