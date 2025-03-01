const now = new Date();
let hours = now.getHours();
const minutes = String(now.getMinutes()).padStart(2, "0");
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
const formattedTime = `${String(hours).padStart(2, "0")} : ${minutes} ${ampm}`;
