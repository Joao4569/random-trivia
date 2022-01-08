document.getElementById("start-button").addEventListener("click", function(event) {
    event.preventDefault();
    createUsernameArea();
});

/**
 * Once the user initiates play, this will create a username input area and a button
 * to confirm the users selection.
 * 
 */
function createUsernameArea() {
    let usernameArea = document.getElementById("game-area"); // Create username input area
    usernameArea.style.width = "50%";
    usernameArea.style.textAlign = "center";
    usernameArea.innerHTML = `
        <form method="POST" action="">
        <label for="username">Please create a Username:</label>
        <input type="text" id="username" name="username" placeholder="">
        </form>
        `;

    //let inputUsername = document.getElementById("username");
    //inputUsername.style.width = "50%";
    
    let button = document.getElementsByClassName("button"); // Create username selection button
    button[0].innerHTML = `
        <button id="confirm-username" type="submit">Done</button>
    `;
    document.getElementById("confirm-username").addEventListener("click", function(event) { // listen for selection of username
        event.preventDefault();
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
        event.preventDefault();
        selectTopic(username.value);
    });

    reEnterUsername.addEventListener("click", function (event) {
        event.preventDefault();
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
        event.preventDefault();
        
        if (checkAnswer() === currentQuestion.correctAnswer) {
            correctAnswer(currentQuestion.correctAnswer, username, topic, questionNumber, correctScore, inCorrectScore);
        } else {
            inCorrectAnswer(currentQuestion.correctAnswer, username, topic, questionNumber, correctScore, inCorrectScore);
        }
    });
}

/** 
 * This will return a question object given the supplied question number
 */
function selectQuestion(selectedTopic, questionNumber, correctScore, username) {
    let questions = [
        {
            question: "What was the first feature-length animated movie ever released?",
            topic: "movies",
            correctAnswer: "Snow White and the Seven Dwarfs",
            options: ["Lion King", "Bambi", "Snow White and the Seven Dwarfs", "The simpsons"]
        },
        {
            question: "In The Matrix, does Neo take the blue pill or the red pill?",
            topic: "movies",
            correctAnswer: "Red",
            options: ["Red", "Blue", "What Pill?", "Red then Blue"]
        },
        {
            question: "For what movie did Tom Hanks score his first Academy Award nomination?",
            topic: "movies",
            correctAnswer: "Big",
            options: ["Cast Away", "Toy Story", "The Terminal", "Big"]
        },
        {
            question: "The head of what kind of animal is front-and-center in an infamous scene from The Godfather?",
            topic: "movies",
            correctAnswer: "A horse",
            options: ["A horse", "A cow", "A jaguar", "The furry kind"]
        },
        {
            question: "In what 1976 thriller does Robert De Niro famously say “You talkin’ to me?”",
            topic: "movies",
            correctAnswer: "Taxi Driver",
            options: ["Godfather", "True Confessions", "Taxi Driver", "1900"]
        },
        {
            question: "For what movie did Steven Spielberg win his first Oscar for Best Director?",
            topic: "movies",
            correctAnswer: "Schindler’s List",
            options: ["Schindler’s List", "Jurassic Park", "Saving Private Ryan"]
        },
        {
            question: "What does “www” stand for in a website browser?",
            topic: "general-knowledge",
            correctAnswer: "World Wide Web",
            options: ["Wood Wide Web", "Why Will We", "Why Won't We", "World Wide Web"]
        },
        {
            question: "How long is an Olympic swimming pool (in meters)?",
            topic: "general-knowledge",
            correctAnswer: "50 meters",
            options: ["80 meters", "60 meters", "50 meters", "100 meters"]
        },
        {
            question: "What countries made up the original Axis powers in World War II?",
            topic: "general-knowledge",
            correctAnswer: "Germany, Italy, and Japan",
            options: ["Hawaii, Italy, and Japan", "Germany, Italy, and Japan", "Germany, Portugal, and Japan", "Germany, Italy, and Iceland"]
        },
        {
            question: "Which country do cities of Perth, Adelade & Brisbane belong to?",
            topic: "general-knowledge",
            correctAnswer: "Australia",
            options: ["Japan", "Jamaica", "Italy", "Australia"]
        },
        {
            question: "How many countries still have the shilling as currency?",
            topic: "general-knowledge",
            correctAnswer: "Four",
            options: ["Four", "Five", "fifty", "Three"]
        },
        {
            question: "What is the name of the biggest technology company in South Korea?",
            topic: "general-knowledge",
            correctAnswer: "Samsung",
            options: ["Mc Donalds", "Nokia", "Samsung", "Durex"]
        },
        {
            question: "What is the largest star in the solar system?",
            topic: "science",
            correctAnswer: "The Sun",
            options: ["The Sun", "The Moon", "Jupiter", "The North Star"]
        },
        {
            question: "What is the largest organ in the human body?",
            topic: "science",
            correctAnswer: "The Skin",
            options: ["The Skin", "The Heart", "The Liver", "The Ear"]
        },
        {
            question: "How many oceans contain sharks?",
            topic: "science",
            correctAnswer: "All of them",
            options: ["None of them", "All of them", "7", "58"]
        },
        {
            question: "“For every action, there is an equal and opposite reaction” is an example of one of these.",
            topic: "science",
            correctAnswer: "Newton’s Laws",
            options: ["Traffic Law", "No law", "Newton’s Laws", "Dogs paws"]
        },
        {
            question: "What is the tallest mountain in the world?",
            topic: "science",
            correctAnswer: "Mount Everest",
            options: ["Mount Rushmore", "Mount Kilimanjaro", "Himalayas", "Mount Everest"]
        },
        {
            question: "How many elements are listed in the periodic table?",
            topic: "science",
            correctAnswer: "118",
            options: ["112", "3", "181", "118"]
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
        event.preventDefault();
        displayQuestion(moviesAsTopic, username, 0, 0, 0);
    });

    generalKnowledge.addEventListener("click", function(event) {
        event.preventDefault();
        displayQuestion(generalKnowledgeAsTopic, username, 0, 0, 0);
    });

    science.addEventListener("click", function(event) {
        event.preventDefault();
        displayQuestion(scienceAsTopic, username, 0, 0, 0);
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
        event.preventDefault();
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
        event.preventDefault();
        questionNumber++ ;
        correctScore++ ;
        displayQuestion(topic, username, questionNumber, correctScore, inCorrectScore);
    });
    
}

function inCorrectAnswer(correctAnswer, username, topic, questionNumber, correctScore, inCorrectScore) {

    let inCorrectDisplay = document.getElementById("game-area");
    inCorrectDisplay.innerHTML = `
        <p>
            Unfortunately <span class="logo-style">${username}</span>, "${correctAnswer}" was the correct answer!
        </p>
    `;
    
    let continueOption = document.getElementsByClassName("button");
    continueOption[0].innerHTML = `
        <button id="continue" type="submit">Continue</button>
    `;

    let continueButton = document.getElementById("continue");
    continueButton.addEventListener("click", function(event) {
        event.preventDefault();
        questionNumber++ ;
        inCorrectScore++ ;
        displayQuestion(topic, username, questionNumber, correctScore, inCorrectScore);
    });
}
