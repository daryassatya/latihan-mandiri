//  --- Arrow Function ---
// Pengertion By Google : Bentuk lain yang lebih rigkas dari Function Expression

// Contoh1 - Function biasa
// function tampilPesan(nama){
//     alert(`Halo ${nama}`);
// }
// tampilPesan('Dimas');

// // Contoh2 - Function Expression
// let tampilPesan = function(nama){
//     alert(`Halo ${nama}`);
// }
// tampilPesan('Arya');

// // Contoh3 - (Arrow Function - bentuk 1 ) Penulisan ringkas dari function expression 
// let tampilPesan = (nama) =>{
//     console.log(`Halo ${nama}`);
// }
// tampilPesan('Satya')

// Contoh4 - (Arrow function bentuk - 2)
// const tampilPesan =  (nama, waktu) => { return `Halo, ${nama}, Selamat ${waktu}` };
// console.log(tampilPesan('Dimas Aryasatya', 'Malam'));

//  Contoh5 - (Arrow function bentuk - 3) 
// Implisit Return
// Returnnya tidak perlu ditulis(hanya berguna jika sebuah function tidak terlalu rumit)
// const tampilNama =  nama => `Halo, ${nama}`;
// console.log(tampilNama('Dimas Aryasatya'));

// Contoh6 - (Arrow function bentuk - 4) Tanpa parameter
// Harus diketik dalam kurungnya
// const tampilNama =  () => `Halo, Dimas Aryastya`;
// console.log(tampilNama());

// Contoh7 - Menghitung dan memetakan
// --- Cara kurang benar
// let mahasiswa = ['Dimas', 'arya', 'satya'];
// function jumlahHuruf(){
//     let jumlah = [];
//     mahasiswa.forEach(function(val){
//         jumlah.push(val.length);
//     });
//     console.log(jumlah);
// }
// jumlahHuruf();

// --- Cara lebih baik
// let mahasiswa = ['Dimas', 'arya', 'satya'];
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length
// });
// console.log(jumlahHuruf);

// --- Cara singkat (Retrun Array)
// let mahasiswa = ['Dimas', 'arya', 'satya'];
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// --- Cara singkat (Return Object)
let mahasiswa = ['Dimas', 'arya', 'satya'];
let jumlahHuruf = mahasiswa.map((nama) => ({nama:nama, jumlahHuruf:nama.length}));
// console.log(jumlahHuruf);
console.table(jumlahHuruf); // Hanya berfungsi untuk objek, karena memiliki key