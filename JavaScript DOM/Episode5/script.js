// Test 1
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Dimas Aryasatya</em>';

//  Test 2
// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = "<p class='p1'>paragraf 1</p><a href='http://instagram.com/sandhikagalih'>Instagram Sandhika Galih</a><p class='p2'>paragraf 2</p><p class='p3'>paragraf 3</p><button>Let's Go!</button>";
// const p1 = document.getElementsByClassName('p1')[0].style.color="red";
//didalam inner html kita juga dapat menambahkan sebuah element didalamnya, 
// lalu dapat dipanggil juga lagi kedalam javascript


//  Test 3
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

//  Test 3
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'Dimas Aryasatya');

const a = document.querySelector('section#a a');
a.setAttribute('id', 'asda');
a.getAttribute('id'); //Maka akan mengembalikan 'asda'

const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label');   //Tidak bisa menambahkan class baru, mahalahan meniban classnya dari 'p2' menjadi 'label'
// p2.classList.add('label'); // Menambahkan class label kedalam element yang memiliki class p2
p2.classList.add('label'); // Menambahkan class label kedalam element yang memiliki class p2
p2.classList.remove('label'); // Menghapus class label jika ada kedalam element yang memiliki class p2
p2.classList.toggle('label'); // Menghapus class label jika ada dan Menambahkan class label jika tidak ada kedalam element yang memiliki class p2
document.body.classList.toggle('dark-mode');
p2.classList.add('satu'); 
p2.classList.add('dua'); 
p2.classList.add('tiga'); 
// p2.classList.contains('satu'); // Untuk mengecek apakah ada class tersebut atau tidak. Mengembalikan nilai false and true
p2.classList.replace('tiga', 'empat'); 