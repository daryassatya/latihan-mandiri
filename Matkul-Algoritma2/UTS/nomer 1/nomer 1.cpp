#include <stdio.h>
#include<string.h> 

typedef struct{
	char cID[10];
	char nama[10];
	char JM[10];
}DC;

DC data;
char fr[1024];
char gold[] = "Gold";
FILE *f1, *f2, *f3;
char tab[] = "\t", nl[] = "\n";

main() {
	f1 = fopen("member.txt", "r");
	f2 = fopen("gold.txt", "w");
	f3 = fopen("silver.txt", "w");
	
	if(f1 == NULL || f2 == NULL || f3 == NULL) {
		perror("Error in opening file");
		return(-1);
	}
			
	while(!feof(f1)){								
		fscanf(f1, "%s\t%s\t%s", &data.cID, &data.nama, &data.JM);								
		if(strcmp (data.JM, gold) == 0){			
			fputs(data.cID, f2);fputs(tab, f2);
			fputs(data.nama, f2);fputs(tab, f2);
			fputs(data.JM, f2);fputs(nl, f2);
			printf("%s\t%s\t%s\n", data.cID, data.nama, data.JM);
			continue;
		}		
		printf("%s\t%s\t%s\n", data.cID, data.nama, data.JM);
		fputs(data.cID, f3);fputs(tab, f3);
		fputs(data.nama, f3);fputs(tab, f3);
		fputs(data.JM, f3);fputs(nl, f3);
	}
	
	fclose(f1);
	fclose(f2);
	fclose(f3);
}

//BERES
