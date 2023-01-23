const clockColonFlash = document.querySelector("[data-clock-flash]");
const digits = document.getElementsByClassName("digit-number");
updateClock();
setInterval(clockFlash, 500);
setInterval(updateClock, 1000);

function clockFlash() {
  if (clockColonFlash.classList.contains("hide")) {
    clockColonFlash.classList.remove("hide");
    return;
  }
  clockColonFlash.classList.add("hide");
}

function updateClock() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const hourTenDigit = hour > 19 ? "2" : hour > 9 ? "1" : "0";
  const hourDigit = hour > 9 ? hour.toString()[1] : hour.toString()[0];
  const minuteTenDigit = minute.toString()[0];
  const minuteDigit = minute.toString()[1];
  digits[0].innerHTML = hourTenDigit;
  digits[1].innerHTML = hourDigit;
  digits[2].innerHTML = minuteTenDigit;
  digits[3].innerHTML = minuteDigit;
}
