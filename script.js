let listImage = ['image/woman.jpg','image/man.jpg','image/woman2.jpg', 'image/astronome.jpg'];
let firstImage = document.getElementById('firstImage');
let secondImage = document.getElementById('secondImage');
let ThirdImage = document.getElementById('ThirdImage');

firstImage.src = listImage[0];
secondImage.src = listImage[1];
ThirdImage.src = listImage[2];
console.log(listImage[1]);

firstImage.addEventListener('mouseover', onfirstimage);
secondImage.addEventListener('mouseover', onsecondimage);
ThirdImage.addEventListener('mouseover', onthirdimage);

// firstImage.addEventListener('mouseout',outimage);
// secondImage.addEventListener('mouseout',outimage);
// ThirdImage.addEventListener('mouseout',outimage);

function onfirstimage(){
    setTimeout(function(){
        firstImage.src = listImage[1];
        secondImage.src = listImage[2];
        ThirdImage.src = listImage[3];
    },2000)
}

function onsecondimage(){
    setTimeout(function(){
        firstImage.src = listImage[2];
        secondImage.src = listImage[3];
        ThirdImage.src = listImage[0];
    },2000)
}

function onthirdimage(){
    setTimeout(function(){
        firstImage.src = listImage[3];
        secondImage.src = listImage[0];
        ThirdImage.src = listImage[1];
    },2000)
}

// function outimage(){
//     setTimeout(function(){
//         firstImage.src = listImage[0];
//         secondImage.src = listImage[1];
//         ThirdImage.src = listImage[2];
//     },3000)
    
// }