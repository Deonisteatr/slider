//Переменные
const sliderConts = document.querySelectorAll('.slider_content');
const sliderField = document.querySelector('.sliders');
const sliderTitles = document.querySelectorAll('.title');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const btnDots = document.querySelectorAll('.btn-dot');
let sliderCount = 0;
let sliderWidth;

//Переключить слайд назад
function leftSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderConts.length - 1;
    flipSlider();
    checkpointSlide(sliderCount);
    sliderTitle(sliderCount);
}
leftSlide();

//Переключить слайд вперёд
function rightSlide() {
    sliderCount++;
    if (sliderCount >= sliderConts.length) sliderCount = 0;
    flipSlider();
    checkpointSlide(sliderCount);
    sliderTitle(sliderCount);
}
rightSlide();

//Добавление события на кнопки
btnLeft.addEventListener('click', leftSlide);
btnRight.addEventListener('click', rightSlide);

//Функция перелистывания
function flipSlider(i) {
    sliderField.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

//Checkpoints
function checkpointSlide(index) {
    btnDots.forEach(item => item.classList.remove('active-dot'));
    btnDots[index].classList.add('active-dot');
    sliderConts.forEach(item => item.classList.remove('active'));
    sliderConts[index].classList.add('active');

}

btnDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        flipSlider();
        checkpointSlide(sliderCount);
        sliderTitle(sliderCount);
    })
})

//Перелистывание заголовков
function sliderTitle(index) {
    sliderTitles.forEach(item => item.classList.remove('active'));
    sliderTitles[index].classList.add('active');
}

sliderTitles.forEach((title, index) => {
    title.addEventListener('click', () => {
        sliderCount = index;
        flipSlider();
        checkpointSlide(sliderCount);
        sliderTitle(sliderCount);
    })
})