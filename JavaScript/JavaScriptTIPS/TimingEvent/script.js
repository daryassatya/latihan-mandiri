// Timing Event
// Untuk memanipulasi waktu eksekusi pada program kita

// Sebuah objek window = window.setTimeout() atau window.setInterval()
// Sehingga window tidak perlu tulis menjadi seperti ini saja setTimeout()

//  setTimeout(Fungsi yang akan dijalankan, menunggu berapa detik)
// Digunakan ketika kita ingin menjalankan kode kita setelah menunggu sejumlah waktu tertentu

// Contoh 1
// setTimeout(tampilPesan, 10000);

// function tampilPesan(){
//     console.log('Hello World');
// }

//  Contoh 2
//  Dengan funciton Anonymus
// setTimeout(function(){
//     console.log('Oke')
// },2000);

//Untk memberhentikan ketik :
// clearTimeout

// Contoh 3
// const tes = setTimeout(function(){
//     console.log('SELESAI!')
// },5000);
// const tombol = document.getElementById('tombolBerhenti');
// tombol.addEventListener('click', function(){
//     clearTimeout(tes);
//     console.log('Pesan SELESAI! dibeherntikan!');
// })

//  setInterval() 
// Digunakan ketika ingin menjalankan sebuah blok program atau kode kita secara berulang ulang, 
// secara terus menerus atau sejumlah waktu tertentu\

// Contoh 1  
// const tes = setInterval(function(){
//     console.log('Oke');
// }, 2000);

// const tombol = document.getElementById('tombolBerhenti');
// tombol.addEventListener('click', function(){
//     clearInterval(tes);
//     console.log('Interval telah dibeherntikan!');
// })


// Program hitung mundur


setInterval(function(){
    const tanggalTujuan = new Date('Mar 14, 2022 23:59:59').getTime();
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

// 1000 mili detik x 60 detik x 60 menit x 24 jam
    const hari = Math.floor(selisih / (1000*60*60*24));
    const jam = Math.floor(selisih % (1000*60*60*24) / (1000*60*60));
    const menit = Math.floor(selisih % (1000*60*60) / (1000*60));
    const detik = Math.floor(selisih % (1000*60) / 1000);
    const getTulisan = document.getElementById('teks');
    getTulisan.innerHTML= 'Waktu anda tinggal '+jam+':'+menit+':'+detik;
    if(selisih < 0){
        clearInterval;
        getTulisan.innerHTML= 'Waktu anda telah habis';
    }
},1000)

// percobaan hari
const tesTanggalTujuan = new Date('Mar 14, 2022 23:59:59').getTime(); // Mengambil waktu tujuan
const tesSekarang = new Date().getTime(); // Mengambil waktu saat ini
const tesSelisih = tesTanggalTujuan - tesSekarang; // 1647277199000 - 1647175438935
const tesHari = Math.floor(tesSelisih / (1000*60*60*24)); // 101719320 : 86400000 = 1,17730694 -> dibulatkan kebawah menjadi 1
console.log((2*(1000*60*60*24))-tesSelisih); 
console.log(tesHari);
console.log(tesSelisih);