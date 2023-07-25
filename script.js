let submitBtn = document.querySelector('.submitBtn');
let okBtn = document.querySelector('.okBtn');
let popupBox = document.querySelector('.popup');

submitBtn.addEventListener('click', function(){
    popupBox.classList.add('open');
})

okBtn.addEventListener('click', function(){
    popupBox.classList.remove('open');
})
