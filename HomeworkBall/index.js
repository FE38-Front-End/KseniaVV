const square = document.querySelector('.square');
const circle = document.querySelector('.circle');

let remainingSpace;

const confirmSquareParametr = document.querySelector('.confirmSquareParametr');
let squareParametr 
confirmSquareParametr.addEventListener('click', () => {
    squareParametr = document.querySelector('.squareParametr').value;
    square.style.width = squareParametr + 'px';
    square.style.height = squareParametr + 'px';
    square.style.border = '2px solid blue';

});

const confirmCircleDiametr = document.querySelector('.confirmCircleDiametr');
let circleDiametr 
confirmCircleDiametr.addEventListener('click', () => {
    circleDiametr = document.querySelector('.circleDiametr').value;
    circle.style.width = circleDiametr + 'px';
    circle.style.height = circleDiametr + 'px';
    circle.style.border = '2px solid red';

});

const confirmStep = document.querySelector('.confirmStep');
let step 
confirmStep.addEventListener('click', () => {
    step = +document.querySelector('.step').value;
    remainingSpace = (squareParametr-circleDiametr)/2;
});

let coordX = 0;
let coordY = 0;


const goLeft = document.querySelector('.buttonLeft');
goLeft.addEventListener('click', () => {
    if (-remainingSpace+step <= coordX){
        coordX -=step;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`
    }else{
        coordX = -remainingSpace;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
    }
});

const goRight = document.querySelector('.buttonRight');
goRight.addEventListener('click', () => {
    if (remainingSpace-step >=coordX){
        coordX+=step;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
    }else{
        coordX = remainingSpace;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
    }
});


const goUp = document.querySelector('.buttonUp');
goUp.addEventListener('click', () => {

    if (-remainingSpace+step <= coordY){
        coordY -=step;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`
    }else{
        coordY = -remainingSpace
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
    }
});

const goDown = document.querySelector('.buttonDown');
goDown.addEventListener('click', () => {
    if (remainingSpace-step >=coordY){
        coordY+=step;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
    }else{
        coordY = remainingSpace;
        circle.style.transform = `translate(${coordX}px,${coordY}px)`;
    }
});

