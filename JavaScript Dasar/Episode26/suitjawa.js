//Game Suit Jawa Mulai
var lagi = true;

while(lagi == true){
    //Menangkap pilihan player
    var p = prompt('Pilih : gajah, semut, orang');
    //Menangkap pilihan komputer
    var comp = Math.random();

    if( comp > 0.67){
        comp = 'gajah';
    } else if( comp > 0.34){
        comp = 'orang'
    } else {
        comp = 'semut'
    }

var hasil = '';
// menentukan rulesnya
    if(p == comp){
        hasil = 'Seri!'
    } else if (p == 'gajah'){
    if(comp == 'orang'){
        hasil = 'MENANG!';
    } else {
        hasil = 'KALAH!'
    }
    } else if (p == 'orang'){
        if(comp == 'semut'){
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH!'
            }
    } else if (p == 'semut'){
        if(comp == 'gajah'){
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH!'
        }
    } else {
        alert('Kamu Memasukkan keyword yang salah!');
    }

    if(hasil.length === 0){
    
    }else{
    alert('Player Memasukkan ' + p + ' Komputer memasukkan ' + comp + ' Kamu ' + hasil)
    }
// if(hasil !== null){
//     
// }
    lagi = confirm('Apakah Anda mau main lagi ?')

}
alert('Terima Kasih Sudah Bermain!')