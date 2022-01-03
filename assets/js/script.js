document.getElementById("start-button").addEventListener("click", function() {
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
            <label for="Username"></label>
            <input type="text" id="Username" name="Username">
            </form>
        </div>
        `;
    let button = document.getElementsByClassName("button");
    button[0].innerHTML = `
        <button id="confirm-username">Done!</button>
    `;
    document.getElementById("confirm-username").addEventListener("click", function() {
        alert("Username Confirmed");
    });
}

function displayQuestion() {

}

function IncrementScore() {

}

function checkAnswer() {

}

