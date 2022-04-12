import os

Jawab = 1 

while Jawab == 1 :
    X = []
    Y = []
    Z = []
    SelisihX = []
    SelisihY = []
    SelisihZ = []

    BooleanX = False
    BooleanY = False
    BooleanZ = False

    k = 0
    i = 1

    os.system("cls")
    print("====================================================================================")
    print("                             Program Iterasi Jacobi")
    print("                                   Kelompok 3")
    print("------------------------------------------------------------------------------------")
    print("\tMasukan Nilai Persamaan Ke-1")
    X1 = int(input("\tMasukan X1        : "))
    Y1 = int(input("\tMasukan Y1        : "))
    Z1 = int(input("\tMasukan Z1        : "))
    C1 = int(input("\tMasukan Konstanta : "))
    print("------------------------------------------------------------------------------------")
    print("\tMasukan Nilai Persamaan Ke-2")
    X2 = int(input("\tMasukan X2        : "))
    Y2 = int(input("\tMasukan Y2        : "))
    Z2 = int(input("\tMasukan Z2        : "))
    C2 = int(input("\tMasukan Konstanta : "))
    print("------------------------------------------------------------------------------------")
    print("\tMasukan Nilai Persamaan Ke-3")
    X3 = int(input("\tMasukan X3        : "))
    Y3 = int(input("\tMasukan Y3        : "))
    Z3 = int(input("\tMasukan Z3        : "))
    C3 = int(input("\tMasukan Konstanta : "))
    print("------------------------------------------------------------------------------------")
    print("\tMasukan Tebakan Awal")
    AwalX = int(input("\tMasukan X         : "))
    AwalY = int(input("\tMasukan Y         : "))
    AwalZ = int(input("\tMasukan Z         : "))

    X.insert(0, AwalX)
    Y.insert(0, AwalY)
    Z.insert(0, AwalZ)

    SelisihX.insert(0, 0)
    SelisihY.insert(0, 0)
    SelisihZ.insert(0, 0)

    print("------------------------------------------------------------------------------------")
    Cangkupan = int(input("\tMasukan Cangkupan Iterasi : "))
    print("------------------------------------------------------------------------------------")
    Toleransi = float(input("\tMasukan Toleransi : "))
    
    while(k <= Cangkupan) :
        k = k + 1
        X.insert(k, (C1 + ((Y1 * -1) * Y[k - 1]) + ((Z1 * -1) * Z[k - 1])) / X1)
        Y.insert(k, (C2 + ((X2 * -1) * X[k - 1]) + ((Z2 * -1) * Z[k - 1])) / Y2)
        Z.insert(k, (C3 + ((X3 * -1) * X[k - 1]) + ((Y3 * -1) * Y[k - 1])) / Z3)

        SelisihX.insert(k, abs(X[k] - X[k - 1]))
        SelisihY.insert(k, abs(Y[k] - Y[k - 1]))
        SelisihZ.insert(k, abs(Z[k] - Z[k - 1]))

    print("------------------------------------------------------------------------------------")
    print(" Iterasi Ke : ", i - 1)
    print(" X          : ", X[i - 1])
    print(" Y          : ", Y[i - 1])
    print(" Z          : ", Z[i - 1])
    print(" Selisih X  : ", SelisihX[i - 1])
    print(" Selisih Y  : ", SelisihY[i - 1])
    print(" Selisih Z  : ", SelisihZ[i - 1])

    while(i <= Cangkupan) :
        if(BooleanX and BooleanY and BooleanZ == True) :
            break
        else :
            print("------------------------------------------------------------------------------------")
            print(" Iterasi Ke : ", i)
            print(" X          : ", X[i])
            print(" Y          : ", Y[i])
            print(" Z          : ", Z[i])
            print(" Selisih X  : ", SelisihX[i])
            print(" Selisih Y  : ", SelisihY[i])
            print(" Selisih Z  : ", SelisihZ[i])

            if(SelisihX[i] < Toleransi):
                BooleanX = True
            else :
                BooleanX = False

            if(SelisihY[i] < Toleransi):
                BooleanY = True
            else :
                BooleanY = False

            if(SelisihZ[i] < Toleransi):
                BooleanZ = True
            else :
                BooleanZ = False

            i = i + 1

    if(BooleanX and BooleanY and BooleanZ == True) :
        print("------------------------------------------------------------------------------------")
        print()
        print("                                     HASIL!!!")
        print("                           DITEMUKAN PADA ITERASI KE-", i - 1)
        print()
        print("------------------------------------------------------------------------------------")
        print(" Persamaan :")
        print(" ", X1, "x ", Y1, "y ", Z1, "z = ", C1)
        print(" ", X2, "x ", Y2, "y ", Z2, "z = ", C2)
        print(" ", X3, "x ", Y3, "y ", Z3, "z = ", C3)
        print("------------------------------------------------------------------------------------")
        print(" Solusi Dari Sistem Persamaan Linear Diatas Adalah :")
        print(" X  : ", X[i])
        print(" Y  : ", Y[i])
        print(" Z  : ", Z[i])
        print()
        print(" Atau Dibulatkan Menjadi :")
        print(" X  : ", round(X[i]))
        print(" Y  : ", round(Y[i]))
        print(" Z  : ", round(Z[i]))
    else :
        print("------------------------------------------------------------------------------------")
        print()
        print("                                     HASIL!!!")
        print("                        TIDAK DITEMUKAN PADA ITERASI KE-", i - 1)
        print()
        print("------------------------------------------------------------------------------------")
        print(" Persamaan :")
        print(" ", X1, "x ", Y1, "y ", Z1, "z = ", C1)
        print(" ", X2, "x ", Y2, "y ", Z2, "z = ", C2)
        print(" ", X3, "x ", Y3, "y ", Z3, "z = ", C3)

    print("------------------------------------------------------------------------------------")
    print("                     Apakah Anda Ingin Mengulang Program Ini ?")
    print("                                      1. Ya")
    print("                                      0. Tidak")
    Jawab = int(input(" Masukan Jawaban Anda : "))