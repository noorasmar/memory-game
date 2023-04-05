// document.getElementById("start-btn").addEventListener("click", removeLayer);
const flipCards = document.querySelectorAll(".flip-card");
flipCards.forEach(function(flipCard) {
    flipCard.addEventListener("click", function() {
        const flipCardInner = flipCard.querySelector(".flip-card-inner");
        flipCardInner.classList.add("flipped");
        alert(flipCard.dataset.card);
    });
});

function removeLayer(){
    let overlay = document.getElementsByClassName('overlay');
    let username = document.getElementById("username").value;
    document.querySelector("header span").innerHTML = username;
    overlay[0].remove();
}