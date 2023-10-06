const input = document.querySelectorAll(".baseheight-input");

const areaBtn = document.querySelector("#btn");

const output1 = document.querySelector("#output");


function baseHeightValue(b, h) {

    const baseIntoheight = Number(b * h);
    // console.log(baseIntoheight);
    return baseIntoheight;

}


function areaOfTriangle() {
    // console.log("hey i am connect with click button")

    const areabh = baseHeightValue(input[0].value, input[1].value);

    // console.log(areabh);

    const areaoftri = 0.5 * areabh ;

    output1.innerText = "area of triangle is " + areaoftri;




}


areaBtn.addEventListener("click", areaOfTriangle);