document.getElementById("start-button").addEventListener("click", function() {
    setUsername();
})

/**
 * Once the user initiates play, then the user can select a username
 */
function setUsername() {
    document.getElementById("game-area").innerHTML = `
        <div>
            <p>Create a Username:</p>
        </div>
        <form action="">
        <label for="Username"></label>
        <input type="text" id="Username" name="Username">
        </form>
        `;
}

function displayQuestion() {

}

function IncrementScore() {

}

function checkAnswer() {

}

