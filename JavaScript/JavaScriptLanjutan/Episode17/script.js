// Spread Operator vs Rest Parameter

// Iterable Object:
// -String
// -Array
// -Arguments/NodeList
// -TypedArray
// -Map
// -Set
// -User-defined iterables

// Spread Operator
// "Memecah (Exoand / Unpack) iterables menjadi single element"

// Test 1
// const mhs = ['Dimas', 'Arya', 'Satya'];
// console.log(...mhs); //Output : Dimas Arya Satya
// console.log(...mhs[0]); //Output : D i m a s

// Test 2 (Menggabungkan 2 array atau lebih)
// const mhs = ['Dimas', 'Arya', 'Satya'];
// const dosen = ['Sandhika', 'Doddy', 'Erik'];
// const orang = [...mhs, 'Ganteng', ...dosen]; // Ooutput ['Dimas', 'Arya', 'Satya', 'Sandhika', 'Doddy', 'Erik']
// const orang2 = mhs.concat(dosen); // Kurang fleksibel
// console.log(orang);


// Test 3 (Meng-Copy Array)
// const mhs = ['Dimas', 'Arya', 'Satya'];

// Cara kurang benar
// const mhs1 = mhs; // Bukan meng-copy, tapi meng referensi
// mhs1[0] = 'Ganteng';
// console.log(mhs); // variabel mhs malah ikutan kerubah juga

// Cara yang lebih baik
// const mhs2 = [...mhs];
// mhs2[0] = 'Ganteng';
// console.log(mhs2); //Output : ['Ganteng', 'Arya', 'Satya']
// console.log(mhs); //Output : ['Dimas', 'Arya', 'Satya']


// Test 4 (Menampung kedalam array)
// const liMhs = document.querySelectorAll('li'); //Bentuknya NodeList

// Cara biasa :
// const mhs = [];
// for(let i=0; i<liMhs.length; i++){
//     mhs.push(liMhs[i].textContent);
// }
    
// Cara keren :
// const mhs = [...liMhs].map(m => m.textContent); // Memasukkan nodeList tersebut kedalam array
// Bentuk sederhanya : const mhs = [...liMhs] untuk mengubah sebuah NodeList ELEMENT menjadi array


// PRAKTEK
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
//Join mengubah array menjadi string

console.log(huruf);