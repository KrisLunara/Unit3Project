//Asset Linking
const picture = document.getElementById('object');
const endScreen = document.getElementById('endScreen');
const shopButton = document.getElementById('shop');
const shop = document.getElementById('shopMenu');
const shopClose = document.getElementById('shopClose');
let counter = document.getElementById('counter');
let TC = document.getElementById('Totalcounter');
const reset = document.getElementById('reset');

//Values and Upgrades
let clicks = 0;
let totalClicks = 0;
let upgradeTen = false;
const TenButton = document.getElementById('Balloon');
const DubButton = document.getElementById('BobbleHead')
let upgradeDub = false;
let Dub = 0;
let Ten = 0;
let DubPrice = 20;
let TenPrice = 100;

//Main Functions
function clicker (){
    if (upgradeDub === false && upgradeTen === false){
        clicks = clicks + 1;
        totalClicks = totalClicks +1;
    } else if (upgradeDub === true && upgradeTen === true){
        clicks = clicks + (Dub + Ten);
        totalClicks = totalClicks + 12;
    } else if (upgradeTen === true && upgradeDub === false){
        clicks = clicks + Ten;
        totalClicks = totalClicks + 10;
    }else if (upgradeDub === true && upgradeTen === false){
        clicks = clicks + Dub;
        totalClicks = totalClicks + 2;
    }
}
function gameReset(){
    clicks = 0;
    totalClicks = 0;
    upgradeDub = false;
    upgradeTen = false;
    DubPrice = 20;
    TenPrice = 100;
    counter.innerHTML= `Click to Start`;
    TC.classList.add('hidden');
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
    if(totalClicks >= 500){
        picture.src = 'https://cdn.wikimg.net/en/splatoonwiki/images/7/7a/S3_Cohozuna_icon.png';
    }else if (totalClicks >= 100){
        picture.src = 'https://cdn.wikimg.net/en/splatoonwiki/images/3/3d/S3_Cohock_icon.png';
    } else if(totalClicks >= 50){
        picture.src = 'https://cdn.wikimg.net/en/splatoonwiki/images/1/13/S3_Chum_icon.png';
    } else if (totalClicks > 0) {
         picture.src = 'https://cdn.wikimg.net/en/splatoonwiki/images/4/43/S3_Smallfry_icon.png';
     }
}

//Shop
function shopStart(){
    DubButton.addEventListener('click', function(){
        if (DubPrice <= 50){
            if (clicks >= DubPrice){
                upgradeDub = true;
                Dub = Dub + 2;
                clicks = clicks - DubPrice;
                DubPrice = DubPrice + 4;
                DubButton.innerHTML= `Purchase for ${DubPrice}`
                counter.innerHTML= `${clicks} Power Eggs`;
                TC.innerHTML= `${totalClicks} All Time Power Eggs`
            }
        } else if (DubPrice >= 50){
            DubButton.innerHTML= `Max`
        }
    })
    TenButton.addEventListener('click', function(){
        if (TenPrice <= 500){
            if (clicks >= TenPrice){
                upgradeTen = true;
                Ten = Dub + 2;
                clicks = clicks - TenPrice;
                TenPrice = TenPrice + 10;
                TenButton.innerHTML= `Purchase for ${TenPrice}`
                counter.innerHTML= `${clicks} Power Eggs`;
                TC.innerHTML= `${totalClicks} All Time Power Eggs`
            }
        } else if (TenPrice >= 500){
            TenButton.innerHTML= `Max`
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
    if (clicks >= 10000){
        gameEnd();
    }
})
reset.addEventListener('click', function(){
    gameReset();
})