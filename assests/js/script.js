document.getElementById("start-btn").addEventListener("click", RemoveLayer);

function RemoveLayer(){
    let overlay = document.getElementsByClassName('overlay');
    let username = document.getElementById("username").value;
    document.querySelector("header span").innerHTML = username;
    overlay[0].remove();
}