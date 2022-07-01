#include <stdio.h>
#include <string.h> 

typedef struct{
	int harga = 0;
	char type[20] = "";
}Rekaman;

Rekaman rek, hasil;

int t;
int j;

char sp[] = "#";
FILE *f1, *f2;

main(){
	f1 = fopen("barang.txt", "r");	
	f2 = fopen("hasil.txt", "w");
	
	fscanf(f1, "%s\t%d", &rek.type, &rek.harga);
	while(!feof(f1)){		
		while(!feof(f1) && (strcmp(rek.type, sp) == 0)){
			fscanf(f1, "%s\t%d", &rek.type, &rek.harga);
		}
		t = 0;
		j = 0;
		while(!feof(f1) && (strcmp(rek.type, sp) != 0)){
			t += rek.harga;
			j += 1;
			fscanf(f1, "%s\t%d", &rek.type, &rek.harga);
		}
//		hasil.type = rek.type;
		hasil.harga = rek.harga;
		fwrite(&hasil, sizeof(hasil), 1, f2);
	}
}
