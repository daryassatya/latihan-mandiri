// function dengan argumen normal
// function tambah(a,b){
//     return a + b;
// }

// function kali(a,b){
//     return a*b;
// }

// var a = parseInt(prompt('Masukkan Nilai 1 : '));
// var b = parseInt(prompt('Masukkan Nilai 2 : '));

//Normal
// var hasil = tambah(a,b);
// console.log(hasil);

//Dengan Ekspresi
// var hasil = tambah(a*2,b*2);
// console.log(hasil);

//Dengan function didalamnya
// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);


//Nilai didalam argument tambah(), default sebenarnya adalah ditampung kedalam bentuk array
// Dengan Arguments
function tambah(){
    var hasil = 0;
    
    for( i=0; i < arguments.length; i++){
        hasil += arguments[i];

    }

    return hasil;
}

var hasil = tambah(1,2,3,4);
console.log(hasil);