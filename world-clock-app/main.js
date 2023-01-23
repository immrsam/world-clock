const clockColonFlash = document.querySelector("[data-clock-flash]");

setInterval(clockFlash, 500);

function clockFlash() {
  if (clockColonFlash.classList.contains("hide")) {
    clockColonFlash.classList.remove("hide");
    return;
  }
  clockColonFlash.classList.add("hide");
}
