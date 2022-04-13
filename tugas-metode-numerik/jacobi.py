from telnetlib import X3PAD


x1 = []
x2 = []
x3 = []
x4 = []
galatX1 = 0
galatX2 = 0
galatX3 = 0
galatX4 = 0
err = 1

# x1+2x2+4x3+x4 = 21
# 2x1+8x2+6x3+4x4 = 52
# 3x1+10x2+8x3+8x4 = 79
# 4x1+12x2+10x3+6x4 = 82

# rumus x1 = 52+(2*x2)+(6*x3)+(x4)
def X1() :
    global x1
    x1 = 21+(2*x2)+(4*x3)+(x4)

# rumus x2 = (52+2x1+6x3+4x4)/8
def X2() :
    global x2
    x2 = (52+(2*x1)+(6*x3)+(4*4))/8

#rumus x3 = (79+3x1+10x2+8x4)/8
def X3() :
    global x3
    x3 = (79+(3*x1)+(10*x2)+(8*x4))/8

#rumus x4 = (82+4x1+12x2+10x3)/6
def X4() :
    global x4
    x4 = (82+(4*x1)+(12*x2)+(10*3))/6

def galatX1() :
    global galatX1
    # galatX1 = 