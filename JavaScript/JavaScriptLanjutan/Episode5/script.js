// --- Closure ---
// Digunakan untuk benar2 menutup sebuah function agar variabel didalam functionya tidak dapat dimanipulasi

//Lexical Scope
// function init(){
//     let nama = 'Dimas Aryastya'; //Local Variable
//     let umut = 19;
//     function tampilNama(){  // Inner function (closure)
//         console.log(nama);  // memiliki akses ke parent variable
//     }
//     tampilNama();
//     // untuk memeriksa scope init atau closure gunakan console.dir(tampilNama());
//     // hanya menampilkan data yang digunakan dari parent
// }
// init();

// Test1 - return function closure
// function init(){
//     let nama = 'Dimas Aryastya'; //Local Variable
//     let umut = 19;
//     function tampilNama(){  // Inner function (closure)
//         console.log(nama);  // memiliki akses ke parent variable
//     }
//     return tampilNama;
//     // untuk memeriksa scope init atau closure gunakan console.dir(tampilNama());
//     // hanya menampilkan data yang digunakan dari parent
// }
// // init(); //jika hanya begini tidak akan jalan. tapi jika :
// let panggilNama = init();
// panggilNama(); //baru akan tampil


//  Test2 - closure dengan parameter
// function init(){
//     return function tampilNama(nama){  // Inner function (closure)
//         console.log(nama);  // memiliki akses ke parent variable
//     }
//     // return tampilNama;
//     // untuk memeriksa scope init atau closure gunakan console.dir(tampilNama());
//     // hanya menampilkan data yang digunakan dari parent
// }
// // init(); //jika hanya begini tidak akan jalan. tapi jika :
// let panggilNama = init();
// panggilNama('Dimas Aryasatya'); //baru akan tampil


//  Function factory
// function ucapkanSalam(waktu){
//     return function(nama){
//         console.log(`Halo ${halo}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Dimas');
// selamatSiang('Arya');
// selamatMalam('Satya');

// Test3 - function factory
// digunakan agar counter tidak dapat diakses dari luar, namun tetap mempertahankan nilainya
// let add = function(){
//     let counter = 0;
//     return function(){
//         return ++counter;
//     }
// } 

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

//  Test4 - meggunakan Immediatly Invoked Function
let add = (function(){
    let counter = 0;
    return function(){
        return ++counter;
    }
})();

counter = 100; // tidak akan berubah

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());


