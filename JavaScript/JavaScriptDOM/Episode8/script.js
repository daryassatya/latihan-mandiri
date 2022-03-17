const buttonChange = document.querySelector('button');
// const bodyBackgroundColor = document.getElementsByTagName('body')[0];
// Bisa diganti dengan : document.body

// Test 1 - Mengubah warna dan mengembalikannya lagi

// Contoh 1
// buttonChange.addEventListener('click', function(){

//     if(document.body.style.backgroundColor == 'lightgreen'){
    
//         document.body.style.backgroundColor = 'white';
//         // console.log('Hijau');
//     } else {
//         document.body.style.backgroundColor = 'lightgreen';
//     }
// });


//  Contoh 2
// tambahkan dahulu class yang menyimpan warna didalam style atau css
buttonChange.addEventListener('click', function(){
    document.body.classList.toggle('green-mode');
});


//  Test 2 - Membuat tombol dan mengubah warna dengan JS
const cbt = document.createElement('button');
const textCbt = document.createTextNode('Ubah Warna!');
cbt.appendChild(textCbt);
cbt.setAttribute('type', 'button');
buttonChange.after(cbt);
// document.body.appendChild(cbt);
cbt.addEventListener('click', function(){
    //  Mengacak dengan Hexa
    // const randomColorHexa = Math.floor(Math.random()*16777215).toString(16);
    // document.body.style.backgroundColor = "#" + randomColor;

    //  Mengacak dengan rgb
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

// Test 3 Slider
const sliderMerah = document.querySelector('input[name=sliderMerah]');
const sliderHijau = document.querySelector('input[name=sliderHijau]');
const sliderBiru = document.querySelector('input[name=sliderBiru]');

sliderMerah.addEventListener('change', function(){
    document.body.style.backgroundColor = 'rgb('+sliderMerah.value+','+sliderHijau.value+','+sliderBiru.value+')';
})
sliderHijau.addEventListener('change', function(){
    document.body.style.backgroundColor = 'rgb('+sliderMerah.value+','+sliderHijau.value+','+sliderBiru.value+')';
})
sliderBiru.addEventListener('change', function(){
    document.body.style.backgroundColor = 'rgb('+sliderMerah.value+','+sliderHijau.value+','+sliderBiru.value+')';
})



//  Test 4 Mouse Potition
document.body.addEventListener('mousemove', function(event){
    // console.log(Math.round((event.clientY/window.innerHeight)*255));
    const xPos = Math.round((event.clientX/window.innerWidth)*255);
    const yPos = Math.round((event.clientY/window.innerWidth)*255);
    document.body.style.backgroundColor = 'rgb('+xPos+','+yPos+',100)';
})

