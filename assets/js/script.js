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
            username.value = "User 1";
        }

    // Create username preview area and add style
    let usernamePreview = document.getElementById("game-area");
    usernamePreview.innerHTML = ` 
        <p>You have selected <span id="username-display">${username.value}</span> as your Username</p>
        `;

    let displayUsername = document.getElementById("username-display");
    displayUsername.setAttribute("class", "logo-style");
    

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
        displayQuestion(username.value, 0, 0);
    });

    reEnterUsername.addEventListener("click", function () {
        createUsername();
    });
    
}

/**
 * This will display the given question and display if the answer is correct or not
*/
function displayQuestion(username, questionNumber, correctScore) {

    let currentQuestion =  selectQuestion(questionNumber);

    let questionArea = document.getElementById("game-area"); // Display the game question
    questionArea.innerHTML = `
    <p id="question"> ${currentQuestion.question}</p>
    <div>
        <form method="POST" action="">
        <input type="radio" id="answer1" name="answer" value="${currentQuestion.options[0]}">
        <label for="answer1">${currentQuestion.options[0]}</label>
        <input type="radio" id="answer2" name="answer" value="${currentQuestion.options[1]}">
        <label for="answer2">${currentQuestion.options[1]}</label><br>
        <input type="radio" id="answer3" name="answer" value="${currentQuestion.options[2]}">
        <label for="answer3">${currentQuestion.options[2]}</label>
        <input type="radio" id="answer4" name="answer" value="${currentQuestion.options[3]}">
        <label for="answer4">${currentQuestion.options[3]}</label><br>
        </form>
    </div>
    `;

    let question = document.getElementById("question"); // Style the game question
    question.style.borderBottom = "5px solid #ff6600";
    question.style.paddingBottom = "10px";
    
    let form = document.getElementsByTagName("form");
    form[0].style.paddingTop = "10px";
    
    let button = document.getElementsByClassName("button");
    button[0].innerHTML = `
        <p id="display-username" class="logo-style">
            ${username}
        </p>
        <p>
            Score ${correctScore} / ${questionNumber + 1}
        </p>
        <button id="check-answer" type="button">Check Answer</button>
        `;

    let displayedUsername = document.getElementById("display-username");
    displayedUsername.style.marginTop = "5%";

    let waitForConfirmation = document.getElementById("check-answer"); // Listen for event and display wether correct or not
    waitForConfirmation.addEventListener("click", function() {
        
        if (checkAnswer() === currentQuestion.correctAnswer) {
            alert("You answered correctly!");
            let newQuestionNumber = questionNumber + 1;
            let newCorrectScore = correctScore + 1;
            displayQuestion(username, newQuestionNumber, newCorrectScore);
        } else {
            alert("Incorrect!!!");
        }
    });

   
    
}

/** 
 * This will return a question object given the supplied question number
 */
function selectQuestion(questionNumber) {
    let questions = [
        {
            question: "How are you?",
            difficulty: "easy",
            correctAnswer: "excellent",
            options: ["excellent", "bad", "ok", "so so"]
        },
        {
            question : "How is the weather?",
            difficulty : "easy",
            correctAnswer : "sunny",
            options : ["sunny", "rainy", "snow", "thunder"]
        },
        {
            question : "What color car do you have?",
            difficulty : "easy",
            correctAnswer : "blue",
            options : ["blue", "red", "yellow", "brown"]
        },
        {
            question : "How many cars do you have?",
            difficulty : "easy",
            correctAnswer : "One",
            options : ["One", "Two", "Three", "Four"]
        }
    ];
    
    if (questionNumber < questions.length) { // Check if there is no more questions
        return questions[questionNumber];
    } else {
        alert("sorry no more questions for you!")
    }
    
}

/**
 * This will check which answer was selected and return its' value.
  */
function checkAnswer() {

    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");

    if (answer1.checked) {
        return answer1.getAttribute("value");
    } else if (answer2.checked) {
        return answer2.getAttribute("value");
    } else if (answer3.checked) {
        return answer3.getAttribute("value");
    } else if (answer4.checked) {
        return answer4.getAttribute("value");
    } else {
        alert("Please select an answer")
    }

    
}

