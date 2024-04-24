import { photoUploader } from "./uploadPhoto.js";

const editBtnElem = document.getElementById('editBtn');
const imagePreview = document.getElementById('preview');
const mainPopUpDisplay = document.querySelector(".mainPopUpDisplay");
const mainProfile = document.querySelector(".mainProfile");
let userImg = document.querySelector('#user-img')

const userPreviewImg = document.querySelector('#user-preview-img')
const userProfileInputElem = document.querySelector('#user-profile-input')
editBtnElem.addEventListener('change', function () {
    photoUploader(imagePreview, this.files);
});

mainProfile.addEventListener('click', () => {
    mainPopUpDisplay.style.display = 'initial';

});

userProfileInputElem.addEventListener('change', function () {
    photoUploader(userPreviewImg, this.files);
    userImg.src = userPreviewImg.src

});
