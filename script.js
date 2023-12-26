

const number =document.getElementById ('number');
const generatebtn =document.getElementById ('generatebtn');

const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
     number.textContent = randomNumber;
};

generatebtn.addEventListener('click' ,randomNumberGenerator);
randomNumberGenerator();
