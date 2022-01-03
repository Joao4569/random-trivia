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
        <div>
            <p>Create a Username:</p>
            <form action="">
            <label for="username"></label>
            <input type="text" id="username" name="username" placeholder="Username" required>
            </form>
        </div>
        `;
    let button = document.getElementsByClassName("button");
    button[0].innerHTML = `
        <button type="submit" id="confirm-username">Done!</button>
    `;
    
}

function displayQuestion() {

}

function IncrementScore() {

}

function checkAnswer() {

}

