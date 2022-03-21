//  High Order Function
//  Function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, 
//  maupun sebagai return value.

//  --- Contoh function sebagai return value ada di Javascript Lanjutan Episode5

//  --- Contoh function sebagai return :
//  Function kerjakanTugas dibawah ini, disebut Higher Order Function, sedangkan function selesai yang 
//  kita panggil didalam argumen dan parameternya disebut callback
function kerjakanTugas(matkul, selesaiFunction/*Callback*/){
    console.log(`Mulai Mengerjakan tugas ${matkul} ...`);
    selesaiFunction();
} 

//Bisa biigni :
// const selesai = function(){
//     alert('Selesai mengerjakan tugas!');
// }

//Atau juga begini :
function selesai(){
    alert('Selesai mengerjakan tugas!');
} 


kerjakanTugas('Mtk', selesai);


// Contoh Lain dari Higher Order Function

//  1.
setTimeout(function(){
    console.log('Hello World');
}, 1000);

//  2.
const tombol = document.querySelector('.submit');
tombol.addEventListener('click', function(){
    console.log('tombol ditekan!');
});


// Contoh kasus manfaat Higher Order Function

//  1.  Kasus mengulang yang banyak dan simpel

//  Sederhana :
// for(let i=0; i<5; i++){
    // console.log(`Hello, Dimas yang ke-${i}`);
// } 
// for(let i=0; i<10; i++){
    // console.log(`Hello, Arya yang ke-${i}`);
// } 
// for(let i=0; i<20; i++){
    // console.log(`Hello, Satya yang ke-${i}`);
// } 

// Dengan function agar fungsinya dapat dipanggil dimanapun dengan jumlah yang bisa diatur
// function sayHello(nama, n){
//     for(let i=0; i<n; i++){
//         console.log(`Hello, ${nama} yang ke-${i}`);
//     } 
// }
// //Hanya tinggal dipanggil dan diisi parameternya
// sayHello('Dimas', 5);
// sayHello('Arya', 10);
// sayHello('Satya', 20);


//  2.  Untuk mengirim sebuah ALERT
function sayHello(nama, n, action){
    for(let i=0; i<n; i++){
        action(`Hello, ${nama} yang ke-${i}`);
    } 
}
sayHello('Dimas', 5, alert);