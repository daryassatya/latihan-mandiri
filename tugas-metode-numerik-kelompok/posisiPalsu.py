i=1
xn = int(input("\tMasukan Xn        : "))
xn1 = int(input("\tMasukan Xn+1        : "))
xt = 0
fxn = 0
fxn1 = 0
fxt = 1
fxnfxt = 0

def fXn():
    global fxn 
    fxn = (xn**3)+(xn**2)-(3*xn)-3

def fXn1():
    global fxn1
    fxn1 = (xn1**3)+(xn1**2)-(3*xn1)-3


def xT():
    global xt
    xt = xn-fxn*(xn1-xn)/(fxn1-fxn)

def fXt():
    global fxt
    fxt = abs((xt**3)+(xt**2)-(3*xt)-3)


def fxnFxt():
    global fxnfxt
    fxnfxt = fxn * fxt

while(fxt>0.001):
    fXn()
    fXn1()
    xT()
    fXt()
    fxnFxt()

    print("====================================================================================")
    print("                       PERSAMAAN NON LINEAR (METODE Posisi Palsu)")
    print("                                   Kelompok 1")
    print("------------------------------------------------------------------------------------")
    print("Iteration    = ", i)
    print("Xn           = ", xn)
    print("Xn+1           = ", xn1)
    print("XT           = ", xt)
    print("F(Xn)        = ", fxn)
    print("F(Xn+1)        = ", fxn1)
    print("F(Xt)        = ", fxt)
    print("F(Xn)*F(Xt)  = ", fxnfxt)
    print("------------------------------------------------------------------------------------")

    if(fxnfxt>0):
        xn = xt

    if(fxnfxt<0):
        xn1 = xt 
    
        
    i+=1
