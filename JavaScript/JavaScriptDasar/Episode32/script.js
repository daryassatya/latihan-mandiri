function tampilAngka(n){
    if(n===0){          //Jika tidak ditambahkan if statement ini, 
        return;         //maka akan menjadi sebuah infinite loop
    }
    
    console.log(n);
    return tampilAngka(n-1);
}

tampilAngka(10);

//Implementasi pada matematika Faktorial
function faktorial(a){
    if(a===0){
        return 1;
    }
        return a*faktorial(a-1);
}
