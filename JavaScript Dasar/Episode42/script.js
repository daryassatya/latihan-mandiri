//  Membuat Object

//Object Literal
var mhs1 = {
    //Key : Value (satu baris ini disebut properti)
    nama : "Dimas Aryasatya",
    nrp : "21552011325",
    email : "dimasaryasatya70@gmail.com",
    jurusam : "Teknik Informatika"
};

var mhs2 = {
    //Key : Value (satu baris ini disebut properti)
    nama : "Test2",
    nrp : "22222",
    email : "test2@gmail.com",
    jurusam : "Teknik Industri"
};

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Test3', '33333', 'test3@gmail.com', 'Teknik Pangan');

// Constructor atau function yang khusus membuat Object
//Constructor harus diawali dengan huruf besar
function Mahasiswa(nama, nrp, email, jurusan){
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Test4', '44444', 'test4@gmail.com', 'Teknik Mesin');