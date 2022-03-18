// 2.1 Atau Episode4 EXECUTION CONTEXT, HOSTING & SCOPE

//  Case 1
//  console.log(nama);
// Output: 
//  Uncaught ReferenceError: nama is not defined
//  at script.js:4:14

//  Case 2
//  console.log(nama);
//  var nama = 'Dimas Aryasatya';
// Output:
//  undefined

//  Karena di javascript ada yang namanya Hoisting atau mengerek variabel yang didefinisikan dibawah pemanggilan 
//  Atau pada creation phase pada Global Context
//  Selain itu javascript juga men definisikan :
//  window = global object
//  this = window

//  Case 3
// console.log(sayHello());
// //  output:
// // script.js:29 Hello, nama saya undefined, saya berumur undefined tahun.
// // script.js:22 undefined
// // kenapa pada baris bawahnya terdapat undefined ?
// // karena sebuah function harusnya mengembalikan nilai dengan return

// var nama = 'Dimas Aryasatya'
// var umur = 19

// function sayHello(){
//     // console.log(`Hello, nama saya ${nama}, saya berumur ${umur} tahun.`)
//     return `Hello, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }
// Function membuat Local Execution Context
// yang didalamnya terdapat creation dan excution context

// function memiliki akses ke window dan juga arguments atau tanda kurung disebelah nama function, dan juga memiliki hoisting juga

// Untuk lebih lanjutnya copy code diatas, lalu paste di javascript visualizer
// https://pythontutor.com/visualize.html#mode=edit


// Case 4
// var nama = "Dimas Aryasatya";
// var username = "@daryassatya";

// // yang dicek terlebih dahulu adalah yang didalam paramete/local, baru ke global
// function cetakUrl(username){
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }
// console.log(cetakUrl(username));


// Case 5
// function a(){
//     console.log('ini a');
//     function b(){
//         console.log('ini b');
//         function c(){
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();

// Case 6
function satu(){
    var nama = "DImas";
    console.log(nama);
}

function dua(){
    console.log(nama);
}

console.log(nama);
var nama = 'Erik'
satu();
dua('Dody');
console.log(nama);

// output:
