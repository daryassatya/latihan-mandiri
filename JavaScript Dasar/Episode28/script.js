var a = 10;
var b = 3;


function jumlahVolumeDuaKubus(a,b){
    var total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

console.log(jumlahVolumeDuaKubus(a,b));