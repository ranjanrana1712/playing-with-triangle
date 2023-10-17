const quizForm = document.querySelector(".quiz");

const submitAnswerBtn = document.querySelector("#submit-answer-btn");

const output1 = document.querySelector(".output");

 

const correctAnswer = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no"];

function calculateScore() {
    let score  = 0;
    let index = 0;
    // Absolutely! It looks like you're going through each value in formResults and checking if it's equal to the corresponding correct answer in the calculateScore  array. If it is, you're adding 1 to the score. It's like checking each answer in a quiz and giving a point for each correct answer
    const formResults = new FormData(quizForm);

    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index = index +1;
    }
    // console.log(score);
    output1.innerText = "The score is " + score;

}

submitAnswerBtn.addEventListener('click', calculateScore);