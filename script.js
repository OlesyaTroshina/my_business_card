const avatarButton = document.getElementById("avatarButton");
const avatarModal = document.getElementById("avatarModal");
const closeModal = document.getElementById("closeModal");

function openModal() {
  avatarModal.classList.add("show");
  avatarModal.setAttribute("aria-hidden", "false");
}

function hideModal() {
  avatarModal.classList.remove("show");
  avatarModal.setAttribute("aria-hidden", "true");
}

avatarButton.addEventListener("click", openModal);
closeModal.addEventListener("click", hideModal);

avatarButton.addEventListener("mousemove", (event) => {
  const rect = avatarButton.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateY = ((x - centerX) / centerX) * 8;
  const rotateX = ((centerY - y) / centerY) * 8;

  avatarButton.style.setProperty("--rx", rotateX.toFixed(2) + "deg");
  avatarButton.style.setProperty("--ry", rotateY.toFixed(2) + "deg");
});

avatarButton.addEventListener("mouseleave", () => {
  avatarButton.style.setProperty("--rx", "0deg");
  avatarButton.style.setProperty("--ry", "0deg");
});

avatarModal.addEventListener("click", (event) => {
  if (event.target === avatarModal) hideModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideModal();
});
