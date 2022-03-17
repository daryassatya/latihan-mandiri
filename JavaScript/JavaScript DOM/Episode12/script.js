//  DOM Traversal Method
//  -parentNode                 = node
//  -parentElement              = element
//  -nextSibiling               = node
//  -nextElementSibiling        = element
//  -previous                   = node
//  -previousElementSibiling    = element

// ----- KASUS 1 -----
// Remove Card hanya untuk satu
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function(){
//     // card.remove();  //Benar2 menghilang dari dalam container
//     card.style.display = 'none'; //Tidak benar2 hialng dari container
// });

// Dom Traversal - menghilangkan lebih dari satu

// --- Cara 1 (yang kurang benar)
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// close.forEach(function(a, i) {
//     a.addEventListener('click', function(){
//         card[i].remove();
//     });
// });

// --- Cara 2 (Hampir Baik)
// const close = document.querySelectorAll('.close');

// close.forEach(function(a, i) {
//     a.addEventListener('click', function(){
//         close[i].parentNode.style.display = 'none';
//     });
// });

// --- Cara 3 (Baik - masih ada yg lebih baik)
// const close = document.querySelectorAll('.close');

// close.forEach(function(element) {
//     element.addEventListener('click', function(event){
//         // event pada parameter berisi objek kegiatan yang sedang terjadi
//         event.target.parentNode.remove();
//     });
// });


// ----- KASUS 2 -----
const card = document.querySelector('.nama');

// Test 1
console.log(card.parentElement.parentElement);

// Test 2
console.log(card.nextSibling); 
// Yang terambil adalah enter dari index.html kita = nodeValue: "\n    

// Test 3
console.log(card.nextElementSibling);
// output = <span class="telp">08123456789</span>
console.log(card.nextElementSibling.nextElementSibling);
// output = <span class="close">×</span>
// Yang terambil benar2 element html dan mengabaikan yang lain 

// Test 4
console.log(card.previousElementSibling);
// output = <img src="img/DimasAryasatya.png" width="96" height="96">
console.log(card.previousElementSibling.previousElementSibling);
// output = null. Karena tidak adalagi sibiling sebelum ke 2


// ----- Menghentikan aksi default -----
// const close = document.querySelectorAll('.close');

// close.forEach(function(element) {
//     element.addEventListener('click', function(event){

//         // event pada parameter berisi objek kegiatan yang sedang terjadi
//         event.target.parentNode.remove();
//         event.preventDefault();

//         // Cara menghentikan event Bubling
//         event.stopPropagation();
//     });
// });


// Event Bubling
// Jika kita membuat event didalam pembungkus yang dimana didalam bungkusan itu terdapat
// sebuah event juga. Maka jika kita mengklik event itu, dia akan menjalankan 2 event sekaligus
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok');
//     })
// });

container = document.querySelector('.container');

container.addEventListener('click', function(event){
    // console.log(event.target);
    if(event.target.className == 'close'){
        event.target.parentElement.style.display = 'none';
        event.preventDefault(); // untuk berjaga2, jika yang diklik adalah link
    }
});