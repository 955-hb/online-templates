const button = document.querySelector('button');

const pickColor = async () => {
    const eyeDropper = new EyeDropper();
    /* open an eye dropper and get the sRGBHex 
    value which is user selected color code*/
    const { sRGBHex } = await eyeDropper.open();
    console.log(sRGBHex);
}

button.addEventListener('click', pickColor);