const inputs = document.querySelectorAll(".angle-input");
// console.log(inputs);
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = Number(angle1) + Number(angle2) + Number(angle3);
    // console.log(sumOfAngles);

    return sumOfAngles;

}

function isTriangle(){
    // console.log("i am working");
    const sumOfAngles = calculateSumOfAngles(inputs[0].value, inputs[1].value, inputs[2].value);

    // console.log(typeof(Number(inputs[1].value)));
    // console.log(sumOfAngles);

    if(sumOfAngles === 180) {
        outputE1.innerText= "yay, the angle is formed";
    }
    else {
        outputE1.innerText ="oh oh! the angles don't form a triangle";
    }


}


isTriangleBtn.addEventListener("click", isTriangle)
