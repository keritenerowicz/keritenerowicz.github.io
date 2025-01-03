function choosePic() {
    const randomNum = Math.floor(Math.random() * 8);
    document.getElementById("profile_picture").src = "../assets/profile_pictures/" + String(randomNum) + ".png";
}
window.onload = choosePic;