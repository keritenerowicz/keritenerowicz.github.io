function choosePic() {
    const randomNum = Math.floor(Math.random() * 11);
    document.getElementById("profile_picture").src = "../assets/profile_pictures/" + String(randomNum) + ".jpg";
}
window.onload = choosePic;