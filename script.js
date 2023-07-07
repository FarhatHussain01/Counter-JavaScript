const d = document;

const container = d.querySelector("#container")
const randomColor = d.querySelector("#randomColor")
const BgChanger = d.querySelector("#BgChanger")
let counter = d.querySelector("#counter")
let resetBtn = d.querySelector("#resetBtn")



const colorChanger = () => {
    const firstColor = Math.floor(Math.random() * 256);
    const secondColor = Math.floor(Math.random() * 256);
    const thirdColor = Math.floor(Math.random() * 256);
    const generateColor = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;

    randomColor.innerHTML = `Now the next color is ${generateColor}`;
    container.style.backgroundColor = generateColor;

    counter.innerHTML = count++
};

let count = 0;

// const countClicks = () =>{
//     counter.innerHTML = count++
// }

BgChanger.addEventListener("click", colorChanger)
// BgChanger.addEventListener("click", countClicks)
resetBtn.addEventListener("click" , ()=>{
    count = 0;
    counter.innerHTML = count;
    randomColor.innerHTML = `Now the next color is shown here`;
    container.style.backgroundColor = "white";
})









