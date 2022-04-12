i=1
x1 = int(input("\tMasukan X1        : "))
x2 = int(input("\tMasukan X2        : "))
xr = 0
fx1 = 0
fx2 = 0
fxr = 0
fx1r = 0
fx2r = 0
err=1 

def fX1():
    global fx1 
    fx1 = (x1**3)+(4*(x1**2))-10

def fX2():
    global fx2
    fx2 = (x2**3)+(4*(x2**2))-10


def xR():
    global xr
    xr = (x1+x2)/2


def fXr():
    global fxr
    fxr = (xr**3)+(4*(xr**2))-10


def fx1Fxr():
    global fx1r
    fx1r = fx1 * fxr


def fx2Fxr():
    global fx2r
    fx2r = fx2 * fxr


def error():
    global err
    err = abs((x1-x2)/(x1+x2))*100

while(err>0.001):
    fX1()
    fX2()
    xR()
    fXr()
    fx1Fxr()
    fx2Fxr()
    error()

    print("====================================================================================")
    print("                       PERSAMAAN NON LINEAR (METODE BAGI 2)")
    print("                                   Kelompok 1")
    print("------------------------------------------------------------------------------------")
    print("Iteration    = ", i)
    print("X1           = ", x1)
    print("X2           = ", x1)
    print("Xr           = ", xr)
    print("F(X1)        = ", fx1)
    print("F(X2)        = ", fx2)
    print("F(Xr)        = ", fxr)
    print("F(X1)*F(Xr)  = ", fx1r)
    print("F(X2)*F(Xr)  = ", fx2r)
    print("error        = ", err)
    # print("X1           = ", format(x1, '.5f'))
    # print("X2           = ", format(x1, '.5f'))
    # print("Xr           = ", format(xr, '.5f'))
    # print("F(X1)        = ", format(fx1, '.5f'))
    # print("F(X2)        = ", format(fx2, '.5f'))
    # print("F(Xr)        = ", format(fxr, '.5f'))
    # print("F(X1)*F(Xr)  = ", format(fx1r, '.5f'))
    # print("F(X2)*F(Xr)  = ", format(fx2r, '.5f'))
    # print("error        = ", format(err, '.5f'))
    print("------------------------------------------------------------------------------------")

    if(fx1r<0):
        x2 = xr
        
    
    if(fx2r<0):
        x1 = xr
        
    i+=1
