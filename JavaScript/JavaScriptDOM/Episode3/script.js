// DOM Selection Method
// -getElementById()           = Element
// -getElementsByTagName()     = htmlCollection
// -getElementsByClassName()   = htmlCollection
// -querySelector()            = Element
// -querySelectorAll()         = NodeList

// //Mulai Uncomment

// //  Dom Selection
// const judul = document.getElementById('judul'); // sudah berbentuk objek
// judul.style.color = 'green';
// judul.style.backgroundColor = 'red';
// judul.innerHTML = 'Sandhika Galih';



// // By Tag Name
// // yang dipanggil adalah elementnya langsung
// const p = document.getElementsByTagName('p');
// // p.style.backgroundColor = 'lightblue'; // tidak bisa mengubahnya karna indexnya tidak diketahui
// // p[2].style.backgroundColor = 'lightblue'; // kalau ingin semua, maka harus di looping

// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// const h1 = getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px'; 


// // By Class Name
// const p1 = documentByClassName('p1');
// p1[0].innerHTML = "Ini diubah dari JavaScript"

// //Akhir Uncomment

// ---- Cara melooping element array dari getElementByClassName

// Cara 1
// const removeActive = document.getElementsByClassName('thumb');
// [].forEach.call(document.getElementsByClassName('thumb'), function(el,i) {
// console.log(el.classList.remove('active'));
// });  

// Cara 2
// var els = document.getElementsByClassName("myclass");
// Array.prototype.forEach.call(els, function(el) {
//     // Do stuff here
//     console.log(el.tagName);
// });