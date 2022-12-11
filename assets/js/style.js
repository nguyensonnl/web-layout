function toggleForm() {
  let modal = document.querySelector(".modal");
  if (modal.style.display === "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}
