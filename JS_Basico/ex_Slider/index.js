const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');
let interval = undefined;
let timeout = undefined;
let selectedImageIndex = 0;

previousEl.addEventListener('click', onPreviousClick);
nextEl.addEventListener('click', onNextClick);

autoScroll();

function onPreviousClick() {
    const sliderWidth = sliderEl.offsetWidth; //largura do elemento
    sliderEl.scrollLeft -= sliderWidth;
    --selectedImageIndex;
    handleActiveDot();
    handleSliderClick();
}

//caso usuário clique no slider, para parar scroll automático
function onNextClick(){
    const sliderWidth = sliderEl.offsetWidth; //largura do elemento
    sliderEl.scrollLeft += sliderWidth;
    ++selectedImageIndex;
    handleActiveDot();
    handleSliderClick();
}

function handleSliderClick() {
    clearTimeout(timeout);
    clearInterval(interval);
    interval = undefined;
    timeout = setTimeout( () => {
        autoScroll();
    }, 10000); //10 segundos depois do clique do usuário o autoScroll() passa a ser executado novamente
}

function handleActiveDot() {
    const list = Array.from(document.getElementsByClassName('dot'));

    if(selectedImageIndex < 0) selectedImageIndex = 0;
    if(selectedImageIndex >= list.length) selectedImageIndex = list.length - 1;

    
    list.forEach(el => el.classList.remove('active'));
    list[selectedImageIndex].classList.add('active');
}

function autoScroll() {

    if(interval) return; // Para não criar outro interval caso ele já exista.

    interval = setInterval( () => {
        const sliderWidth = sliderEl.offsetWidth; //largura do elemento
        const numberOfImages = sliderEl.childElementCount; //número de elementos filhos
        const selectedImage = (sliderEl.scrollLeft/sliderWidth) + 1;

        //Se for a última => volta para o 0 (primeiro)
        if(numberOfImages === selectedImage) {
            sliderEl.scrollLeft = 0;
            selectedImageIndex = 0;
            handleActiveDot();
            return;
        }
        //Senao        
        sliderEl.scrollLeft += sliderWidth;
        ++selectedImageIndex;
        handleActiveDot();
    }, 5000); //função que irá executar a cada 5 segundos
}