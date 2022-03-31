// Jalankan di Webserver Xampp atau Laragon

// Callback

// "Function yang dikirimkan sebagai parameter pada function lain" 
// Contoh:

// --- Synchronous Callback --- 

// Test 1 (Bentuk 1)
// function halo(nama){
//     return alert(`Halo, ${nama} !`);
// }

// function tampilkanPesan(callback /*Nama bisa apa saja, asalkan yang dimasukkan diparameter benar!*/){
//     const nama = prompt('Masukkan Nama Kamu :');
//     callback(nama);
// }
// tampilkanPesan(halo); //function halo tidak dikasih dalam kurung agar tidak langsung berjalan

// Urutan proses:
// 1. jalankan function tampilkanPesan yang diisi dengan function halo
// 2. didalam function tampilkanPesan, buat variabel nama yang diisikan prompt user
//     3. Lalu jalankan callback yang sebenarnya adalah function halo, diisi dengan variabel nama
//     4. jalankan function Halo dan rerturn alert dengan parameter nama;

// "Function yang dieksekusi setelah fungsi lain selesai dijalankan"


// Test 2 (Bentuk 2)
// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama Kamu :');
//     callback(nama);
// }
// tampilkanPesan(nama => alert(`Halo, ${nama}!`));


// const mhs = [
//     {
//         "nama": "Dimas",
//         "nrp": "123",
//         "email": "dimasa@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1,
//     },
//     {
//         "nama": "Arya",
//         "nrp": "124",
//         "email": "arya@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2,
//     },
//     {
//         "nama": "Satya",
//         "nrp": "125",
//         "email": "satya@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2,
//     }
// ];

// Test 3
// mhs.forEach(data => console.log(data.nama));
// mhs.forEach(({nama}) => console.log(nama)); //Higher Order Function biasanya juga Callback


// Test 4
// Kausnya adalah pada saat stack ke 2 berjalan lama karena banyak data yang harus diambil
// console.log('Mulai');
// mhs.forEach(({nama}) => {

//     for(let i=0; i<1000000; i++){ //Kita sengaja bvat loading
//         let date = new Date();
//     }

//     console.log(nama);
// });
// console.log('Selesai');


// --- Asynchronous Callback ---

// Test 5 (Ajax Vanilla JavaScript atau murni)
function getDataMahasiswa(url/* Tempat filenya berada atau api*/, success, error){
    let xhr = new XMLHttpRequest(); //Object Ajaxnya

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 /* 4 artinya ready (state terakhir)*/){
            if(xhr.status === 200 /* 200 artinya status oke*/){
                success(xhr.response);
            } else  if(xhr.status === 404 /* Not Found */){
                error();
            }
        }
    }

    xhr.open('get'/*Methodnya*/, url)
    xhr.send();
}

// Cara 1
// function succes(){

// }
// function error(){

// }
// gerDataMahasiswa('data/mahasiswa.json')


// Cara 2
// console.log('Mulai');
// getDataMahasiswa('data/mahasiswa.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
// });
// console.log('Selesai');

// Ouput Yang usdah Asynchronus: 
// script.js:112 Mulai
// script.js:118 Selesai
// script.js:115 Dimas
// script.js:115 Arya
// script.js:115 Satya


// Test 6 (Jquery Asynchronus)
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    // success: (mhs) => {
    //     console.log(mhs)    // Sudah otomatis di Json Parse
    // },
    success: (mhs) => {
        console.log(mhs);
    },
    error: (e) => {
        console.log(e.responseText);
    },

});
console.log('selesai');