// app.js

document.addEventListener("DOMContentLoaded", function () {
  // Function to generate a random hex color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to change the background color
  function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
  }

  // Create a button and add event listener
  const button = document.createElement("button");
  button.textContent = "Change Color";
  button.addEventListener("click", changeBackgroundColor);

  // Append the button to the body
  document.body.appendChild(button);
});
