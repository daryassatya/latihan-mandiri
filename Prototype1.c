#include <stdio.h>
#include <conio.h>
#include <windows.h>
int main()
{
    int n;
    printf("Masukan Jumlah Data Buku yang akan dimasukan =");
    scanf("%d", &n);

    char id_buku[n][10];
    char jenis_buku[n][10];
    char harga[n][10];
    char tampil;

    for (int i = 0; i < n; i++)
    {
        printf("\nData ke-%i", i + 1);
        printf("\nId_buku : ");
        scanf("%s", &id_buku[i]);
        printf("Jenis_buku : ");
        scanf("%s", &jenis_buku[i]);
        printf("Harga : ");
        scanf("%s", &harga[i]);
    }

    printf("Data Berhasil Diinput!");
    printf("\nTampilkan Data (y/n): ");
    scanf(" %c", &tampil);

    if (tampil == 'y')
    {
        for (int i = 0; i < n; i++)
        {
            printf("\nData ke-%i", i + 1);
            printf("\n%s", id_buku[i]);
            printf("\n%s", jenis_buku[i]);
            printf("\n%s", harga[i]);
        }
    }
    else
    {
        printf("Terimakasih :)");
    }
}
