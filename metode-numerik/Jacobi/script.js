
const button1 = document.querySelector('.bt1');


button1.addEventListener('click', function(){
let i=0;
let ex;
let ey;
let ez;
let err=1;

//harus diubah
let p1x = parseInt(4);
let p1y = parseInt(1);
let p1z = parseInt(-1);
const p1b = 7

//harus diubah
let p2x = parseInt(-4);
let p2y = parseInt(-8);
let p2z = parseInt(-1);
const p2b = -21

//harus diubah
let p3x = parseInt(2);
let p3y = parseInt(-1);
let p3z = parseInt(5);
const p3b = 15;


let x = 0;
let y = 0;
let z = 0;
const x1 = p1x/p1b;
const y1 = p2y/p2b;
const z1 = p3z/p3b;

//harus diubah
function persamaan1(){
    // x = (7+y-z)/4
    x = (p1b+y-z)/p1x;
}

//harus diubah
function persamaan2(){
    // y = (-21-4x-z)/-8
    y = (p2b-p2x*x-z)/p2y;
}

//harus diubah
function persamaan3(){
    // z = (15+2x-y)/5
    z = (p3b+p3x*x-y)/p3z;
}

function Ex(getX){
    ex = Math.abs(x-getX);
}
function Ey(getY){
    ey = Math.abs(y-getY);
}
function Ez(getZ){
    ez = Math.abs(z-getZ);
}

function Error(){
    err = Math.max(ex,ey,ez);
}

table1Header = `
<tr>
    <th>Iteration</th>
    <th>X</th>
    <th>Y</th>
    <th>Z</th>
    <th>Ex</th>
    <th>Ey</th>
    <th>Ez</th>
    <th>Error</th>
</tr>`;
table1Content = `
        <tr>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        `;

while(err>0.001){
    let getX = x;
    let getY = y;
    let getZ = z;
    persamaan1();
    persamaan2();
    persamaan3();
    Ex(getX);
    Ey(getY);
    Ez(getZ);
    Error();

        table1Content += `
        <tr>
            <td>${i+1}</td>
            <td>${x.toFixed(5)}</td>
            <td>${y.toFixed(5)}</td>
            <td>${z.toFixed(5)}</td>
            <td>${ex.toFixed(5)}</td>
            <td>${ey.toFixed(5)}</td>
            <td>${ez.toFixed(5)}</td>
            <td>${err.toFixed(5)}</td>
        </tr>
        `;
    i++;
}
const table1 = document.querySelector('.table1');
table1.innerHTML = `${table1Header}${table1Content}`;

});
