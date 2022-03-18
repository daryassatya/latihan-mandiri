//  Prototype 

// --- Versi object ---
// function Mahasiswa(nama, energi){
//     // Sebetulnya dengan metode constructor ini, javascript melakukan :
//     // let this = {} dan juga let this = Object.create(Mahasiswa.prototype);
//     // lalu melakukan return this; diakhir objek ini
//     this.nama = nama;
//     this.energi = energi;
// }

// //  Jika terdapat function didalamnya makan haru dimasukkan kedalam prototype
// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Halo, ${this.nama} Selamat  Makan! `; //string khusus untuk langsung menconcate
// }
// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Halo, ${this.nama} Selamat  Bermain! `; //string khusus untuk langsung menconcate
// }
// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam*2;
//     return `Halo, ${this.nama} Selamat  Tidur! `; //string khusus untuk langsung menconcate
// }

// let panggilMahasiswa1 = new Mahasiswa('Dimas Aryasatya', 10);


//  --- Versi Class ---
//  Sebenarnya, yang dijalankan di belakan layar adalah prototype yang diatas
class Mahasiswa {
    //  Adalah function yang di eksekusi langsung pertama kali
    //  Properti class tidak harus untuk membentuknya di dalam construct
    // Tetapi jika nilainya akan bertambah, maka harus didefinisikan dahulu didalam construct
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `Halo, ${this.nama} Selamat  Makan! `; 
    }

    main(jam){
        this.energi -= jam;
        return `Halo, ${this.nama} Selamat  Bermain! `; 
    }

    tidur(jam){
        this.energi += jam*2;
        return `Halo, ${this.nama} Selamat  Tidur! `; 
    }
}

let panggilClass1 = new Mahasiswa('Dimas Aryasatya', 10);