const picture = document.getElementById('object');
const endScreen = document.getElementById('endScreen');
const shopButton = document.getElementById('shop');
const shop = document.getElementById('shopMenu');
const shopClose = document.getElementById('shopClose');
const textbox = document.getElementById('textbox');
const CalText = document.querySelector('.text');
let counter = document.getElementById('counter');
let clicks = 0;
const reset = document.getElementById('reset');

function clicker (){
    clicks = clicks + 1;
}
function gameReset(){
    clicks = 0;
    counter.innerHTML= `Click to Start`;
    picture.classList.remove('hidden');
    picture.src='https://cdn.wikimg.net/en/splatoonwiki/images/c/cf/S2_Icon_Golden_Egg.png';
    endScreen.classList.add('hidden');
}
function gameEnd(){
    clicks = 0;
    counter.innerHTML= `Thanks for playing!`;
    picture.classList.add('hidden');
    endScreen.classList.remove('hidden');
}
function salmonIcon() {
    if (clicks > 0) {
        picture.src = 'https://cdn.wikimg.net/en/splatoonwiki/images/4/43/S3_Smallfry_icon.png';
    }
}

shopButton.addEventListener('click', function(){
    shop.classList.remove('hidden');
    shopButton.classList.add('hidden');
    shopClose.classList.remove('hidden');
})
shopClose.addEventListener('click', function(){
    shop.classList.add('hidden');
    shopButton.classList.remove('hidden');
    shopClose.classList.add('hidden')
})
picture.addEventListener('click', function(){
    clicker();
    salmonIcon();
    counter.innerHTML= `${clicks} Power Eggs`;
    if (clicks >= 50){
        gameEnd();
    }
})
reset.addEventListener('click', function(){
    gameReset();
})


console.log('test');