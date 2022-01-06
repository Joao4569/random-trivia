document.getElementById("start-button").addEventListener("click", function(event) {
    event.preventDefault;
    createUsername();
});

/**
 * Once the user initiates play, this will create a username input area and a button
 * to confirm the users selection.
 * 
 */
function createUsername() {
    let usernameArea = document.getElementById("game-area"); // Create username input area
    usernameArea.style.width = "30%";
    usernameArea.style.textAlign = "center";
    usernameArea.innerHTML = `
        <form method="POST" action="">
        <label for="username">Please create a Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter a username">
        </form>
        `;
    let button = document.getElementsByClassName("button"); // Create username selection button
    button[0].innerHTML = `
        <button id="confirm-username" type="submit">Done</button>
    `;
    document.getElementById("confirm-username").addEventListener("click", function(event) { // listen for selection of username
        event.preventDefault;
        confirmUsername();
    });
}

/**
 * This will set a generic username if none was selected by the user and create
 * a preview window with confirmation and correction buttons.
 */
function confirmUsername() {
    let username = document.getElementById("username");
        if(username.value === "") { // Set username if none is provided
            username.value = "User";
        }

    // Create username preview area and add style
    let usernamePreview = document.getElementById("game-area");
    usernamePreview.innerHTML = ` 
        <p>You have selected <span id="username-display">${username.value}</span> as your Username</p>
        `;

    let displayUsername = document.getElementById("username-display");
    displayUsername.style.fontFamily = "'Fredoka One', cursive";
    displayUsername.style.textDecoration = "underline";

    // Create confirmation and correction buttons, and add style
    let button = document.getElementsByClassName("button");
        button[0].innerHTML = `
            <button id="final-confirm-username" type="submit">Confirm</button>
            <button id="re-enter-username" type="submit">Try again</button>
            `;
    
    let confirmUsername = document.getElementById("final-confirm-username");
    confirmUsername.style.marginRight = "5vw";

    // Listen for user clicks and determine next function
    let reEnterUsername = document.getElementById("re-enter-username");

    confirmUsername.addEventListener("click", function() {
        displayQuestion(username.value);
    });

    reEnterUsername.addEventListener("click", function () {
        createUsername();
    });
    
}

function displayQuestion(username) {
    let questionArea = document.getElementById("game-area"); // Create Question area
    questionArea.innerHTML = `
        <p id="question">Question SetValue : SetValue</p>
        <div>
            <form method="POST" action="">
            <input type="radio" id="question1" name="answer" value="question1">
            <label for="question1"> Question1</label>
            <input type="radio" id="question2" name="answer" value="question2">
            <label for="question2"> Question2</label><br>
            <input type="radio" id="question3" name="answer" value="question3">
            <label for="question3"> Question3</label>
            <input type="radio" id="question4" name="answer" value="question4">
            <label for="question4"> Question4</label><br>
            </form>
        </div>
        `;

        let button = document.getElementsByClassName("button");
        button[0].innerHTML = `
            <button id="check-answer" type="button">Check Answer</button>
            `;
}

function IncrementScore() {

}

function checkAnswer() {

}

