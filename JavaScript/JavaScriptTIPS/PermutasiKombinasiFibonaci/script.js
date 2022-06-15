
$('#submit1').on('click', function(){

    const n = $("#input-n").val();
    const r = $("#input-r").val();
    // console.log(n);
    // console.log(permutasi(n,r));
    $("#input-n").removeClass('is-invalid');
    $("#input-r").removeClass('is-invalid');

    if(n === r){
        $('.notif1').html(notif('N Tidak Boleh Sama Dengan R', 'danger'));
        $("#input-n").toggleClass('is-invalid');
        $("#input-r").toggleClass('is-invalid');
        $('#permutasi').val('');
        $('#kombinasi').val('');
    } else if(r>n) {
        $('.notif1').html(notif("N Tidak Boleh Lebih Kecil Dari R!", 'danger'));
        $("#input-n").toggleClass('is-invalid');
        $("#input-r").toggleClass('is-invalid');
        $('#permutasi').val('');
        $('#kombinasi').val('');
    } else {
        $('.notif1').html(notif("Operasi Perhitungan Berhasil !", 'success'));
        $('#permutasi').val(permutasi(n,r));
        $('#kombinasi').val(kombinasi(n,r));
    }
});

$('#submit2').on('click', function(){
    const f = $("#input-batas").val();
    $("#input-batas").removeClass('is-invalid');
    
    if(f < 2){
        $('.notif2').html(notif('Tidak Boleh Kurang Dari 2!', 'danger'));
        $("#input-batas").toggleClass('is-invalid');
        $('#area-fibonacci').val('');
    } else {
        $('.notif2').html(notif("Operasi Perhitungan Berhasil !", 'success'));
        const fibo = new Fibonacci('1,1', 0, 10);
        const parseint = fibo.hitung(1,1,f).split(',').map(val => parseInt(val));
        const jumlah = parseint.reduce((totalResult, currentLoop) => totalResult+currentLoop);
        $('#area-fibonacci').val(`Deret : ${fibo.results}

jumlah: ${jumlah}
        `);
    }
});

function permutasi(n,r){

    return faktorial(n)/faktorial(n-r);
}

function kombinasi(n,r){
    return faktorial(n)/ (faktorial(n-r)*faktorial(r));
}

function faktorial(f){
    if(f === 1){
        return 1;
    } else {
        return f*faktorial(f-1);
    }
}

function notif(keterangan,status){
    return `<div class="alert alert-${status}" role="alert">
                <h3>${keterangan}</h3>
            </div>`;
}

function Fibonacci(results,index){
    this.results = results;
    this.index = index;
    this.hitung = function(fibo1, fibo2, batas){
        if(this.index < (batas-2)){
            this.index++;
            fibo1 = (fibo1+fibo2);
            this.results += `,${fibo1.toString()}`;
            return this.hitung(fibo2,fibo1, batas);
        }
        return this.results
    }
}



