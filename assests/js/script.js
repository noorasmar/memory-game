document.getElementById("start-btn").addEventListener("click", removeLayer);
const flipCards = document.querySelectorAll(".flip-card:not(.close)");
let arr = []
const cards = []
let count = 0

flipCards.forEach(function(flipCard) {
    flipCard.addEventListener("click", function() {
        const flipCardInner = flipCard.querySelector(".flip-card-inner");
        flipCardInner.classList.add("flipped")
        cards.push(flipCardInner)
        setData(flipCard.dataset.card)
    });
});

function removeLayer(){
    let overlay = document.getElementsByClassName('overlay');
    let username = document.getElementById("username").value;
    document.querySelector("header span").innerHTML = username;
    overlay[0].remove();
}

function setData(data){
    if(arr.length < 2)
    {
        arr.push(data)
    }
    if(arr.length === 2){
        const result = checkData(arr[0], arr[1])
        if(result){
            if(cards.length === 8){
                let success = document.getElementsByClassName('success');
                success[0].classList.add('appear');
            }
            console.log(cards.length)
        }else{
            setTimeout(() => {
                cards[cards.length-1].classList.remove('flipped')
                cards[cards.length-2].classList.remove('flipped')
                cards.pop()
                cards.pop()
            }, 1000);
            count++
            document.getElementById('count').innerText = count
        }
        arr.pop()
        arr.pop()
    }
}

function checkData(data1, data2){
    return data1 === data2
}