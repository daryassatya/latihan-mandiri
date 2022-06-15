// var arr = ['Dimas',  'Arya', 'Satya'];

// 4. Splice
//splice(indexAwal, mauDiihapusBrp?OPTIONAL, mauDitambahApa?OPTIONAL);
// arr.splice(1,1,'Ganteng'); //hasil = ['Dimas', 'Ganteng', 'Satya']
// arr.splice(1,2) //hasil = ['Dimas']
// arr.splice(1,2, 'Ganteng', 'Banget') //hasil = ['Dimas', 'Ganteng', 'Banget']
// console.log(arr);

//5. Slice
//slice(awal, akhir)
var arr = ['Dimas', 'Arya', 'Satya', 'Ganteng', 'Banget'];
// arr.slice(1,3);

//slice mengahsilkan array baru, jadi harus disimpan kedalam array baru
var arr2 = arr.slice(1,3); // ['Arya', 'Satya']
console.log(arr2);