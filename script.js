const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const firstScreen = document.getElementById("firstScreen");
const secondScreen = document.getElementById("secondScreen");

// زر "لا" يهرب بسلاسة
noBtn.addEventListener("mouseover", () => moveButton(noBtn));
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton(noBtn);
});

function moveButton(button) {
    const newX = Math.random() * (window.innerWidth - button.offsetWidth);
    const newY = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.transition = "all 0.5s ease";
    button.style.position = "absolute";
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

// زر "نعم" يغير الواجهة
yesBtn.addEventListener("click", () => {
    firstScreen.classList.add("hidden");
    secondScreen.classList.remove("hidden");
});