// Request dengan JQEURY
// $.ajax({
//     url:'http://www.omdbapi.com/?apikey=e2e26a15&s=avengers',
//     success: results => {
//         console.log(results)
//     },
//     error: e => {

//     }
// });


// Request dengan JavaScript Murni (Vanilla)
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function (){
//     if(xhr.status === 200){
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?apikey=e2e26a15&s=avengers');
// xhr.send();


// Fetch & Promise
// const test = fetch('http://www.omdbapi.com/?apikey=e2e26a15&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));


// Promise
// Sebuah objek yang merepresentasikan keberhasilan / kegagalan 
// dari sebuah event yang asynchronous di masa yang akan datang.

// Jani (Terpenuhi / Ingkar)
// atau
// states (fulfilled / rejected / pending)

// 3 Fungsi callback (resolve / reject / finally)
// Aksi (then / catch)


// Contoh 1 (Promise sederhana)
// let ditepati = true
// // let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('Janji telah ditepati');
//     } else {
//         reject('Ingkar janji')
//     }
// });
// console.log(janji1);


// janji1
//     .then(response => console.log('OK : '+response))
//     .catch(response => console.log('Tidak OK : '+response))


// Contoh 2 (Pending terlebih dahulu) 
// let ditepati = false
// const  janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati setelah beberapa waktu');
//         }, 2000);
//     }
// });

// console.log('Mulai');
// // console.log(janji2.then(response => console.log('Janji '+ response)));
// janji2
//     .finally(() => console.log('Selesai Menunggu')) //Finally dulu yang dijalankan terlebih dahulu dibandingkan dengan 2 dibawah ini
//     .then(response => console.log('Janji '+ response))
//     .catch(response => console.log(' '+ response));
// console.log('Selesai');


// Contoh 3 (Pormise All)
// Promise.all

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
            judul: 'Avengers',
            sutradara: 'Diimas Aryasatya',
            pemeran: 'KumbangJantan99'
        }
    ]);
    }, 1000)
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                kota: 'Bekasi',
                temp: 32,
                kondisi: 'Panas Banget'
            }
        ]);
    }, 500);
})

// Panggil promise sederhana :
// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// DIJALANKAN SEKALIGUS
Promise.all([film, cuaca])

    // Jalankan 
    // .then(response => console.log(response)); 

    //Jika mau tanpa didalam array
    .then(response => {
        const [film, cuaca] = response;
        console.log(cuaca);
        console.log(film);
    })