// Contoh Higher Order Function
// 1.  Array.prototype.map()
// 2.  Array.prototype.fiter()
// 3.  Array.prototype.reduce()

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];


//   Mencari angka yang >= 3
let hasilLebihDariTiga = [];
for (let i=0; i <angka.length; i++){
    if(angka[i] >= 3){
        hasilLebihDariTiga.push(angka[i]);
    }
}
console.log(hasilLebihDariTiga);


//   ----- Filter -----
// const filterLebihDariTiga = angka.filter(function(val){
//     return val >= 3;
// });
//Gunakan arrow function
const filterLebihDariTiga = angka.filter(val => val >= 3);
console.log(filterLebihDariTiga);


//  ----- Map -----
// Kalikan semua angka dengan 2
const hasilkaliDua = angka.map(val => val*2);
console.log(hasilkaliDua); 


//  ----- Reduce -----
// Mengabungkan (concate atau tambah) dari setiap array
// nilaiAwal + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
const nilaiAwal = 5; //Default 0 jika tidak ditulis atau ditambahkan
const hasilReduce = angka.reduce((accumulator, currentValue) => accumulator + currentValue, nilaiAwal);
console.log(hasilReduce); 


//  ----- Method Chaining -----
// menggabungkan fungsi-fungsi Higher Order Function ini dalam satu eksekusi

// Jika dilihat dari satu baris:
// const hasilChaining = angka.filter(val => val>=3).map(val => val*3).reduce((accumulator,currentValue) => accumulator+currentValue);
const hasilChaining = angka.filter(val => val>=5) //8,9,9
    .map(val => val*3) // 24, 27, 27
    // .map(val => val/2) // bisa juga dilakukan ulang lagi!
    .reduce((accumulator,currentValue) => accumulator+currentValue); // 78
console.log(hasilChaining);
