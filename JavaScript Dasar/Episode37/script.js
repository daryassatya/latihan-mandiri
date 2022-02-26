//6. Foreach
var angka = [1,2,3,4,5,6,7,8];
var nama = ['Dimas','Arya', 'Satya'];
//Bentuk sederhananya
// var cetak = function(e){
//     console.log(e);
// }
// angka.forEach(cetak);

// Bentuk Ringkasnya
// angka.forEach(function(a){
//     console.log(a);
// });

//Dengan indexnya
// nama.forEach(function(a, i){
//     console.log(a +' Adalah kata ke-'+ (i+1));
// });

//7. Map
//bentuk tanpa dimasukkan variabel
// angka.map(function(e){
//     console.log(e);
// })
// var tampil = angka.map(function(e){
//     // console.log(e); // Bisa ini
//     // return e 
//     return e * 3 //Bisa dikali atau dimanipulasi
// });

//8. Sort
// var angkaAcak = [1,2,4,3,9,6,7,8];
// angkaAcak.sort();
// console.log(angkaAcak); // Tampil [1, 2, 3, 4, 6, 7, 8, 9]

var angkaAcak2 = [1,10,2,4,30,9,6,7,8];
// angkaAcak2.sort();
// console.log(angkaAcak2); //Tampil [1, 10, 2, 30, 4, 6, 7, 8, 9] malah ngaco
//Lakukan seperti ini

angkaAcak2.sort(function(a,b){
    return a-b;
})
console.log(angkaAcak2); //Tampil [1, 2, 4, 6, 7, 8, 9, 10, 30]