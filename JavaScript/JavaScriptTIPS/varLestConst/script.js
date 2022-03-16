//Case 1
// Hoisting adalah pemberian default variabel 
// menjadi defined dan tidak terlihat error seperti dibawah ini!
console.log(i);
var i = 10;

// Untuk menghindari error diatas maka kita harus menggunakan let :
console.log(j)
let j = 20;
// Dengan begitu error akan terlihat dibaris keberapanya jika varibel j kosong


//Case 2
// Looping tidak boleh diluar function scrope seperti berikut:
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);
// Karena variabelnya masih bisa di panggil keluar. 
// Karen javascript  menggunakan function scope dan bukan block scope

//Untuk mengatasinya kita menggunakan :
(function (param) {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}());
console.log(i);

// JavaScript SE6 memungkinkan kita melakukan itu dengan menggunakan let
for (let i = 0; i < 10; i++) {
        console.log(i);
    }
console.log(i);
//  Dengan begini, variabel tidak akan bisa dipanggil kembali


// Jika sebuah variabel benar2 tidak akan kita ubah valuenya,
// Maka gunakan :
const k = 20;
//  namun masih dapat berubah jika kita merubah isi value properti object
const mhs = {
    nama: "Dimas",
    jurusan: "Teknik Informatika",
    umur: 19
};

mhs.umur = 19;
// ini memungkinkan, tapi tidak dapat diubah objeknya menjadi objek baru

const tesArray = [1,2,3];
tesArray = [1,2,3,4];   //Akan error
tesArray.push(4);   // Maka akan bisa