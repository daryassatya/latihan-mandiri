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
function Mahasiswa(nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo, ${this.nama} Selamat  Makan `); //string khusus untuk langsung menconcate
    }

    return mahasiswa;
}

//  3.  Constructor function
//  4.  Object Create