
// -- Cara Kurang Baik --
// const jumboImg = document.querySelector('.jumbo');
// const thumbImg = document.querySelectorAll('.thumb');

// thumbImg.forEach(function(element){
//     element.addEventListener('click', function(event){
//         jumboImg.classList.remove('fade');
//         const getAttr = element.getAttribute('src');
//         jumboImg.setAttribute('src', getAttr);
//         jumboImg.classList.add('fade');
//     })
// });

const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
  
container.addEventListener('click', function(event){
    if(event.target.className == 'thumb'){
        [].forEach.call(document.getElementsByClassName('thumb'), function(thumb) {
        console.log(thumb.classList.remove('active'));
        });  
       
        jumbo.src = event.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500); //Bisa dipercepat namun animasinya tidak akan sampai 500 milisecond
        event.target.classList.add('active');
    }
})

