const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');

h1.style.textAlign = 'center';
h3.style.textAlign = 'center';
button.style.display = "block";
button.style.margin = "0 auto";


button.addEventListener('click', function() {
    h1.style.color = randomColor();
    button.style.backgroundColor = randomColor();
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h3.innerText = newColor;

})

const randomColor = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;

}
