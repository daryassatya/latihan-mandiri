// 9. Filter
var angka = [1,2,10,5,20,3,6,8,4,2];
// var filterAngka = angka.filter(function(a){
//     return a == 2;
// });
// console.log(filterAngka);

// 10. Find
var findAngka = angka.find(function(a){
    return a > 10;
})
// console.log(findAngka.join(' - ')); Bukan menghasilkan array, tapi hanya satu nilai. 
// jadi tidak dapat menggunakan method join
console.log(findAngka); //Ouput = 10

