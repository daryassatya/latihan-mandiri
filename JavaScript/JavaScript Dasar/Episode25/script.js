var s = '';
var jml = 0;
for(var i = 0; i < 5  ; i++){
    
    for(var k = 5; k > i; k--){
        
        s += ' ';
        
    }

    for(var j = 0; j <= jml; j++){
        
        s += '*';
        
    }
    jml +=2;
    s += '\n';
}
console.log(s);