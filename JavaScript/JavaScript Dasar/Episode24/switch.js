var test = prompt ('Masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink');

switch(test){
    // cara tidak efisien
    // case 'nasi' :
    //     alert('Makanan / minuman SEHAT');
    //     break;

    // case 'daging' :
    //     alert('Makanan / minuman SEHAT');
    //     break;

    // case 'susu' :
    //     alert('Makanan / minuman SEHAT');
    //     break;

    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert(' Makanan / Minuman SEHAT!');
        break;

    case 'hamburger' :
    case 'softdrink' :
        alert(' Makanan / Minuman Tidak SEHAT!');
        break;

    default :
        alert('anda memasukkan nama makanan / minuman yg salah');
        break;
    }

