const colors = ["#4D00B2","rgb(39, 13, 202)",
            "rgb(255, 111, 78)","#66FFFF",
            "rgb(135, 71, 1)","rgb(74, 181, 67 )","#CCE01F","rgb(137, 17, 123 )"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");
btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
