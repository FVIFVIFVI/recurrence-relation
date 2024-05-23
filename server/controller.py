import re
from sympy import sympify, symbols
from server.master import *

n = symbols('n')

def parse_expression(expression):
    try:
        components = re.findall(r'T\(n\)|T\(n\/[0-9]+\)|\d+\*T\(n\/\d+\)|[+-=]|\S+', expression)
        
        separated_components = []
        buffer = ""
        for component in components:
            if component in '+-=':
                if buffer:
                    separated_components.append(buffer.strip())
                    buffer = ""
                separated_components.append(component)
            else:
                buffer += component
        if buffer:
            separated_components.append(buffer.strip())
        
        return separated_components
    except Exception as e:
        print(f"An error occurred: {e}")

parse_expression("T(n)=2T(n/2)+4")

def process_expression(a):
    n = symbols('n')
    c = [""]
    b = 0
    con = 0
    for i in a[2]:
        try:
            int(i)
            if len(c) - 1 < b:
                c.append("")
            c[b] += i
            con = 0
        except ValueError:
            if con == 0:
                b += 1
                con = 1
    for i in range(len(c)):
        c[i] = int(c[i])
    a1 = ""
    for i in range(b + 1, len(a)):
        a1 += a[i]
       
    expression_sympy = sympify(a1, locals={'n': n})
    c.append(expression_sympy)
    return c

def compute1(a):
 aa=process_expression(parse_expression(a))
 a1=master(aa[0],aa[1],aa[2])
 a2=str(a1)
 print(a1)
 return  a2

