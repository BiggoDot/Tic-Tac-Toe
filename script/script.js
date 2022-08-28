const boxes = document.querySelectorAll('.line__item');
const lineGrid = document.querySelector('.line__inside');
const resetBtn = document.querySelector('.reset__button');
const winText = document.querySelector('.anouncment__winner');
let circleTime = false;

function putCross(e) {
    e.target.classList.add('cross__image');
}

function putCircle(e) {
    e.target.classList.add('circle__image');
}

function disable(e) {
    e.target.disabled = true;
}

function turnCount() {
    circleTime = !circleTime;
}


function circle(box) {
    box.removeEventListener('click', putCross);
    box.addEventListener('click', putCircle);
    box.addEventListener('click', disable);
}

function cross(box) {
    box.removeEventListener('click', putCircle);
    box.addEventListener('click', putCross);
    box.addEventListener('click', disable);
}

function putBoth() {
    boxes.forEach((box) => {
        box.addEventListener('click', turnCount);

        if (!circleTime) {
            return cross(box);
        }

        if (circleTime) {
            return circle(box);
        }
    });
}

function outcome(winner) {
    if (boxes[0].classList.contains(winner)
        && boxes[1].classList.contains(winner)
        && boxes[2].classList.contains(winner)) {
        boxes[0].classList.add('highlight');
        boxes[1].classList.add('highlight');
        boxes[2].classList.add('highlight');
        anounceWinner(winner);
        boxes.forEach((box) => box.disabled = true);
        return;
    }

    if (boxes[3].classList.contains(winner)
        && boxes[4].classList.contains(winner)
        && boxes[5].classList.contains(winner)) {
        boxes[3].classList.add('highlight');
        boxes[4].classList.add('highlight');
        boxes[5].classList.add('highlight');
        anounceWinner(winner);
        boxes.forEach((box) => box.disabled = true);
        return;
    }

    if (boxes[6].classList.contains(winner)
        && boxes[7].classList.contains(winner)
        && boxes[8].classList.contains(winner)) {
        boxes[6].classList.add('highlight');
        boxes[7].classList.add('highlight');
        boxes[8].classList.add('highlight');
        anounceWinner(winner);
        boxes.forEach((box) => box.disabled = true);
        return;
    }

    if (boxes[0].classList.contains(winner)
        && boxes[3].classList.contains(winner)
        && boxes[6].classList.contains(winner)) {
        boxes[0].classList.add('highlight');
        boxes[3].classList.add('highlight');
        boxes[6].classList.add('highlight');
        anounceWinner(winner);
        boxes.forEach((box) => box.disabled = true);
        return;
    }

    if (boxes[2].classList.contains(winner)
        && boxes[5].classList.contains(winner)
        && boxes[8].classList.contains(winner)) {
        boxes[2].classList.add('highlight');
        boxes[5].classList.add('highlight');
        boxes[8].classList.add('highlight');
        anounceWinner(winner);
        boxes.forEach((box) => box.disabled = true);
        return;
    }

    if (boxes[1].classList.contains(winner)
        && boxes[4].classList.contains(winner)
        && boxes[7].classList.contains(winner)) {
        boxes[1].classList.add('highlight');
        boxes[4].classList.add('highlight');
        boxes[7].classList.add('highlight');
        anounceWinner(winner);
        boxes.forEach((box) => box.disabled = true);
        return;
    }

    if (boxes[0].classList.contains(winner)
        && boxes[4].classList.contains(winner)
        && boxes[8].classList.contains(winner)) {
        boxes[0].classList.add('highlight');
        boxes[4].classList.add('highlight');
        boxes[8].classList.add('highlight');
        anounceWinner(winner);
        boxes.forEach((box) => box.disabled = true);
        return;
    }

    if (boxes[2].classList.contains(winner)
        && boxes[4].classList.contains(winner)
        && boxes[6].classList.contains(winner)) {
        boxes[2].classList.add('highlight');
        boxes[4].classList.add('highlight');
        boxes[6].classList.add('highlight');
        anounceWinner(winner);
        boxes.forEach((box) => box.disabled = true);
        return;
    }

    if (boxes[0].disabled === true
        && boxes[1].disabled === true
        && boxes[2].disabled === true
        && boxes[3].disabled === true
        && boxes[4].disabled === true
        && boxes[5].disabled === true
        && boxes[6].disabled === true
        && boxes[7].disabled === true
        && boxes[8].disabled === true) {
        winText.textContent = "And the winner is No One!"
    }
}

function anounceWinner(winner) {
    if (winner === 'circle__image') {
        winText.textContent = 'And the winner is Circle!'
    }
    if (winner === 'cross__image') {
        winText.textContent = 'And the winner is Cross!'
    }
}

function showWinner(e) {
    if (e.target.classList.contains('circle__image')) {
        outcome('circle__image');
    }
    if (e.target.classList.contains('cross__image')) {
        outcome('cross__image');
    }
}

function reset() {
    circleTime = false;
    boxes.forEach((box) => {
        box.classList.remove('cross__image');
        box.classList.remove('circle__image');
        box.classList.remove('highlight');
        box.disabled = false;
        winText.textContent = 'And the winner is ...';
        box.removeEventListener('click', turnCount);
        box.removeEventListener('click', disable)
    })
}

lineGrid.addEventListener('mouseup', putBoth);
lineGrid.addEventListener('click', showWinner);
resetBtn.addEventListener('click', reset);
