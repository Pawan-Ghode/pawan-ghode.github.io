// Example: highlight a skill on click
document.querySelectorAll(".skill").forEach(skill => {
    skill.addEventListener("click", () => {
        alert(`You clicked on ${skill.querySelector("p").textContent}!`);
    });
});
