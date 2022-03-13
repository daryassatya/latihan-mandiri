const statusInfo = document.querySelector('.info');
const tampilanComp = document.querySelector('.img-komputer');
// const pilihanGajah = document.querySelector('.gajah');
// const pilihOrang = document.querySelector('.orang');
// const pilihanSemut = document.querySelector('.semut');
const compScoreView = document.querySelector('.comp-score-span2');
let compScore = 0;
const playerScoreView = document.querySelector('.player-score-span2');
let playerScore = 0;

function randomComp() {
    // let comp = Math.random();

    //Hasil saya sebelumnya
    // if( comp > 0.67){
    //     rerturn = 'gajah';
    // } else if( comp > 0.34){
    //     rerturn = 'orang';
    // } else {
    //     rerturn = 'semut';
    // }

    //Dipersingkat :
    const comp = Math.random();
    if(comp >= 0.67) return 'gajah';
    if(comp >= 0.34) return 'orang';
    return 'semut';
}

function prosesGame(p,comp){
    
    // menentukan rulesnya
    let hasil = '';
    // if(p == comp){
    //     hasil = 'Seri!'
    // } else if (p == 'gajah'){
    //     if(comp == 'orang'){
    //         hasil = 'MENANG!';
    //     } else {
    //         hasil = 'KALAH!'
    //     }
    // } else if (p == 'orang'){
    //     if(comp == 'semut'){
    //         hasil = 'MENANG!';
    //     } else {
    //         hasil = 'KALAH!'
    //     }
    // } else if (p == 'semut'){
    //     if(comp == 'gajah'){
    //         hasil = 'MENANG!';
    //     } else {
    //         hasil = 'KALAH!'
    //     }
    // } else {
    //     alert('Game mengalami masalah salah!');
    // }

    // return hasil;

    //  Cara ringkas
    if(p == comp) return 'SERI!';
    if(p == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if(p == 'orang') return (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    if(p == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
}

function putar(){
    const tampilanComp = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    waktuMulai = new Date().getTime();
    setInterval(function(){
        if (new Date().getTime() - waktuMulai > 1000){ 
            clearInterval; 
            return;
        }
        tampilanComp.setAttribute('src', 'img/'+gambar[i++]+'.png');
        if ( i == gambar.length ) i=0;
    }, 100);
}
    

//  Cara sebelumnya


// pilihanGajah.addEventListener('click', function(){
//     const pilihanComp = randomComp();
//     tampilanComp.setAttribute('src', 'img/'+pilihanComp+'.png');
//     statusInfo.innerHTML = prosesGame(pilihanGajah.className, pilihanComp);
// })
// pilihOrang.addEventListener('click', function(){
//     const pilihanComp = randomComp();
//     tampilanComp.setAttribute('src', 'img/'+pilihanComp+'.png');
//     statusInfo.innerHTML = prosesGame((pilihanOrang.className, pilihanComp);
// })
// pilihanSemut.addEventListener('click', function(){
//     const pilihanComp = randomComp();
//     tampilanComp.setAttribute('src', 'img/'+pilihanComp+'.png');
//     statusInfo.innerHTML = prosesGame((pilihanSemut.className, pilihanComp);
// })

//  Cara baru
const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function (i) {
    i.addEventListener('click', function () {
        putar();
        setTimeout(function(){
            const pilihanComp = randomComp();
            const hasilProses = prosesGame(i.className, pilihanComp);
            tampilanComp.setAttribute('src', 'img/'+pilihanComp+'.png');
            statusInfo.innerHTML = hasilProses;
            compScore += (hasilProses == 'KALAH!') ? 1 : 0;
            compScoreView.innerHTML = compScore;
            playerScore += (hasilProses == 'MENANG!') ? 1 : 0;
            playerScoreView.innerHTML = playerScore;
        }, 1000);
    });
});