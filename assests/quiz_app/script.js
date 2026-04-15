

// references 
// const quizDisplay = document.getElementById( "display" );
let timeLeft = document.querySelector( ".time_left" );
let quizContainer = document.getElementById( "container" );
let nextBtn = document.getElementById( "next_btn" );
let countOfQuestion = document.querySelector( ".number_of_question" );
let displayContainer = document.getElementById( "display_container" );
let scoreContainer = document.querySelector( ".score_container" );
let restart = document.getElementById( "restart" );
let userScore = document.getElementById( "user_score" );
let startScreen = document.querySelector( ".start_screen" );
let startBtn = document.getElementById( "start_button" );
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

// question and answer array

const quizArray = [{
    id: "0",
    question: "Which is the largest animal in the world?",
    options: ["Giraffe", "Blue whale", "Elephant", "Shark"],
    correct: "Blue whale"},
{ id: "1",
    question: "Which is the largest desert in the world?",
    options: ["Antarctic", "Gobi","Arabian", "Sahara"],
    correct: "Antarctic" },
{ id: "2",
    question: "Which is the smallest country in the world?",
    options: ["Vatican", "Saint Kits & Nevis", "Liechtenstein ", "Bhutan"],
    correct: "Vatican"}

];

//restart quiz 
restart.addEventListener( "click", () =>
{ 
    initial();
    displayContainer.classList.remove( "hide" );
    scoreContainer.classList.add( "hide" );
} );

// next btn 
nextBtn.addEventListener( "click", ( displayNext = () =>
{
    // questCount++
    questionCount += 1;
    // last question?
    if ( questionCount == quizArray.length )
    {
        // hide question show score 
        displayContainer.classList.add( "hide" );
        scoreContainer.classList.remove( "hide" );
        //score
        userScore.innerHTML = " Your score is " + scoreCount + " out of " + questionCount;
    }
    else
    {
        //show questCount
        countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";
        //show quiz 
        quizDisplay( questionCount );
        count = 11;
        clearInterval( countdown );
        timerDisplay();
    }
} ) );




// timer
const timerDisplay = () =>
{ 
    countdown = setInterval( () =>
    { 
        count--;
        timeLeft.innerHTML = `${count}s`;
        if ( count == 0 )
        {
            clearInterval( countdown );
            displayNext();
        }
    }, 1000);
};



// display quiz
const quizDisplay = ( questionCount ) =>
{ 
    let quizCards = document.querySelectorAll( ".container-mid" );
    // cards hidden 
    quizCards.forEach( ( card ) =>
    { 
        card.classList.add( "hide" );
    } );
    //show current question card
    quizCards[questionCount].classList.remove( "hide" );
};

// console.log(quizArray);

function quizCreator(params) {
    quizArray.sort( () => Math.random() - 0.5 );
    // generate quiz 
    for ( let i of quizArray )
    {
        // options randomized 
        i.options.sort( () => Math.random() - 0.5 );
        // question number
        let div = document.createElement( "div" );
        div.classList.add( "container-mid" );
        // question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Questions";
        // question 
        let question_Div = document.createElement( "p" );
        question_Div.classList.add( "question" );
        question_Div.innerHTML = i.question;
        div.appendChild( question_Div );
        //options
        div.innerHTML += `
        <button class="option-div" onclick="checker(this)" >${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)" >${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)" >${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)" >${i.options[3]}</button>
        `;
        quizContainer.appendChild( div );
    }
}

// checker function 
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName( "container-mid" )[questionCount];
    let options = question.querySelectorAll( ".option-div" );

    //correct answer 
    if ( userSolution === quizArray[questionCount].correct )
    {
        userOption.classList.add( "correct" );
        scoreCount++;
        // clearInterval( countdown );
    }
    else {
        userOption.classList.add( "incorrect" );
        options.forEach( ( element ) =>
        { 
            options.forEach( ( element ) =>
            { 
                if ( element.innerText == quizArray[questionCount].correct )
                {
                    element.classList.add( "correct" );
                }
            } );
        } );

        //stop timer 
        clearInterval( countdown );
        // disable all options 
        options.forEach( ( element ) =>
        {
            element.disabled = true;
        })
    }
}


// initial setup
function initial ()
{
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearTimeout( countdown );
    timerDisplay();
    quizCreator();
    quizDisplay( questionCount );
} 

// start button 
startBtn.addEventListener( "click", () =>
{ 
    startScreen.classList.add( "hide" );
    displayContainer.classList.remove( "hide" );
    initial();
} );

// hide quiz display start screen 
window.onload = () =>
{
    startScreen.classList.remove( "hide" );
    displayContainer.classList.add( "hide" );

}; 
