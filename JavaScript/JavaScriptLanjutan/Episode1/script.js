// Cara untuk membuat Object pada javascript

//  1.  Object literal

//  Kekurangannya adalah sangat tidak efisien
// dan harus memiliki nama yang berbeda pada setiap variabelnya
// let mahasiswa = {
//     nama: "Dimas Aryasatya",
//     energi: 10,
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo, ${this.nama} Selamat  Makan `); //string khusus untuk langsung menconcate
//     }
// }

//  2.  Function Declaration
// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo, ${this.nama} Selamat  Makan! `); //string khusus untuk langsung menconcate
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo, ${this.nama} Selamat  Bermain! `); //string khusus untuk langsung menconcate
//     }

//     return mahasiswa;
// }

// let panggilObject1 = Mahasiswa('Dimas Aryasatya', 10); 
//  tidak bisa langsung memasukkan value kedalam parameter yang berisi objek function

//  3.  Constructor function
function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo, ${this.nama} Selamat  Makan! `); //string khusus untuk langsung menconcate
    }

    this.main = function(jam){
        this.energi -= jam;
        console.log(`Halo, ${this.nama} Selamat  Bermain! `); //string khusus untuk langsung menconcate
    }
}
let panggilObject1 = new Mahasiswa('Dimas Aryasatya', 10);

//  4.  Object Create