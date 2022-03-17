//Materi Perulangan While

// contoh 1
// Default pengkondisian dari while() adalah True
//Jadi kalau kita memasukkan variable boolean true, maka akan berjalan
ulang = true
i=1
while(ulang){
    console.log("Hello World!")
    console.log("Perulangan ke = " + i++)

    ulang = confirm("Lagi ?")
}

// Conoh 2
// var i = 0
// while(i <= 9){

//     console.log("Hello World")

    // i++
// }