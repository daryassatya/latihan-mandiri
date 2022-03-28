//  Destructuring Part 2



// Test 1
// function penjumlahanPerkalian(a,b){
//     return [a+b, a*b];
// }

// Cara Lama :
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// Cara Destructuring :
// const [jumlah, kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);


// Test 2
// function kalkulasi(a,b){
//     return [a+b, a-b, a*b, a/b];
// }
// // Cara Destructuring :
//  // destructuringnya harus sesuai urutan dari return valuenya!
// const [jumlah, kurang, kali, bagi = 'Tidak ada' /*untuk memberikan nilai default*/] = kalkulasi(2,3);
// console.log(jumlah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);


// Test 3
// function kalkulasi(a,b){
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }
// // Urutan return tidak berpengaruh, karena memanggil berdasarkan properti
// const {bagi, kali, kurang, tambah} = kalkulasi(2,3);
// console.log(bagi);
// console.log(kali);
// console.log(kurang);
// console.log(tambah);


// Test 4 - Destructuring function arguments (Nesting)
const mhs1 = {
    nama: "Dimas Aryasatya",
    umur: 19,
    email: "dimasaryasatya@gmail.com",
    nilai: {
        tugas: 90,
        uts: 90,
        uas: 90
    }
}

function cetakMhs({nama, umur, nilai: {tugas,uts,uas}}){
    return `Helo, nama saya ${nama}, saya berumur ${umur} tahun.
Nilai Uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));