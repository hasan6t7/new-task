
// toogle to blog 

document.getElementById("second").addEventListener("click", function (event) {
  window.location.href = "./blog.html";
});



// complete button 


const completes = document.querySelectorAll(".complete-btn");
for (let i = 0; i < completes.length; i++) {
  let complete = completes[i];
  complete.addEventListener("click", function (event) {
    event.preventDefault();

    alert("Board Updated Successfully");
    let assaignleft = document.getElementById("assaign-left");
    let convertedAssaignLeft = parseInt(assaignleft.innerText);
    let newAssaignLeft = convertedAssaignLeft - 1;
    assaignleft.innerText = newAssaignLeft;
    let assaignDone = document.getElementById("assaign-done");
    let convertedAssaignDone = parseInt(assaignDone.innerText);
    let newAssaignDone = convertedAssaignDone + 1;
    assaignDone.innerText = newAssaignDone;

    if (newAssaignLeft === 0) {
      alert("congrates!!! You have completed all the current task");
    }

    let title = event.target.parentNode.parentNode.children[1].innerText;
    const activitySide = document.getElementById("activity-side");
    const p = document.createElement("p");
    p.innerHTML = `
    <p class = "history mt-5">you have completed the task ${title} at ${formattedTime}</p>
    
    `;
    activitySide.appendChild(p);

    complete.disabled = "true";
  });
}


// theme color button 


function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
document.getElementById("theme-btn").addEventListener("click", function () {
  const body = document.getElementById("body");
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
});



// clear history 

document
  .getElementById("clear-history")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let historyElements = document.querySelectorAll(".history");

    for (let i = 0; i < historyElements.length; i++) {
      historyElements[i].parentNode.removeChild(historyElements[i]);
    }
  });
