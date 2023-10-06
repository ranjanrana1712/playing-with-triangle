const quizForm = document.querySelector(".quiz");

const submitAnswerBtn = document.querySelector("#submit-answer-btn");

const output1 = document.querySelector("#output");

 

const correctAnswer = ["90","right angle"];

function calculateScore() {
    let score  = 0;
    let index = 0;
    // Absolutely! It looks like you're going through each value in formResults and checking if it's equal to the corresponding correct answer in the correctAnswer array. If it is, you're adding 1 to the score. It's like checking each answer in a quiz and giving a point for each correct answer
    const formResults = new FormData(quizForm);uu

    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index = index +1;
    }
    // console.log(score);
    output1.innerText = "your score is " + score;

}

submitAnswerBtn.addEventListener('click', calculateScore);