var myPics = [
    "\u{1F30D}",
    "\u{1F365}",
    "\u{1F341}",
    "\u{1F354}",
    "\u{1F337}",
    "\u{1F334}",
    "\u{1F31A}",
    "\u{1F353}",
];

var cards = document.getElementsByClassName("card");
var backs = document.getElementsByClassName("back");
var moveSpn = document.getElementById("move");
var numberOfCardsFliped = 0;
var arrStatus = [];
var arrForFlip = [];
var Win = 0;
var moves = 0;
moveSpn.textContent = moves;
changePressContent("press start to start the game :)");

function changePressContent(text) {
    document.getElementById("press").textContent = text;
}

function firstFilpCards() {
    flipAllCard();
    setTimeout(function () {
        flipAllCard();
    }, 1500);
}

function changeStartStyle() {
    changePressContent(null);
    const startb = document.getElementById("start-btn");
    startb.disabled = true;
    startb.style.backgroundColor = "rgb(38, 38, 38)";
    startb.style.color = "rgb(230, 230, 230)";
}

function setTimeCount(count) {
    var spn = document.getElementById("count");

    var timer = null;
    (function countDown() {
        spn.textContent = count;

        setTimeout(function () {
            if (count !== 0) {
                timer = setTimeout(countDown, 1000);
                count--;
            } else {
                alert("GAME OVER :(");
                document.location.reload();
            }
        }, 1000);
    })();
}

function reset() {
    document.location.reload();
}

function getRandomInt(quantity, max) {
    const set = new Set();
    while (set.size < quantity) {
        set.add(Math.floor(Math.random() * max));
    }
    return set;
}

function flipCards(listOfCards) {
    for (var i = 0; i < listOfCards.length; i++) {
        listOfCards[i].classList.toggle("flipCard");
    }
}

function flipAndSaveCard(index) {
    flipCards([cards[index]]);
    arrStatus.push(backs[index].innerHTML);
    arrForFlip.push(index);
}

function incrementMovesNumber(n) {
    moves += n;
    moveSpn.textContent = moves;
}

function checkMoves() {
    if (moves == 19) {
        alert("YOUR MOVES ARE OVER :( " + " you finish " + Win + " groups");
        document.location.reload();
    }
}

function checkIfWin() {
    if (Win == 7) {
        alert("YOU WIN :)");
        document.location.reload();
    }
}

function similaerEmojis(arrStatus1, arrStatus2, arrForFlip1, arrForFlip2) {
    return arrStatus1 == arrStatus2 && arrForFlip1 != arrForFlip2
        ? true
        : false;
}

function stayWinnerFlipes() {
    checkIfWin();
    numberOfCardsFliped = 1;
    Win++;
}

function creatDev(devName, devClassName) {
    devName = document.createElement("div");
    devName.className = devClassName;

    return devName;
}

function flipedDone() {
    return numberOfCardsFliped == 3 ? true : false;
}

function reflipLosedCards(firstCard, secondCard) {
    flipCards([cards[firstCard], cards[secondCard]]);
    numberOfCardsFliped = 1;
}

function drowEmoji(numberChanged) {
    var inde = getRandomInt(8, 8);
    var emo;
    for (var i = 0; i < 8; i++) {
        emo = [...inde][i];
        backs[i + numberChanged].innerHTML = myPics[emo];
    }
}

function flipAllCard() {
    flipCards(cards);
}

function getEmojisReady() {
    drowEmoji(0);
    drowEmoji(8);
}

function setNextCards() {
    var nextC = [];
    for (var i = 0; i < 2; i++) {
        nextC[i] = {
            emoje: arrStatus.shift(),
            flp: arrForFlip.shift(),
        };
    }
    return nextC;
}

function getCardsReady() {
    for (var i = 0; i < 16; i++) {
        let v = document.querySelector(".game");
        let card, front, back;
        card = creatDev(card, "card");
        front = creatDev(front, "front");
        back = creatDev(back, "back");

        card.onclick = function () {
            var index = Array.from(cards).indexOf(this);
            flipAndSaveCard(index);
            incrementMovesNumber(1);
            numberOfCardsFliped++;
            checkMoves();
            if (flipedDone()) {
                var next = setNextCards();
                if (
                    similaerEmojis(
                        next[0].emoje,
                        next[1].emoje,
                        next[0].flp,
                        next[1].flp
                    )
                ) {
                    stayWinnerFlipes();
                } else {
                    reflipLosedCards(next[0].flp, next[1].flp);
                }
            }
        };
        card.appendChild(front);
        card.appendChild(back);
        v.appendChild(card);
    }
}

function start() {
    getCardsReady();
    getEmojisReady();
    changeStartStyle();
    firstFilpCards();
    setTimeCount(60);
}
