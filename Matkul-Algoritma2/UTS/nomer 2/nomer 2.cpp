#include <stdio.h>
#include<string.h> 

typedef struct{
	int cID;
	char JM[10];
	int hrg;
}DC;

DC data;
char gold[] = "Gold";
FILE *f1;
int tG = 0, tS = 0;

main(){
	f1 = fopen("file.txt", "r");
	if(f1 == NULL) {
		perror("Error in opening file");
		return(-1);
	}
	
	while(!feof(f1)){
		fscanf(f1, "%d\t%s\t%d", &data.cID, &data.JM, &data.hrg);
		if(strcmp (data.JM , gold) == 0){		
			tG += data.hrg;
			continue;
		}
		tS += data.hrg;
	}
	
	printf("Jenis Member Silver memiliki total belanja %d", tS);
	printf("\n");
	printf("Jenis Member Gold memiliki total belanja %d", tG);
	fclose(f1);
}

//BERES
