// DOM Selection Method
// -getElementById()           = Element
// -getElementsByTagName()     = htmlCollection
// -getElementsByClassName()   = htmlCollection
// -querySelector()            = Element
// -querySelectorAll()         = NodeList

// // ---Mulai Uncoment---

// // By Query Selector (Menggunakan selector CSS)
// // document.querySelector()

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

// const li2 = document.querySelector('li:nth-child(2)');
// // const li2 = document.querySelector('section#b ul li:nth-child(2)'); //Bisa juga begini
// li2.style.backgroundColor = "orange";

// // const p = document.querySelector('p'); 
// //Jika ada element yang sama dan kurang spesifik, maka element pertama saja yang akan diubah


// //  By Query Selector All
// // document.querySelectorAll()
// const p = document.querySelectorAll('p'); // Harus meng looping terlebih dahulu jika ingin mengubahnya
// for(let i=0; i< p.length; i++ ){
//     p[i].style.backgroundColor = 'lightBlue';
// }

// // ---Akhir Uncomment---

// Cara mengubah Node Root nya
// Secara default, node root itu adalah document.
// Berikut contoh node root untuk mempersempit pencarian :
const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';