console.log(`Marie: What are you doing here? This is for the dev
to check to make sure something is working correctly.`);
console.log(`Marie: Even though I would, don't cheat the
game. Callie is happy to give you some of the junk she
bought at Hotlantis.`);

//Asset Linking
const picture = document.getElementById('object');
const endScreen = document.getElementById('endScreen');
const shopButton = document.getElementById('shop');
const shop = document.getElementById('shopMenu');
const shopClose = document.getElementById('shopClose');
let counter = document.getElementById('counter');
let TC = document.getElementById('Totalcounter');
const reset = document.getElementById('reset');
let CalText = document.getElementById('CalText');
let CalIcon = document.getElementById('CalIcon');
const Title = document.getElementById('title');

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

let KingSalmon = Math.floor(Math.random() * 10);

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
    CalIcon.src='https://cdn.wikimg.net/en/splatoonwiki/images/4/4c/S3_Icon_Callie.png';
    Title.innerHTML= `Salmonid Clicker`;
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
        switch(KingSalmon){
            case 0:
                picture.src='https://cdn.wikimg.net/en/splatoonwiki/images/0/0a/S3_Horrorboros_icon.png';
                break
            default:
                picture.src='https://cdn.wikimg.net/en/splatoonwiki/images/7/7a/S3_Cohozuna_icon.png';
        }
    }else if (totalClicks >= 100){
        picture.src = 'https://cdn.wikimg.net/en/splatoonwiki/images/3/3d/S3_Cohock_icon.png';
    } else if(totalClicks >= 50){
        picture.src = 'https://cdn.wikimg.net/en/splatoonwiki/images/1/13/S3_Chum_icon.png';
    } else if (totalClicks > 0) {
         picture.src = 'https://cdn.wikimg.net/en/splatoonwiki/images/4/43/S3_Smallfry_icon.png';
     }
}
function ShopText(){
    if (totalClicks >= 20 && totalClicks <75 && Dub >= 2){
        CalText.innerHTML= 'Welcomes to the shop! Buy some upgrades for ' +
            'your Salmon here!';
    }else if(totalClicks >= 15 && totalClicks < 74 && Dub === 0){
        CalText.innerHTML= 'Look at what I have in store for you!';
    }
    if (totalClicks >= 75 && Dub >= 10){
        CalText.innerHTML= 'Welcomes to the shop! Buy some upgrades for ' +
            'Salmon here!';
    }else if (totalClicks >= 75 && Ten === 0){
        CalText.innerHTML= 'Look at this new item I have for you!';
    }else if (totalClicks < 75 && totalClicks >=50  && Dub >= 2 && Ten === 0){
        CalText.innerHTML= 'I can offer you a new upgrade if you reach 75 ' +
            'power eggs total!';
    } else if (Dub >= 2 && Ten >=10){
        CalText.innerHTML= 'Welcome to the shop! Buy some more items' +
            ' for your Salmon here!';
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
            } else if (clicks < DubPrice){
                CalText.innerHTML= `That's not enough...?`;
            }
        } else if (DubPrice >= 64){
            DubButton.innerHTML= `Max`
            CalText.innerHTML= `Sorry. I ran out of those.`;
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
                CalText.innerHTML= 'Thank you for purchasing!';
            }else if (clicks < TenPrice){
                CalText.innerHTML= `That's not enough...?`;
            }
        } else if (TenPrice >= 500){
            DubButton.innerHTML= `Max`
            CalText.innerHTML= `Sorry. I ran out of those.`;
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

CalIcon.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 3)
    switch (random){
        case 0:
            CalIcon.src='https://cdn.wikimg.net/en/splatoonwiki/images/3/30/S2_Icon_Callie_2.png';
            break
        case 1:
            CalIcon.src='https://cdn.wikimg.net/en/splatoonwiki/images/6/6d/S2_Icon_Callie_3.png';
            break
        case 2:
            CalIcon.src='https://cdn.wikimg.net/en/splatoonwiki/images/e/e3/S2_Icon_Callie.png';
            break
    }

})
Title.addEventListener('click', function (){
    Title.innerHTML= `Fishy Clicker XD`;
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