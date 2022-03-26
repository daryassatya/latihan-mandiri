// 1.   HTML Fragments
// const mhs = {
//     nama: 'Dimas Aryasatya',
//     umur : 19,
//     nrp: '123123123123',
//     email: 'dimasaryasatya@gmail.com'
    
// };
// document.body.innerHTML = el;

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
//     </div>`;


// 2. Looping
// const mhs = [
//     {
//     nama: 'Dimas',
//     email: 'dimasa@gmail.com'
//     },
//     {
//     nama: 'Arya',
//     email: 'arya@gmail.com'
//     },
//     {
//     nama: 'Satya',
//     email: 'satya@gmail.com'
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(data => `<ul>
//         <li>${data.nama}</li>
//         <li>${data.email}</li>
//     </ul>`).join('')}
// </div>`

// // Kenapa harus di tambahkan join?

// //  Output:

// //  Dimas
// // dimasa@gmail.com
// // ,
// // Arya
// // arya@gmail.com
// // ,
// // Satya
// // satya@gmail.com

// // Karena pada dasarnya map akan mengembalikan nilai array, sehingga harus dihilangkan dulu
// document.body.innerHTML = el;


// 3. Conditionals
// const lagu = [
//     {
//         judul:'Tetap Dalam Jiwa',
//         penyanyi: 'Isyana Saraswati'
//     },
//     {
//         judul:'Aku adalah',
//         penyanyi: 'Isyana Saraswati',
//         feat:'Rayi Putra'
//     },
//     {
//         judul:'Tetap Dalam Jiwa',
//         penyanyi: 'Isyana Saraswati'
//     },
// ];

// const el = `<div class="lagu">
// ${lagu.map(lg => `<ul>
//         <li>${lg.judul}</li>
//         <li>${lg.penyanyi} ${(lg.feat) ? `(Feat ${lg.feat})` : ''}</li>
//     </ul>`).join('')}
// </div>`

// document.body.innerHTML = el;


// 4.   Nested
//  HTML Fragments Bersarang

const mhs = {
    nama: 'Dimas Aryasatya',
    semester : 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemprograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

// - Cara Hidgh Order Function :
// const el = `<div class="mahasiswa">
// <h2>${mhs.nama}</h2>
// <span class="semester">Semester : ${mhs.semester}</span>
// <h4>Mata Kuliah :</h4>
// <ol>
// ${mhs.mataKuliah.map(data => `<li>${data}</li>`).join(')}
//     </ol>
// </div>`


// - Cara dengan function terpisah
function cetakMatakuliah(mataKuliah){
    return `<ol>
        ${mataKuliah.map(matkul => `<li>${matkul}</li>`).join('')}
    </ol>`;
}

const el = `<div class="mahasiswa">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMatakuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;