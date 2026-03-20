function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(items) {
    return items[randomInt(0, items.length - 1)];
}

function setFeedback(id, correct, message) {
    const node = document.getElementById(id);
    node.className = `feedback ${correct ? "correct" : "incorrect"}`;
    node.textContent = message;
}

function clearFeedback(id) {
    const node = document.getElementById(id);
    node.className = "feedback";
    node.textContent = "";
}

function resetInputs(ids) {
    ids.forEach((id) => {
        const node = document.getElementById(id);
        if (node) {
            node.value = "";
        }
    });
}

function refreshMath() {
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
    }
}

function nearlyEqual(a, b, epsilon = 0.01) {
    return Math.abs(Number(a) - Number(b)) <= epsilon;
}

window.lessonUtils = {
    clearFeedback,
    nearlyEqual,
    pick,
    randomInt,
    refreshMath,
    resetInputs,
    setFeedback
};
