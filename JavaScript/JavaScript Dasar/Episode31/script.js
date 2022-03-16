//Function Scroping
//Untuk mengakses suatu variabel

// Global Scope atau Window Scope
var a = 1;

//Function Scope
function tes1(){
    var b = 2;
}

//tidak dapat mengambil variabel lokal diluar jika tidak direturn
// console.log(b);

//
function tes2(){
    var a = 2; //Membuat variabel lokal baru
    
    console.log(a); //Akan menampilkan angka 2
    console.log(window.a) //Akan menampilkan angka 1
}

function tes3(){
    a = 3; 
    //Mengubah variabel global a dari 1 menjadi 3.

    //Jika menulisnya tanpa var, dan 
    // tidak ada variabel global dengan nama yang sama, maka akan terbuat otomatis 
    // sebuah variabel global.

    // namun jika ingin membuatnya menjadi variabel lokal 
    // tanpa menggunakan var, maka gunakan keyword "use strict;"
}

// CATATAN!'
// Untuk memanggil sebuah function, kita harus memanggilnya terlebih dahulu!
// Seperti ini :
tes2();