const button = document.querySelector("button");
const data = document.querySelectorAll(".data");
const inputs = document.querySelectorAll(".inputs");

button.addEventListener("click", () => {
  const dayValue = document.querySelector("#day").value;
  const monthValue = document.querySelector("#month").value;
  const yearValue = document.querySelector("#year").value;
  const dayParagraph = document.querySelector(".day-paragraph");
  const monthParagraph = document.querySelector(".month-paragraph");
  const yearParagraph = document.querySelector(".year-paragraph");
  const calculatedYear = document.querySelector("#calculated-year");
  const calculatedMonth = document.querySelector("#calculated-month");
  const calculatedDay = document.querySelector("#calculated-day");
  //Validation for missing values
  if (dayValue == "") {
    dayParagraph.innerText = "This field is required";
    dayParagraph.classList.add("active");
    data.forEach((el) => el.classList.add("valid"));
    inputs.forEach((el) => el.classList.add("valid"));
  } else if (dayValue !== "") {
    dayParagraph.innerText = "";
    dayParagraph.classList.remove("active");
    data.forEach((el) => el.classList.remove("valid"));
    inputs.forEach((el) => el.classList.remove("valid"));
  }
  if (monthValue === "") {
    monthParagraph.innerText = "This field is required";
    monthParagraph.classList.add("active");
    data.forEach((el) => el.classList.add("valid"));
    inputs.forEach((el) => el.classList.add("valid"));
  } else if (monthValue !== "") {
    monthParagraph.innerText = "";
    monthParagraph.classList.remove("active");
    data.forEach((el) => el.classList.remove("valid"));
    inputs.forEach((el) => el.classList.remove("valid"));
  }
  if (yearValue === "") {
    yearParagraph.innerText = "This field is required";
    yearParagraph.classList.add("active");
    data.forEach((el) => el.classList.add("valid"));
    inputs.forEach((el) => el.classList.add("valid"));
  } else if (yearValue !== "") {
    yearParagraph.innerText = "";
    yearParagraph.classList.remove("active");
    data.forEach((el) => el.classList.remove("valid"));
    inputs.forEach((el) => el.classList.remove("valid"));
    if (monthValue == "") {
      data.forEach((el) => el.classList.add("valid"));
      inputs.forEach((el) => el.classList.add("valid"));
    }
    if (dayValue == "") {
      data.forEach((el) => el.classList.add("valid"));
      inputs.forEach((el) => el.classList.add("valid"));
    }
  }

  //Validation for correct values
  parseInt(dayValue);
  parseInt(monthValue);
  parseInt(yearValue);
  if (dayValue > 31) {
    dayParagraph.innerText = "Must be a valid day";
    dayParagraph.classList.add("active");
    data.forEach((el) => el.classList.add("valid"));
    inputs.forEach((el) => el.classList.add("valid"));
  }
  if (monthValue > 12) {
    monthParagraph.innerText = "Must be a valid month";
    monthParagraph.classList.add("active");
    data.forEach((el) => el.classList.add("valid"));
    inputs.forEach((el) => el.classList.add("valid"));
  }
  if (yearValue > 2024) {
    yearParagraph.innerText = "Must be in the past";
    yearParagraph.classList.add("active");
    data.forEach((el) => el.classList.add("valid"));
    inputs.forEach((el) => el.classList.add("valid"));
  }
  if (monthValue == 2 && dayValue > 28) {
    dayParagraph.innerText = "Must be a valid day";
    dayParagraph.classList.add("active");
    data.forEach((el) => el.classList.add("valid"));
    inputs.forEach((el) => el.classList.add("valid"));
  }
  const leapYear = yearValue % 4;
  const leapYearSecondSituation = yearValue % 400;
  if (leapYear == 0) {
    if (monthValue == 2)
      if (dayValue > 29) {
        dayParagraph.innerText = "Must be a valid day";
        dayParagraph.classList.add("active");
        data.forEach((el) => el.classList.add("valid"));
        inputs.forEach((el) => el.classList.add("valid"));
      } else {
        dayParagraph.innerText = "";
        dayParagraph.classList.remove("active");
        data.forEach((el) => el.classList.remove("valid"));
        inputs.forEach((el) => el.classList.remove("valid"));
      }
  }
  if (leapYearSecondSituation !== 0) {
    if (monthValue == 2) {
      if (dayValue >= 29) {
        dayParagraph.innerText = "Must be a valid day";
        dayParagraph.classList.add("active");
        data.forEach((el) => el.classList.add("valid"));
        inputs.forEach((el) => el.classList.add("valid"));
      } else {
        dayParagraph.innerText = "";
        dayParagraph.classList.remove("active");
        data.forEach((el) => el.classList.remove("valid"));
        inputs.forEach((el) => el.classList.remove("valid"));
      }
    }
  }

  const now = new Date();
  const dayNow = parseInt(now.getDate());
  const monthNow = parseInt(now.getMonth() + 1);
  const yearNow = parseInt(now.getFullYear());
  if (dayValue == "") {
    calculatedDay.innerText = "--";
  } else if (monthValue == "") {
    calculatedMonth.innerText = "--";
  } else if (yearValue == "") {
    calculatedYear.innerText = "--";
  } else {
    if (monthValue >= monthNow && dayValue > dayNow) {
      let yearCalculation = yearNow - yearValue - 1;
      calculatedYear.innerText = Math.abs(yearCalculation);
    } else {
      let yearCalculation = yearNow - yearValue;
      calculatedYear.innerText = Math.abs(yearCalculation);
    }

    const monthCalculation = monthNow - monthValue;
    calculatedMonth.innerText = Math.abs(monthCalculation);

    const dayCalculation = dayValue - dayNow;
    calculatedDay.innerText = Math.abs(dayCalculation);
  }
});
