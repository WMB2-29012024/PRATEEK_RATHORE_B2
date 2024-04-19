// Get reference to the input and image element
const editBtnElem = document.getElementById('editBtn');
const imagePreview = document.getElementById('preview');
 const mainPopUpDisplay=document.getElementsByClassName("mainPopUpDisplay")
 const mainProfile=document.getElementsByClassName("mainProfile")

 mainProfile.addEventListener("click", (e) => {
    mainPopUpDisplay.style.display = "initial";
});


editBtnElem.addEventListener('change', function () {
    const file = this.files[0]; // Get the selected file
    if (file) {
        const reader = new FileReader(); // Initialize a FileReader object
       
        reader.onload = function (e) {
            imagePreview.style.display="initial"
            // Set the source of the image element to the result of FileReader
            imagePreview.src = e.target.result;
            // Reset the progress bar after loading is complete
            
        };
        // Read the selected file as a Data URL
        reader.readAsDataURL(file);
    } else {
        // If no file is selected, display a default image
        imagePreview.src = '#';
       
    }
});
