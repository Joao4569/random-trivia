document.getElementById("start-button").addEventListener("click", function(event) {
    event.preventDefault;
    setUsername();
});

/**
 * Once the user initiates play, then the user can select a username
 */
function setUsername() {
    let userNameArea = document.getElementById("game-area");
    userNameArea.style.width = "30%";
    userNameArea.style.textAlign = "center";
    userNameArea.innerHTML = `
            <form method="POST" action="">
            <label for="username">Please create a Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter a username">
            </form>
        `;
    let button = document.getElementsByClassName("button");
    button[0].innerHTML = `
        <button id="confirm-username" type="submit">Done!</button>
    `;
    
}

function displayQuestion() {

}

function IncrementScore() {

}

function checkAnswer() {

}

