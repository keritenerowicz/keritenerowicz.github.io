function choosePic() {
    const randomNum = Math.floor(Math.random() * 5);
    document.getElementById("profile_picture").src = "../assets/profile_pictures/" + String(randomNum) + ".jpeg";
}
window.onload = choosePic;