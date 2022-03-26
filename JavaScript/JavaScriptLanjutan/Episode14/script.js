//  --- Desctructing ---
// Expression pada javascript yang membuat kita dapat MEMBONGKAR nilai dari ARRAY atau properti dari OBJECT
// kedalam VARIABEL yang TERPISAH
// - MDN Web DOMRectList
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructing_assignment

// Contoh Sederhana :


// 1. Array
// const coba = ['satu', 'dua', 'tiga'];

// const [a, b, c] = coba;
// console.log(a)  // "Satu"
// console.log(b)  // "Dua"
// console.log(c)  // "Tiga"

// 2. Object
// const mhs = {
//     nama: "Dimas Aryasatya",
//     umur: 19,
//     email: "dimasaryasatya@gmail.com"
// }

// const {nama ,umur ,email} = mhs; //nama parameter harus sama dengan key
// console.log(nama)   // "Dimas Aryasatya"
// console.log(umur)   // 19
// console.log(email)  // "dimasaryasatya@gmail.com"

//Nama variabel bebas


//  --- (Destructuring Array) ---
//  Test 1 
// const perkenalan = ['Halo', 'nama', 'saya', 'Dimas Aryasatya'];
// // const [salam, satu ,dua, namaSaya] = perkenalan;
// const [salam, , , namaSaya] = perkenalan; // cara skip
// console.log(`${salam} ${namaSaya}`);


//  Test 2 (Swap Items)
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);


// Test 3 (Return value pada function)
// function coba(){
//     return [1,2];
// }
// const [x, y] = coba();
// console.log(a);


// Test 4 (Rest parameter)
// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(values);


//  --- (Destructuring Object) ---

// Test 1 (DI BARIS 18)

// Test 2 (Assignment tanpa deklarasi object)

// Sebelum :
// const mhs = {
//     nama: "Dimas Aryasatya",
//     umur : 19
// }
// const { nama, umur } = mhs

// Sesudah :
// ({ nama, umur } = {nama: "Dimas Aryasatya",umur : 19});
// console.log(nama);


// Test 3 (Assign ke variabel baru)
// const mhs = {
//     nama: "Dimas Aryasatya",
//     umur:19
// }
// const {nama: n, umur: u} = mhs;
// console.log(n)


// Test 4 (Memberikan nilai Default & Assign ke variabel baru)
// const mhs = {
//     nama: "Dimas Aryasatya",
//     umur:19,
//     email: "dimasaryasatya@gmail.com"
// }
// // const {nama: n, umur: u, email = 'default@gmail.com'} = mhs;
// const {nama: n, umur: u, email: e = 'default@gmail.com'} = mhs; //sambil uabh nama variabel email
// console.log(e)


// Test 5 (Rest Parameter untuk Object)
// const mhs = {
//     nama: "Dimas Aryasatya",
//     umur:19,
//     email: "dimasaryasatya@gmail.com"
// }
// // const {nama: n, umur: u, email = 'default@gmail.com'} = mhs;
// const {nama, ...values} = mhs; //sambil uabh nama variabel email
// console.log(values)


// Test 6 (Mengambil field pada Object, lalu dikembalikan melalui function)
const mhs = {
    id: 1,
    nama: "Dimas Aryasatya",
    umur:19,
    email: "dimasaryasatya@gmail.com"
}

// function getIdMhs(mhs){
//     return mhs.id;
// }
function getIdMhs({id}){ // mengambil properti tertentu saja
    return id;
}

console.log(getIdMhs(mhs)); //Parameter ini harus dimasukkan untuk mengirim ke dalam function