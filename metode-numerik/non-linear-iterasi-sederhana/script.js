
// F(X) = x^2-2x-3
// x^2 = 2x+3
// g(x) = sqrt(2x+3)
const interval1 = document.querySelector('.input1');
const button1 = document.querySelector('.bt1');

button1.addEventListener('click', function(){
if(interval1){
let i=0;
let x1 = parseInt(interval1.value);
let fx1=1;

function Gx1(){
    x1 = Math.sqrt((2*x1)+3);
}

function Fx1(){
    fx1 = Math.abs(x1**2-2*x1-3);
}

// console.log(interval1**3);



table1Header = `
<tr>
    <th>Iteration</th>
    <th>g(x)</th>
    <th>f(x) | Err</th>
</tr>
<tr>
    <td>0</td>
    <td>${interval1.value}</td>
    <td></td>
</tr>
`;
table1Content = '';

while(fx1>0.0001){
    Gx1();
    Fx1();
        table1Content += `
        <tr>
            <td>${i+1}</td>
            <td>${x1.toFixed(5)}</td>
            <td>${fx1.toFixed(5)}</td>
        </tr>
        `;
    i++;
}
const table1 = document.querySelector('.table1');
table1.innerHTML = `${table1Header}${table1Content}`;
}
});


// ----- Iterasi Sederhana 2 -----
// F(X) = x^2+2x-3
// x^2-2X = 3
// x(X-2) = 3
// g(x) = 3/(x-2)

const interval2 = document.querySelector('.input2');
const button2 = document.querySelector('.bt2');


button2.addEventListener('click', function(){
if(interval2){
let j=0;
let x2 = parseInt(interval2.value);
let fx2=1;

function Gx2(){
    x2 = 3/(x2-2);
}

function Fx2(){
    fx2 = Math.abs(x2**2-2*x2-3);
}


table2Header = `
<tr>
    <th>Iteration</th>
    <th>g(x)</th>
    <th>f(x) | Err</th>
</tr>`;
table2Content = '';

while(fx2>0.0001){
    console.log(x2)
    Gx2();
    Fx2();
        table2Content += `
        <tr>
            <td>${j+1}</td>
            <td>${x2.toFixed(5)}</td>
            <td>${fx2.toFixed(5)}</td>
        </tr>
        `;
    j++;
}
const table1 = document.querySelector('.table2');
table1.innerHTML = `${table2Header}${table2Content}`;
}
});