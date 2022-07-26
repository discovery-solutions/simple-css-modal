const buttons = document.querySelectorAll(".toggle");

for (const button of buttons) {
  button.addEventListener("click", function() {
    document.querySelector(".content").classList.toggle("blur");
    document.querySelector(".modal").classList.toggle("open");
  });
}

document.querySelector(".dark-mode").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});
