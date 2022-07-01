//#include <stdio.h>
//#include <stdlib.h>
//
//struct User{
//	char customerId[10];
//	char jenisMember[10];
//	char pointBelanja[10];
//};
//
//struct node {
//	struct User user;
//	struct node *next;
//};
//
//struct node *data;
//
//void insert_node(struct User user){
//	struct node *temp = (struct node*)malloc(sizeof(struct node));
//	temp->user = user;
//	if(data == NULL){
//		temp->next = NULL;
//		data = temp;
//	} else {
//		temp->next = data;
//		data = temp;
//	}
//}
//int main()
//{
//	FILE *f = fopen("C:\\Users\\USER\\Desktop\\UTS-ALGO2\\member.txt", "r");
//	
//	char line[255];
//	
//	while(fgets(line, sizeof(line), f)){
//		struct User user;
//		scanf(line, "%s%s%s", &user.customerId, user.jenisMember, &user.pointBelanja);
//		printf("%s %s %s\n", user.customerId, user.jenisMember, user.pointBelanja);
//	}
//
//	return 0;
//}
//
//

// C program to implement
// the above approach
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Driver code
int main()
{
	FILE* ptr;
	char ch[2];
	char check;
	int i;
	int panjang=41;

	// Opening file in reading mode
	ptr = fopen("C:\\Users\\USER\\Desktop\\UTS-ALGO2\\member.txt", "r");

	if (NULL == ptr) {
		printf("file can't be opened \n");
	}

	printf("content of this file are \n");

	do {
		check = fgetc(ptr);
		panjang += 1; 
		printf("%c",check);
	} while (check != EOF);

	
	

	// Closing the file
	fclose(ptr);
	return 0;
}


