const  sides = document.querySelectorAll(".side-input");

const  hypotenuseBtn = document.querySelector("#hypotenuse-btn");

const  outputE1 = document.querySelector(".output");

function calculatedHpo(a,b){
    const sumOfsquares = Number(a * a) + Number (b * b);
    return sumOfsquares;

    
}

function calculateHypotenuse(){
    // console.log("i am working"); cheking the wiring
    const sumOfsquaresofTwo = calculatedHpo(sides[0].value, sides[1].value);
    
    const thirdSide = Math.sqrt(sumOfsquaresofTwo);
    
    outputE1.innerText = "The third side of the triangle is " + thirdSide;
}


hypotenuseBtn.addEventListener('click', calculateHypotenuse);