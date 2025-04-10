const statsDaily = document.querySelectorAll(".daily");
const statsWeekly = document.querySelectorAll(".weekly");
const statsMonthly = document.querySelectorAll(".monthly");

const daily = document.getElementById("nav__daily");
const weekly = document.getElementById("nav__weekly");
const monthly = document.getElementById("nav__monthly");

function navigationSwitch(
  visible,
  hidden1,
  hidden2,
  active,
  inactive1,
  inactive2
) {
  visible.forEach((el) => (el.style.display = "flex"));
  hidden1.forEach((el) => (el.style.display = "none"));
  hidden2.forEach((el) => (el.style.display = "none"));

  active.style.color = "whitesmoke";
  inactive1.style.color = "var(--navy-200)";
  inactive2.style.color = "var(--navy-200)";
}

daily.addEventListener("click", () =>
  navigationSwitch(
    statsDaily,
    statsWeekly,
    statsMonthly,
    daily,
    weekly,
    monthly
  )
);
weekly.addEventListener("click", () =>
  navigationSwitch(
    statsWeekly,
    statsDaily,
    statsMonthly,
    weekly,
    daily,
    monthly
  )
);
monthly.addEventListener("click", () =>
  navigationSwitch(
    statsMonthly,
    statsDaily,
    statsWeekly,
    monthly,
    daily,
    weekly
  )
);
