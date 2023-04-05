document.getElementById("start-btn").addEventListener("click", RemoveLayer);

function RemoveLayer(){
    let overlay = document.getElementsByClassName('overlay');
    overlay[0].remove();
}