//  Konsep this pada arrow function

//  Constructor Function
// const Mahasiswa = function(){
//     this.nama = 'Dimas Aryasatya';
//     this.umur = 19;
//     this.sayHello = () => {
//         //  This akan mencari ke lexical scope / parent scope (this masih berjalan karena masih memiliki lexical scope)
//         console.log(`Hello, nama sayan ${this.nama}, dan saya berumur ${this.umur} tahun`);
//     }
// }
// const dimas = new Mahasiswa();

// Objek Literal
// const mhs1 = {
//     nama: 'Dimas',
//     umur: 19,
//     sayHello: () =>{
//         //  This tidak dapat menemukan lexical scope, sehingga this.nama dan this.umur undefined
//         console.log(`Hello, nama sayan ${this.nama}, dan saya berumur ${this.umur} tahun`);
//         console.log(this); //this akan mengarah langsung ke window
//     }
//     // sayHello: function() {
//     //         //  bisa dijalankan!, namun lebih baik jika return
//     //         console.log(`Hello, nama sayan ${this.nama}, dan saya berumur ${this.umur} tahun`);
//     //     // console.log(this);
//     //     // return `Hello ${this.nama}`
//     // }
// }


//  Test1 Function Declaration vs Function Expression
// Cek note txt di folder ini!
// const Mahasiswa = function(){
//     this.nama = 'Dimas Aryasatya';
//     this.umur = 19;
//     this.sayHello = function() {
//         //  This akan mencari ke lexical scope / parent scope (this masih berjalan karena masih memiliki lexical scope)
//         console.log(`Hello, nama sayan ${this.nama}, dan saya berumur ${this.umur} tahun`);
//     }
    
//     // --- Cek note txt di folder ini! ---
//     // setInterval(function() {
//     //     console.log(this)
//     // }, 500);
//     // setInterval(() => {
//     //     console.log(this)
//     // }, 500);
  
// }
// const dimas = new Mahasiswa();



// ----- PRAKTEK -----
// Tidak dapat menggunakan arrow function!
// const box = document.querySelector('.box');
// box.addEventListener('click', () => {
//     console.log(this);
// });

// Tetapi function ankan dihoisting,sehingga harus menggunakan function expression atau arrow function
// const box = document.querySelector('.box');
// box.addEventListener('click', function(){
//     this.classList.toggle('size');

// ----- PERHATIHAN BARIS 68 DAN BANDINGKAN DENGAN BARIS 83-----
//     setTimeout(function(){
//         //this.classList.toggle('caption');
//         console.log(this)
//     },600);
// });
// Output : window


// Tapi karena disini ingin langsung dieksekusi tanpa di panggil terlebih dahulu maka arrow function adalah pilihan terbaik
// Dan function expression digunakan untuk... (koding baris 18) 

// Perubahan tipe 1
// const box = document.querySelector('.box');
// box.addEventListener('click', function(){
//     this.classList.toggle('size');
//     // ----- PERHATIHAN BARIS 68 DAN BANDINGKAN DENGAN BARIS 83-----
//     setTimeout(() => {
//         this.classList.toggle('caption');
//     },600);
// });

// Perubahan tipe 2
const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption'

    
    if(this.classList.contains(satu)){
        //Cara lama
        // // let temp = '';
        // temp = satu;
        // satu = dua;
        // dua = temp

        //cara baru
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    // ----- PERHATIHAN BARIS 68 DAN BANDINGKAN DENGAN BARIS 83-----
    setTimeout(() => {
        this.classList.toggle(dua);
    },600);
});
