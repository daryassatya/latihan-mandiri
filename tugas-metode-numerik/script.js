// NonLinear bagi dua
// x^3 + 4x^2 - 10 = 0

let i=0;
const interval1 = 1;
const interval2 = 2;
let x1 = interval1;
let x2 = interval2;
let xr;
let fx1;
let fx2;
let fxr;
let fx1r;
let fx2r;
let err=1;
// console.log(interval1**3);


function fX1(){
        fx1 = (x1**3)+(4*(x1**2))-10;
}
function fX2(){
        fx2 = (x2**3)+(4*(x2**2))-10;
}

function xR(){
        xr = (x1+x2)/2;
}

function fXr(){
    fxr = (xr**3)+(4*(xr**2))-10;
}

function fx1Fxr(){
    fx1r = fx1 * fxr;
}

function fx2Fxr(){
    fx2r = fx2 * fxr;
}

function error(){
    err = Math.abs((x1-x2)/(x1+x2))*100;
}

table1Header = `
<tr>
    <th>Iteration</th>
    <th>X1</th>
    <th>X2</th>
    <th>Xr</th>
    <th>F(X1)</th>
    <th>F(X2)</th>
    <th>F(Xr)</th>
    <th>F(X1)*F(Xr)</th>
    <th>F(X2)*F(Xr)</th>
    <th>error</th>
</tr>`;
table1Content = '';

while(err>0.001){
    fX1()
    fX2()
    xR();
    fXr();
    fx1Fxr();
    fx2Fxr();
    error();
        table1Content += `
        <tr>
            <td>${i+1}</td>
            <td>${x1.toFixed(5)}</td>
            <td>${x2.toFixed(5)}</td>
            <td>${xr.toFixed(5)}</td>
            <td>${fx1.toFixed(5)}</td>
            <td>${fx2.toFixed(5)}</td>
            <td>${fxr.toFixed(5)}</td>
            <td>${fx1r.toFixed(5)}</td>
            <td>${fx2r.toFixed(5)}</td>
            <td>${err.toFixed(5)}</td>
        </tr>
        `;
        if(fx1r<0){
            x2 = xr;
        }
    
        if(fx2r<0){
            x1 = xr;
        }
    i++;
}
const table1 = document.querySelector('.table1');
table1.innerHTML = `${table1Header}${table1Content}`;



// ----- Posisi Palsu -----
// f(x) = x^3+x^2-3x-3

let j=0;
const interval1S = 1;
const interval2S = 2;
let xn = interval1S;
let xn1 = interval2S;
let xt;
let fxn;
let fxn1;
let fxt=1;
let fxnfxt;

function fXn(){
        fxn = (xn**3)+(xn**2)-(3*xn)-3;
}
function fXn1(){
        fxn1 = (xn1**3)+(xn1**2)-(3*xn1)-3;
}

function xT(){
    xt = xn-fxn*(xn1-xn)/(fxn1-fxn);
}

function fXt(){
    fxt = Math.abs((xt**3)+(xt**2)-(3*xt)-3);
}

function fxnFxt(){
    fxnfxt = fxn * fxt;
}


function errors(){
    errS = Math.abs((x1S-x2S)/(x1S+x2S))*100;
}

table2Header = `
    <tr>
        <th>Iteration</th>
        <th>Xn</th>
        <th>Xn+1</th>
        <th>Xt</th>
        <th>F(Xn)</th>
        <th>F(Xn+1)</th>
        <th>F(Xt)</th>
        <th>F(Xn)*F(Xt)</th>
    </tr>`;

table2Content = '';
while(fxt>0.001){
    fXn();
    fXn1();
    xT();
    fXt();
    fxnFxt();

    table2Content += `
        <tr>
            <td>${j+1}</td>
            <td>${xn.toFixed(5)}</td>
            <td>${xn1.toFixed(5)}</td>
            <td>${xt.toFixed(5)}</td>
            <td>${fxn.toFixed(5)}</td>
            <td>${fxn1.toFixed(5)}</td>
            <td>${fxt.toFixed(5)}</td>
            <td>${fxnfxt.toFixed(5)}</td>
        </tr>
        `;

        if(fxnfxt>0){
            xn = xt;
        }

        if(fxnfxt<0){
            xn1 = xt; 
        }
        j++;
}
const table2 = document.querySelector('.table2');
table2.innerHTML = `${table2Header}${table2Content}`;