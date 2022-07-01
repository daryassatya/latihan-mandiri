#include <stdio.h>
void angka(int);
main(){
	int n;
	printf("Masukkan nilai : ");
	scanf("%d", &n);
	printf("\n");
	if(n > 0){
		angka(n);
	}	
}

void angka(int n){		
	if((n/2) == 0){
		n = 1;
	}else{
		printf("%d", n%2);					
		angka(n/2);
	}	
}

