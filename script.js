let background = document.querySelector('.background'),
    color1 = document.querySelector('.color1'),
    color2 = document.querySelector('.color2'),
    colorCode = document.querySelector('.color-code');

// console.log(background);
// console.log(color1);
// console.log(color2);

 
function gradient(){
    console.log(color1.value);
    console.log(color2.value);
    background.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    // console.log(colorCode);
    colorCode.textContent = background.style.background + ";";
}

color1.addEventListener('input', gradient);
color2.addEventListener('input', gradient);
// assigned Final Output

