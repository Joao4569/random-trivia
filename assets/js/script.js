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
        alert("yes it works")
    });

    reEnterUsername.addEventListener("click", function () {
        createUsername();
    });
    
}

function displayQuestion() {

}

function IncrementScore() {

}

function checkAnswer() {

}

