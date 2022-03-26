//  Tagged Templates :
// "Bentuk yang lebih kompleks dari Template Literals, 
// memungkinkan kita untuk membaca template literals melalui sebuah function"


//  Tagged Template digunakan untuk :
// -   Escaping HTML Tags
// -   Translation & Internationalization
// -   Styled Components

const nama = "Dimas Aryastya"
const umur = 19;
const email = "dimasaryasatya@gmail.com";

//  Test 1
// function coba(strings, /*nama, umur*/ ...values){
//     // ...values menammpung semuan parameter expression dari template literals
//     // return values;
//     return strings;
// }

// const str = coba`Halo, nama saya ${nama}, saya berumur ${umur} tahun`;
// console.log(str)
// output :
// (3) ['Halo, nama saya ', ', saya berumur ', ' tahun', raw: Array(3)]
// 0: "Halo, nama saya "
// 1: ", saya berumur "
// 2: " tahun"
// length: 3
// raw: (3) ['Halo, nama saya ', ', saya berumur ', ' tahun']
// [[Prototype]]: Array(0)
//Memecah tiap2 stringnya yang dipisahkan oleh expression
//Ekspresionnya akan dikirim kedalam parameter setelah strings


//  Test 2
// function coba(strings, ...values){
//     let result = '';
//     strings.forEach((str, i) => {
//         result += `${str}${values[i] || ''}` 
//         //${values[i] || ''} berarti jika ada maka tampilkan, jika tidak ada, tampilkan string kosong
//     }); 
//     return result;
// }
// const str = coba`Halo, nama saya ${nama}, saya berumur ${umur} tahun`;
// console.log(str)


//  Test 3
// function coba(strings, ...values){
//     // return strings.reduce((result, str, i) => result+str+(values[i] || ''), '');
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }
// const str = coba`Halo, nama saya ${nama}, saya berumur ${umur} tahun`;
// console.log(str)


//  Praktek High Light
function highLight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str} <span class="hl"> ${values[i] || ''} </span>`, '');
}
const str = highLight`Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan email saya ${email}`;
document.body.innerHTML = str;


//  Contoh Escaping / Sanitazie HTML Tags
//https://codeburst.io/javascript-es6-tagged-template-literals-a45c26e54761

// function sanitize(strings, ...values){
//     return sanitize(aboutMe);
// }

// const name = 'Dimas Aryasatya';
// const aboutMe = `I love to do evil <img src"http://unsplash.it/100/100?random" onload="aler('I hacked you. HAHA');" />`;

// const html = sanitize`
// <h3>${name}</h3>
// <p>${aboutMe}</p>
// `;
// console.log(html);


//  COntoh Translation & Internationalization
// https://github.com/skolmer/es2015-i18n-tag
const html = i18n`Hello ${name}, you have ${amount}:c in your bank account.`
//Heloo Dimas, sie haben US$ 1,250.33 auf Ihrem Bankkonto


//  Styled Components
// https://www.styled-components.com/docs/basics#getting-started
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;
