var penumpang = [];
    
// Penumpang Naik
function tambambahPenumpang(a){
    if(penumpang.length == 0){
        penumpang.push(a);

    } else {
        for(i=0; i<penumpang.length; i++){
            if(penumpang[i] == undefined ){
                penumpang[i] = a;
                break;
            } 
            else if(a == penumpang[i]){
                console.log('Sudah ada didalam angkot');
                break;
            } else if(i == penumpang.length - 1){
                // console.log('tidak ada yang kosong')
                penumpang.push(a);
                break;
            }
        }
    }
    return penumpang;
}

//Penumpang Turun
function hapusPenumpang(a){
    if(penumpang.length == 0){
        console.log('Angkot Kosong')

    } else {
        for(i=0; i<penumpang.length; i++){
            if(a == penumpang[i]){
                penumpang.splice(i,1,undefined);
                break;
            } else if(i == penumpang.length -1){
                console.log('Tidak ada penumpang yang namanya '+ a +'!');
                break;
            }
        }
    }
    return penumpang;
}   