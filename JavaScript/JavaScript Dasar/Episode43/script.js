// contoh :
// var a = 10;
// console.log(window.a); //Hasilnya 10
// console.log(this.a); //Hasilnya 10

//  Properti itu adalah variabel yang ada didalam object
//  Method adalah function yang ada didalam object


// Membuat Object

//  Cara1 - Funcion Delcaration
// function halo(){
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
//  This mengembalikan object global

//  Cara2 - Object Literal
// var obj = {nama : 'Dimas', umur : 19};
// obj.halo = function(){
//     console.log(this)
//     console.log('Halo');
// }
// obj.halo();
// Pada cara literal, this mengembalikan object yang bersangkutan

// //  Cara 3 - Constructor Function
// function Halo(){
//     this.sapa = "Hello";
//     console.log(this);
//     console.log('halo');
// }
// Halo() //Jika hanya seperti ini, maka this akan mengembalikan nilai window
// new Halo // Jika seperti ini, maka this akan mengembalikan objek baru
// var obj1 = new Halo();
// var obj2 = new Halo();


//This itu sama dengan window

// console.log(window === this); // Hasilnya True

