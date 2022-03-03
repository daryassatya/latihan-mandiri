// DOM Manipulation

//  --- Test 1 ---
//  Buat elemen baru
//  1. Buat Wadah element
const pBaru = document.createElement('p');
//  2. Buat teks yang ingin dimasukkan
const teksPBaru = document.createTextNode('Paragraf Baru');
//  3. Simpan tulisan kedalam wadah element
pBaru.appendChild(teksPBaru);
//  4. Panggil node parent untuk menampung wadah
const sectionA = document.getElementById('a');
//  5. Simpan pBaru/wadah di akhir Section A atau node parent
sectionA.appendChild(pBaru); // Simpen ke akhir dari element parent

// --- Test 2 ---
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

// const ul = document.getElementsByTagName('ul')[0];
// const posisiLi = document.getElementsByTagName('li')[1];
// Atau dapat menggunakan ini :
const ul = document.querySelector('section#b ul');
const posisiLi = ul.querySelector('li:nth-child(2)'); //Untuk mempersempit scope
// innerBefore(nodeBaruYangAandisimpan, posisiDisimpanSebelumApa?);
ul.insertBefore(liBaru, posisiLi);