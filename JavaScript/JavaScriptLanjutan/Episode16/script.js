// for..of dan for..in


// ---> For..of <---
// "Creates a loop iterating over iterable object"
// "Membuat sebuah perulangan pada object"

// Iterable Object:
// -String
// -Array
// -Arguments/NodeList
// -TypedArray
// -Map
// -Set
// -User-defined iterables


// --- Test 1 (Array) --- 
const mhsItterable = ["Dimas", "arya", "Satya"];
// Contoh-constoh Perulangan

// 1. for Loop
// for(let i=0; i<mhsItterable.length; i++){
//     console.log(mhsItterable[i]);
// }

// 2. forEach dengan arrow function
// mhsItterable.forEach(m => console.log(m));

// 3. for ... in (Mirip dengan foreach pada php)
// Tanpa index
// for( const m of mhsItterable ){
//     console.log(m);
// }

// Dengan index (Hanya ngide. dan for ... of tidak diperuntukkan untuk mendapatkan index)
// for(const [i,m] of mhsItterable.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i}`);
// }


// --- Test 2 (String) ---
// const str = "Dimas"
// for( const s of str ){
//     console.log(s);
// }


//  --- Test 3 (Arguments atau NodeList) ---

// - NodeList
// const li = document.querySelectorAll('li');
// console.log(li);
// for (const el of li){
//     console.log(el.textContent);
// }

// - Arguments
// function jumlahAngka(){
//     let jumlah = 0
//     for( a of arguments){
//         jumlah += a;
//     }
//     console.log(jumlah);
// }
// jumlahAngka(1,2,3,4,5);


// ---> For..in <---
// "Creates a loop only iterating over enumerable"
// "Membuat perulangan pada enumerable atau properti pada objek"

// Test 1
const mhsObject = {
    nama: "Dimas Aryasatya",
    umur: 19,
    email: "dimasaryasatya@gmail.com"
}

for (m in mhsObject){
    console.log(m); //Hanya untuik mengambil KEY
    console.log(mhsObject[m]); //Hanya mengambil VALUE

}