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

//  2.  Function Declaration + Object.create()
const methodMahasiswa = {
    makan: function(porsi){
        this.energi += porsi;
        console.log(`Halo, ${this.nama} Selamat  Makan! `); //string khusus untuk langsung menconcate
    }, 
    main: function(jam){
        this.energi -= jam;
        console.log(`Halo, ${this.nama} Selamat  Bermain! `); //string khusus untuk langsung menconcate
    },
    tidur: function(jam){
        this.energi += jam*2;
        console.log(`Halo, ${this.nama} Selamat  Tidur! `); //string khusus untuk langsung menconcate
    }
}

function Mahasiswa(nama, energi){
    // let mahasiswa = {};  //Cara 1
    let mahasiswa = Object.create(methodMahasiswa); //Cara 2 dengan meng inherit objek lain kedalam objek Mahasiswa
    // jadi langsung bisa memasukkan value kedalam objek tanpa membuat key dan properti baru lagi
    // tinggal isi saja nama objek utama + key dari objek parent yaitu (methodMahasiswa) yang di inherit 
    // contoh : Mahasiswa.tidur(3);

    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    //  function ditaruh di object lain,agar program yang berjalan lebih ringan
    //  Namun penginputannya juga di objek lain tersebut

    //  Cara 1
    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;

    //  Cara 2


    //Cara2

    // --- bentuk sebelumnya ---
    // mahasiswa.makan = function(porsi){
    //     this.energi += porsi;
    //     console.log(`Halo, ${this.nama} Selamat  Makan! `); //string khusus untuk langsung menconcate
    // } 
        
    // mahasiswa.main = function(jam){
    //     this.energi -= jam;
    //     console.log(`Halo, ${this.nama} Selamat  Bermain! `); //string khusus untuk langsung menconcate
    // }
    //method makan dan main Masih dijalankan walaupun tidak digunakan atau tidak memiliki isi
    //Solusinya adalah, membuat object baru diluar lalu diapnggil
        
    return mahasiswa;
}
let panggilObject1 = Mahasiswa('Dimas Aryasatya', 10); 
//  tidak bisa langsung memasukkan value kedalam parameter yang berisi objek function
// Contoh cara mengisi value kedalam objek: 
    // panggilObject1.makan(5);

//  3.  Constructor function
// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo, ${this.nama} Selamat  Makan! `); //string khusus untuk langsung menconcate
//     }

//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo, ${this.nama} Selamat  Bermain! `); //string khusus untuk langsung menconcate
//     }
// }
// let panggilObject1 = new Mahasiswa('Dimas Aryasatya', 10);

//  4.  Object Create