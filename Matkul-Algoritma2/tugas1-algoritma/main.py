perulangan = int(input("Masukkan Jumlah Data : "))
w, h = 10, 3
dataBukuSttb = [[0 for x in range(w)] for y in range(h)]
for x in range(perulangan):
    idBuku = input("Masukkan ID Buku : ")
    dataBukuSttb[x][0] = idBuku
    jenisBuku = input("Masukkan Jenis Buku : ")
    dataBukuSttb[x][1] = jenisBuku
    hargaBuku = input("Masukkan Harga Buku : ")
    dataBukuSttb[x][2] = hargaBuku
    print("----------------------------------------")

for x in range(len(dataBukuSttb)):
    if dataBukuSttb[x][0] != 0 :
        print("========================================")
        print("Data Ke -",x+1)
        print("Id Buku : ",dataBukuSttb[x][0])
        print("Id Buku : ",dataBukuSttb[x][1])
        print("Id Buku : ",dataBukuSttb[x][2])
        print("----------------------------------------")