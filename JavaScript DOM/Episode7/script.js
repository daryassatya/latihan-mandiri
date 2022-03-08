// Event Listener
//  Daftar Event yang ada di Javascript DOM https://developer.mozilla.org/en-US/docs/Web/Events#event_listing

// // Mouse Event
// -   click
// -   dblclick
// -   mouseover //kursor berada diatas sebuah element tertentu
// -   mouseenter 
// -   mouseup
// -   wheel
// -   dll

// //  Keyboard Event
// -   keydown
// -   keypress
// -   MediaKeyStatusMap

// //  View Event
// -   resize
// -   scroll

// //  Form Event
// -   reset
// -   submit

//  Cara 1
//  Dengan mengtrigerred function ini dengamn menambahkan atribut di inline html
// Mulai
// const p3 = document.querySelector('.p3');

// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'lightblue';
// }

// //  Cara 2
// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;

// //  Cara 3
// //addEventListener()
// const p4 = document.querySelector('#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const liBaruText = document.createTextNode('item 4');
//     liBaru.appendChild(liBaruText);
//     ul.appendChild(liBaru);
// });
//  Akhir

// -----    Perbedaan antara Event Handler dan EventListener    -----
const p3 = document.querySelector('.p3');
//  Cara 1 atau Event Handler
//  Dengan cara event handler, akan menimpa event sebelumnya
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function(){
//     p3.style.color = 'red';
// }

//  Cara 2 atau addEventListener()
//  Dengan cara addEventListener, maka event akan menambahkan yang baru dan tidak menimpa
// p3.addEventListener('click', function(){
//     p3.style.backgroundColor = 'lightblue';
// });
// p3.addEventListener('click', function(){
    //     p3.style.color = 'red';
    // });

    
//  Testing beberapa event mouse
p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'white';
});
