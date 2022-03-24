// Template Literal / Template String

// 1.   Menggunakan `` back tick
// 2.   Multi-line String 
    //  Contoh :
    //  `string text baris2
    //   string text baris3` //Baris 2 dan 3 langsung enter tanpa tutup! (Multi Line string)

// 3.   Embedded Expression
    //  Contoh :
    // `string text ${expression} string text` //(embedded expression)
    //  let x = 10
    // `Bisa berisi ternary ${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`

// 4.   Html Fragments
    //  Contoh :
    const mhs = {
        nama: 'Dimas Aryasatya',
        umur : 19,
        nrp: '123123123123',
        email: 'dimasaryasatya@gmail.com'
    };

    // dengan concate biasa:
    const concateBiasa = '';
    concateBiasa += '<div class="mhs">';
    concateBiasa += '<h2>' + mhs.nama + '</h2>';
    concateBiasa += '<span class="nrp">' + mhs.nrp + '</span>'; 
    concateBiasa +=  '</div>';

    // dengan back tick :
    const backTick = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
    </div>`;
    // console.log(backTick);
    const body = document.body;
    body.innerHTML = backTick ;
    console.log(body);

// 5.   Expression Interpolation
// 6.   Tagged Template

// contoh:
//  `string text`

//  `string text baris1`



// tag `string text ${expression} string text` //(tagged template)