
const changeImageButton = document.getElementById('change-image-button');
const imageUpload = document.getElementById('image-upload');
const profileImage = document.getElementById('profile-image');

/*Input yang di hidden diaktifkan lewat function ini, function ini jalan karna changeImageButton */
changeImageButton.addEventListener('click', () => {
    imageUpload.click(); 
});

//upload image function
imageUpload.addEventListener('change', () => {
    if (imageUpload.files && imageUpload.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
            profileImage.src = e.target.result; 
        }

        reader.readAsDataURL(imageUpload.files[0]);
    }
});