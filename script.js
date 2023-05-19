//Asset Linking
const picture = document.getElementById('object');
const endScreen = document.getElementById('endScreen');
const shopButton = document.getElementById('shop');
const shop = document.getElementById('shopMenu');
const shopClose = document.getElementById('shopClose');
let counter = document.getElementById('counter');
let TC = document.getElementById('Totalcounter');
let clicks = 0;
let totalClicks = 0;
let upgradeTen = false;
const reset = document.getElementById('reset');
const DubButton = document.getElementById('BobbleHead')
let upgradeDub = false;

//Main Functions
function clicker (){
    if (upgradeDub === true){
        clicks = clicks + 2;
        totalClicks = totalClicks + 2;
    }
    if (upgradeTen === true){
        clicks = clicks + 10;
    }
    if (upgradeDub === false && upgradeTen === false){
        clicks = clicks + 1;
        totalClicks = totalClicks +1;
    }
}
function gameReset(){
    clicks = 0;
    totalClicks = 0;
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
    if (totalClicks >= 100){
        picture.src = 'https://cdn.wikimg.net/en/splatoonwiki/images/3/3d/S3_Cohock_icon.png';
    } else if(totalClicks >= 50){
        picture.src = 'https://cdn.wikimg.net/en/splatoonwiki/images/1/13/S3_Chum_icon.png';
    } else if (totalClicks > 0) {
         picture.src = 'https://cdn.wikimg.net/en/splatoonwiki/images/4/43/S3_Smallfry_icon.png';
     }
}

//Upgrade Values & Storage


//Shop
function shopStart(){
    DubButton.addEventListener('click', function(){
        if (clicks >= 20){
            upgradeDub = true;
            clicks = clicks - 20;
        }
    })
}

//Button Interaction
shopButton.addEventListener('click', function(){
    shop.classList.remove('hidden');
    shopButton.classList.add('hidden');
    shopClose.classList.remove('hidden');
    shopStart();

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
    TC.classList.remove('hidden');
    TC.innerHTML= `${totalClicks} All Time Power Eggs`
    if (clicks >= 200){
        gameEnd();
    }
})
reset.addEventListener('click', function(){
    gameReset();
})


console.log('test');