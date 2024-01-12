const button = document.querySelector("button");
const data = document.querySelector(".data");

button.addEventListener("click", () => {
  const dayValue = document.querySelector("#day").value;
  //   const monthValue = document.querySelector("#month").value;
  //   const yearValue = document.querySelector("#year").value;
  const dayParagraph = document.querySelector(".day-paragraph");
  if (dayValue > 31) {
    dayParagraph.innerHTML = "Must be a valid day";
    dayParagraph.style.color = "red";
    data.style.color = "red";
  }
});
