//  Rest Parameter
// "Mempresentasikan argument pada function dengan jumlah tidak terbatas menjadi sebuah array"

// Test 1
// harus ditaruh diakhir atau ditaruh sendiri
function myFunc(a,b, ...myArgs /*Dapat mengambil semua atau sisa yg dikirim parameter*/){
    return `a = ${a}, b= ${b}, myArgs = ${myArgs}`;
    // return arguments; //yang di return bukanlah sebuah array, namun objek

    // cara mengubah objek jadi array :
    // return Array.from(arguments);
    // return [...arguments];
}
console.log(myFunc(1,2,3,4,5));


// Test 2 (Menjumlah)
function jumlahkan(...angka){

    // --- Cara 1 ---
    // let total = 0;
    //     for(const a of angka){
    //         total+=a;
    //     }
    // return total;

    // --- Cara 2 ---
    return angka.reduce((currentVal, loop) => currentVal+loop);
}
console.log(jumlahkan(1,2,3,4,5));


// Test 3 (Array Destructuring)
const kelompok1 = ['Dimas', 'Arya', 'Satya', 'Ganteng', 'Banget'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua, wakil, anggota); // variabel anggota akan menjadi array


// Test 4 (Object Destructuring)
const team = {
    pm: 'Dimas',
    frontEnd1: 'Arya',
    frontEnd2: 'Satya',
    backEnd: 'Daryas',
    ux: 'Kumbang',
    devOps: 'Orang'
}
const {pm, ...myTeam} = team;
console.log(myTeam);


// Test 5 (Filtering)
function filterBy(type, ...values){
    return values.filter(val => typeof val === type /* atau 'number' */);
    // return [type, filter];
}
console.log(filterBy('number', 1,2,'Dimas', false, 10, true, 'Arya'))