let allImge = document.querySelector('.allimge');
let container = document.querySelector('.container');

let nextBtn = document.querySelector('.btn-next');
let prevBtn = document.querySelector('.btn-prev');
let widAllImg = allImge.children.length * allImge.children[0].clientWidth;
let x = 0;

// nextBtn.addEventListener('click', function(){
//     if(x == -500){
//         nextBtn.classList.add('active');
//         console.log('yes');
//     }else{
//         nextBtn.classList.remove('active');
//         console.log('none none');
//     }
//     x += 500;
//     allImge.style.transform = `translateX(${x}px)`;
    
//     console.log(x);
// })


// prevBtn.addEventListener('click', function(){
//     if(x == widAllImg){
//         prevBtn.classList.add('active');
//     }else{
//         prevBtn.classList.remove('active');
//     }


//     x -= 500;
//     allImge.style.transform = `translateX(${x}px)`;
//     console.log(x);
// })
isDisabled(x, widAllImg);

nextBtn.addEventListener('click', function() {
    if(x > -(widAllImg - 1000)) {
        x += -500;
    }

    allImge.style.transform = `translateX(${x}px)`;
    isDisabled(x, widAllImg - 1000);
});

prevBtn.addEventListener('click', function() {
    if(x !== 0) {
        x += 500;
    }

    allImge.style.transform = `translateX(${x}px)`;
    isDisabled(x, widAllImg);
});


function isDisabled(p, h) {
    if(p == -(h)) {
        nextBtn.classList.add('active');
    }else {
        nextBtn.classList.remove('active');
    }
    if(p == -(h)) {
        prevBtn.classList.add('active');
    }else {
        prevBtn.classList.remove('active');
    }

    if(x == 0) {
        prevBtn.classList.add('active');
    }else {
        prevBtn.classList.remove('active');
    }
}

console.log(widAllImg);
// allImge.children
// console.log(allImge.children.length);
// console.log(allImge.clientWidth);
// console.log(widAllImg);

