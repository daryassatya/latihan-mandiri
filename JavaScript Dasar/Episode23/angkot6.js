var jmlAngkot = 10
var angkotBeroperasi = 6


for(noAngkot = 1; noAngkot<=jmlAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        if(noAngkot === 5){
            console.log("Angkot No. "+noAngkot+" sedang lembur.")
        }else{
            console.log("Angkot No. "+noAngkot+" beroperasi dengan baik.")
        }
    }else if(noAngkot === 8 || noAngkot === 10){
        console.log("Angkot No. "+noAngkot+" sedang lembur.")
    }else{
        console.log("Angkot No. "+noAngkot+" tidak beroperasi dengan baik.")
    }
}