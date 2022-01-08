document.getElementById("start-button").addEventListener("click", function(event) {
    event.preventDefault;
    createUsernameArea();
});

/**
 * Once the user initiates play, this will create a username input area and a button
 * to confirm the users selection.
 * 
 */
function createUsernameArea() {
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
            alert("You have not entered a usename, Player 1 is the default");
            username.value = "Player 1";
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
            <button id="re-enter-username" type="submit">Re-Enter</button>
            `;
    
    let confirmUsername = document.getElementById("final-confirm-username");
    confirmUsername.style.marginRight = "5vw";

    // Listen for user clicks and determine next function
    let reEnterUsername = document.getElementById("re-enter-username");

    confirmUsername.addEventListener("click", function(event) {
        event.preventDefault;
        selectTopic(username.value);
    });

    reEnterUsername.addEventListener("click", function (event) {
        event.preventDefault;
        createUsernameArea();
    });
    
}

/**
 * This will display the given question and display if the answer is correct or not
*/
function displayQuestion(topic, username, questionNumber, correctScore, inCorrectScore) {
    

    let currentQuestion =  selectQuestion(topic, questionNumber, correctScore, username);

    let questionArea = document.getElementById("game-area"); // Display the game question
    questionArea.innerHTML = `
    <p id="question"> ${currentQuestion.question}</p>
    <div>
        <form method="POST" action="">
        <input type="radio" id="answer1" name="answer" value="${currentQuestion.options[0]}">
        <label for="answer1">${currentQuestion.options[0]}</label><br>
        <input type="radio" id="answer2" name="answer" value="${currentQuestion.options[1]}">
        <label for="answer2">${currentQuestion.options[1]}</label><br>
        <input type="radio" id="answer3" name="answer" value="${currentQuestion.options[2]}">
        <label for="answer3">${currentQuestion.options[2]}</label><br>
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
    form[0].style.textAlign = "left";
    
    let button = document.getElementsByClassName("button");
    button[0].innerHTML = `
        <p id="display-username" class="logo-style">
            ${username}
        </p>
        <p id="display-score" class="logo-style">
            Correct Answers: ${correctScore} / Incorrect Answers: ${inCorrectScore}
        </p>
        <button id="check-answer" type="button">Check Answer</button>
        `;

    let displayedUsername = document.getElementById("display-username");
    displayedUsername.style.marginTop = "2%";

    let displayedScore = document.getElementById("display-score");
    displayedScore.style.marginTop = "2%";

    let waitForConfirmation = document.getElementById("check-answer"); // Listen for event and display wether correct or not
    waitForConfirmation.addEventListener("click", function(event) {
        event.preventDefault;
        
        if (checkAnswer() === currentQuestion.correctAnswer) {
            correctAnswer(currentQuestion.correctAnswer, username, topic, questionNumber, correctScore, inCorrectScore);
        } else {
            alert(`Sorry, the correct answer was "${currentQuestion.correctAnswer}".`);
            questionNumber++;
            inCorrectScore++;
            displayQuestion(topic, username, questionNumber, correctScore, inCorrectScore);
        }
    });
}

/** 
 * This will return a question object given the supplied question number
 */
function selectQuestion(selectedTopic, questionNumber, correctScore, username) {
    let questions = [
        {
            question: "How are you?",
            topic: "general-knowledge",
            correctAnswer: "excellent",
            options: ["ok", "bad", "excellent", "so so"]
        },
        {
            question : "How is the weather?",
            topic : "science",
            correctAnswer : "sunny",
            options : ["rainy", "sunny", "snow", "thunder"]
        },
        {
            question : "What color car do you have?",
            topic : "general-knowledge",
            correctAnswer : "blue",
            options : ["blue", "red", "yellow", "brown"]
        },
        {
            question : "How many cars do you have?",
            topic : "general-knowledge",
            correctAnswer : "One",
            options : ["One", "Two", "Three", "Four"]
        }
    ];
    
    let questionsByTopic = [];
    for (let question of questions) {
        if (question.topic === selectedTopic) {
            questionsByTopic.push(question);
        }
    }

    if (questionNumber < questionsByTopic.length) { // Check if there is no more questions
        return questionsByTopic[questionNumber];
    } else if (questionNumber === questionsByTopic.length) {
        endGame(correctScore, questionNumber, username);
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
    }
}

function selectTopic(username) {
    let chooseTopic = document.getElementById("game-area");
    chooseTopic.innerHTML = `
        <p>
            Which Topic are you interested in <span class="logo-style">${username}</span> ?
        </p>
    `;

    let button = document.getElementsByClassName("button");
    button[0].innerHTML = `
        <button id="movies" type="submit">Movies</button>
        <button id="general-knowledge" type="submit">General Knowledge</button>
        <button id="science" type="submit">Science</button>
        `;

    let movies = document.getElementById("movies");
    let moviesAsTopic = movies.getAttribute("id");

    let generalKnowledge = document.getElementById("general-knowledge");
    let generalKnowledgeAsTopic = generalKnowledge.getAttribute("id");

    let science = document.getElementById("science");
    let scienceAsTopic = science.getAttribute("id");

    movies.addEventListener("click", function(event) {
        event.preventDefault;
        displayQuestion(moviesAsTopic, username, 0, 0, 0)
    });

    generalKnowledge.addEventListener("click", function(event) {
        event.preventDefault;
        displayQuestion(generalKnowledgeAsTopic, username, 0, 0, 0);
    });

    science.addEventListener("click", function(event) {
        event.preventDefault;
        displayQuestion(scienceAsTopic, username, 0, 0, 0)
    });
}

function endGame(correctScore, questionNumber, username) {

    let endGameArea = document.getElementById("game-area");
    endGameArea.innerHTML = `
        <p>
            Thank you <span class="logo-style">${username}</span> for playing <span class="logo-style">Random Trivia</span> <i class="far fa-question-circle"></i>
        </p>
    
    `;

    let scoreAndNewGame = document.getElementsByClassName("button");
    scoreAndNewGame[0].innerHTML = `
        <p id="result">You scored <span class="logo-style">${correctScore}</span> out of <span class="logo-style">${questionNumber}</span>.</p>
        <button id="start-new-game" type="submit">Start a new game</button>
    `;

    let result = document.getElementById("result");
    result.style.marginTop = "10%";

    let startNewGame = document.getElementById("start-new-game");
    startNewGame.addEventListener("click", function(event) {
        event.preventDefault;
        selectTopic(username);
    });
}

function correctAnswer(currentAnswer, username, topic, questionNumber, correctScore, inCorrectScore) {

    let correctDisplay = document.getElementById("game-area");
    correctDisplay.innerHTML = `
        <p>
            Well done <span class="logo-style">${username}</span>, "${currentAnswer}" is the correct answer!
        </p>
    `;
    
    let continueOption = document.getElementsByClassName("button");
    continueOption[0].innerHTML = `
        <button id="continue" type="submit">Continue</button>
    `;

    let continueButton = document.getElementById("continue");
    continueButton.addEventListener("click", function(event) {
        event.preventDefault;
        questionNumber++ ;
        correctScore++ ;
        displayQuestion(topic, username, questionNumber, correctScore, inCorrectScore);
    })
    
}

function incorrectAnswer() {

}
