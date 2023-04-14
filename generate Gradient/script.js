const button = document.querySelector('button');

//generate random color value and return it. 
const getRandomColor = () => Math.floor(Math.random() * 0xffffff).toString(16);

const generateGradient = () => {
    //get random two colors for gradient
    const color1 = getRandomColor();
    const color2 = getRandomColor();


    //apply the gradient to the body background
    document.body.style.background = `linear-Gradient(#${color1}, #${color2})`;


}
generateGradient();

button.addEventListener('click', generateGradient);
