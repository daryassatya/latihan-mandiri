// Membuat Object Angkot

function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            console.log('Angkot Kosong');
            return false;
        } else {
            for(i=0; i<this.penumpang.length; i++){
                if(namaPenumpang == this.penumpang[i]){
                    this.kas += bayar;
                    this.penumpang.splice(i,1,undefined);
                    return [this.penumpang, this.kas];
                    
                } else if(i == this.penumpang.length - 1){
                    console.log('Tidak ada penumpang yang namanya '+ namaPenumpang +'!');
                    return false;
                }
            }
        }
    }
}
var angkot1 = new Angkot('Sandhika Galih', ['Cicaheum', 'Cibiru'], [], 0);
// console.log(angkot1.sopir)
var angkot2 = new Angkot('Tom Cruise', ['Antapani', 'Ciroyom'], [], 0);