# Nama = Dimas Aryasatya
# Kelas TIF RP 21 E
# NPM = 21552011325

# GITHUB = daryassatya

print("Masukkan Bilangan Desimal yang ingin di konvert ke Binner :")
# 1. Siapkan Variabel untuk menampung isi yang di konvert menjadi integer
bilangan = int(input())

# 2. Siapkan variabel bertipe string untuk menampung hasil binner yang akan di concate
tampungHasil = ''

# 3. disaat variabel bilangan tidak lebih dari 0, maka berhentikan perulangan
while bilangan > 0:
    
    # 4. buat variabel yang akan menampung sisa dari hasil modulus 2 dari variabel bilangan 
    sisa = bilangan % 2

    # 5. jika variabel sisa sama dengan 1 maka variabel tampungHasil akan di concate dengan tampungHasil
    if sisa == 1:
        tampungHasil = "1" + tampungHasil

    # 6. jika variabel sisa sama dengan  0maka variabel tampungHasil akan di concate dengan tampungHasil    
    else:
        tampungHasil = "0" + tampungHasil

    # 7. Lalu variabel bilangan kan dibagi 2 untuk mendapatkan kondisi dari perulangan while
    bilangan = bilangan // 2

# 8. Print variabel tampungHasil
print(tampungHasil)
