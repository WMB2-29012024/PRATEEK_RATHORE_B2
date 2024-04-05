const form_user = document.getElementById("select");
const paraOption = document.getElementById("para1");
const genderElem = document.querySelectorAll('.gender')

form_user.addEventListener("submit", (e) => {
  e.preventDefault();
  let selectedGender;
  genderElem.forEach((e) => {
    if (e.checked) {
      selectedGender = e.value;
    }
  })
  paraOption.textContent = "Selected gender: " + selectedGender;

});