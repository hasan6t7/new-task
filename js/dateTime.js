function updateDate() {
  let today = new Date();
  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let weekday = daysOfWeek[today.getDay()];
  let month = monthsOfYear[today.getMonth()];
  let day = today.getDate();
  let year = today.getFullYear();
  let formattedDate =
    weekday + " " + month + " " + (day < 10 ? "0" + day : day) + ", " + year;
  
document.getElementById("day-date").innerText = formattedDate;

}
updateDate();

const now = new Date();
let hours = now.getHours();
const minutes = String(now.getMinutes()).padStart(2, "0");
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
const formattedTime = `${String(hours).padStart(2, "0")} : ${minutes} ${ampm}`;
