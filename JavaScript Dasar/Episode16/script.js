// Alert
// Hanyalah sebuah sebuah PopUp pemberitahuan biasa
// alert('Halo')
// alert('Nama')
// alert('Saya')
// alert('Dimas Aryasatya')

//Promt
// PopUp Box dengan inputan
// Dapat mengandung apapun yang diinputkan
// var nama = prompt('Masukkan nama kamu')
// alert(nama)

//Confirm
// PopUp pemberitahuan yang jika tombol 'Oke' dan 'Cancel' dipencet, maka kita dapat mengaturnya
// Bernilai BOOLEAN

//Contoh 1
// var test = confirm("Kamu yakin ?")
// if(test == true) {
//        alert("User menekan tombol Oke")
// }else{
//        alert("User menekan tombol Cancel")
// }

//Contoh 2
var lagi = true

while(lagi == true){
       var nama = prompt("Masukkan nama Kamu :")
       alert("Halo "+ nama)

       lagi = confirm("Coba lagi ?")
}

alert("Terima Kasih !")
