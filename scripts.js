const buttons = document.querySelectorAll(".numbers button");
let selectedValue = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");

    selectedValue = button.textContent;
  });
});

document.getElementById("submit").addEventListener("click", () => {
    if (selectedValue) {
        document.querySelector(".main").style.display = "none";

        document.querySelector(".thanks").style.display = "flex";
    
        document.querySelector(".thanks span").textContent = selectedValue;
    } else {
      alert("Please select a number before submitting.");
    }
  });