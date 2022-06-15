// Manipulasi Array


//List Array Method
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//1. Menambah isi array
// var arr = [];
// arr[0] = "Dimas";
// arr[1] = "Arya"; 
// arr[2] = "Satya";

//2. Menghapus isi array
// var arr = ["Dimas", "Arya", "Satya"];
// arr[1] = undefined;
// console.log(arr);

//3. Menampilkan isi array
// var arr = ["Dimas", "Arya", "Satya"];
// for(i=0;i<arr.length;i++){
//     console.log("Mahasiswa ke "+(i+1)+" : "+arr[i]);
// } 

var arr = ['Dimas', 'arya', 'satya'];
// Array Method
// 1. length
// 2. join ,yang menggabung seluruh isi aray dan menguubahnya menjadi string
// Contoh:
console.log(arr.join(' - ')); //Method adalah function yang ada didalam sebuah objek
//3.Push, menabah isi dari yang terakhir
arr.push('Ganteng', 'Banget');

// 4. Pop, menghapus isi dari yang terakhir
arr.pop(); //Harus satu-persatu dan benar2 menghilangkan atau bukan diganti dengan undefined

//5. unshift dan shift
arr.shift(); // Mirip dengan push, namun dimulai dari awal array
arr.unshift();  // Mirip dengan pop, namun dimulai dari awal array

