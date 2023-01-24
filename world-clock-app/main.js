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
  let chicago_datetime_str = new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" });
  const date = new Date(chicago_datetime_str);

  const hour = date.getHours();
  const minute = date.getMinutes();

  const hourTenDigit = hour > 19 ? "2" : hour > 9 ? "1" : "0";
  const hourDigit = hour > 9 ? hour.toString()[1] : hour.toString()[0];
  const minuteTenDigit = minute > 9 ? minute.toString()[0] : "0";
  const minuteDigit = minute > 9 ? minute.toString()[1] : minute.toString()[0];
  digits[0].innerHTML = hourTenDigit;
  digits[1].innerHTML = hourDigit;
  digits[2].innerHTML = minuteTenDigit;
  digits[3].innerHTML = minuteDigit;
}
