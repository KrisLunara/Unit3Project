//Asset Linking
const picture = document.getElementById('object');
const endScreen = document.getElementById('endScreen');
const shopButton = document.getElementById('shop');
const shop = document.getElementById('shopMenu');
const shopClose = document.getElementById('shopClose');
let counter = document.getElementById('counter');
let TC = document.getElementById('Totalcounter');
const reset = document.getElementById('reset');
let CalText = document.getElementById('CalText')

//Values and Upgrades
let clicks = 0;
let totalClicks = 0;
const DubItem = document.getElementById('DubItem')
const TenItem = document.getElementById('TenItem');
const DubButton = document.getElementById('BobbleHead');
const TenButton = document.getElementById('Balloon');
let Dub = 0;
let Ten = 0;
let DubPrice = 20;
let TenPrice = 100;

//Main Functions
if (totalClicks < 15){
    DubItem.classList.remove('item');
    DubItem.classList.add('hidden');
    TenItem.classList.remove('item');
    TenItem.classList.add('hidden');
}

function clicker (){
    clicks = clicks + 1 + Dub + Ten;
    totalClicks = totalClicks + 1 + Dub + Ten;
    ShopText();
    if (totalClicks < 15){
        DubItem.classList.remove('item');
        DubItem.classList.add('hidden');
    } else if (totalClicks >= 15){
        DubItem.classList.remove('hidden');
        DubItem.classList.add('item');
    }
    if (totalClicks < 75){
        TenItem.classList.remove('item');
        TenItem.classList.add('hidden');
    } else if (totalClicks >= 75){
        TenItem.classList.remove('hidden');
        TenItem.classList.add('item');
    }
    if (totalClicks < 15){
        DubItem.classList.remove('item');
        DubItem.classList.add('hidden');
        TenItem.classList.remove('item');
        TenItem.classList.add('hidden');
    }
}

function gameReset(){
    clicks = 0;
    totalClicks = 0;
    Dub = 0;
    Ten = 0;
    DubPrice = 20;
    TenPrice = 100;
    counter.innerHTML= `Welcome`;
    TC.innerHTML= `Click Golden Egg to Start`;
    picture.classList.remove('hidden');
    picture.src='https://cdn.wikimg.net/en/splatoonwiki/images/c/cf/S2_Icon_Golden_Egg.png';
    endScreen.classList.add('hidden');
    shop.classList.add('hidden');
    shopButton.classList.remove('hidden');
    shopClose.classList.add('hidden')
}
function gameEnd(){
    clicks = 0;
    counter.innerHTML= `Thanks for playing!`;
    TC.innerHTML= `${totalClicks} Power Eggs Generated`
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
function ShopText(){
    if (totalClicks >= 20 && Dub >= 2){
        CalText.innerHTML= 'Welcomes to the shop! Buy some upgrades for ' +
            'Salmon here!'
    }else if(totalClicks >= 15 ){
        CalText.innerHTML= 'Look at what I have in store for you!'
    }
    if (totalClicks >= 75 && Dub >= 10){
        CalText.innerHTML= 'Welcomes to the shop! Buy some upgrades for ' +
            'Salmon here!'
    }
}

//Shop
function shopStart(){
    ShopText();
    DubButton.addEventListener('click', function(){
        if (DubPrice <= 60){
            if (clicks >= DubPrice){
                Dub = Dub + 2;
                clicks = clicks - DubPrice;
                DubPrice = DubPrice + 4;
                DubButton.innerHTML= `Purchase for ${DubPrice}`;
                counter.innerHTML= `${clicks} Power Eggs`;
                TC.innerHTML= `${totalClicks} All Time Power Eggs`;
                CalText.innerHTML= 'Thank you for purchasing!';
            } else {
                CalText.innerHTML= `That's not enough...?`;
            }
        } else if (DubPrice >= 65){
            DubButton.innerHTML= `Max`
        }
    })
    TenButton.addEventListener('click', function(){
        if (TenPrice < 500){
            if (clicks >= TenPrice){
                Ten = Ten + 10;
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
    TC.innerHTML= `${totalClicks} All Time Power Eggs`
    if (clicks >= 10000){
        gameEnd();
    }
})
reset.addEventListener('click', function(){
    gameReset();
})