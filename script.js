// Optional: Alert on skill click
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('click', () => {
    const name = skill.querySelector('p').textContent;
    alert(`You clicked on ${name}`);
  });
});
