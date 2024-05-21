from sympy import log, limit_seq, sympify, expand, Mul, oo, Add
import sympy as sp
import math

n = sp.symbols('n')

def inqulty(f1, f2):
    a1 = f1 / f2
    if limit_seq(a1, n) == 0:
        return 2
    if limit_seq(a1, n) == oo:
        return 1
    else:
        # לטפל במקרה של קבוע גדול מ-1
        return 3

def get_exponent(expr):
    if isinstance(expr, sp.Pow):
        base, exp = expr.as_base_exp()
        return exp
    else:
        return None

def Factorization(f):
    expanded_expr = expand(f)
    if isinstance(expanded_expr, Mul):
        factors = expanded_expr.as_ordered_factors()
        for i in factors:
            if i.has(log(n)):
                a = get_exponent(i)
                if a:
                    return a
                else:
                    return 1

def const1(f):
    expanded_expr = expand(f)
    if isinstance(expanded_expr, Mul):
        factors = expanded_expr.as_ordered_factors()
    else:
        return f
    for i in range(len(factors)):
        try:
            b = int(factors[i])
            factors[i] = 1
        except:
            continue
    c = 1
    for i in factors:
        c *= i
    return c

def series(f):
    return f

def master(a, b, f):
    f1 = series(f)
    f2 = const1(f1)
    if a >= 1:
        confrecrtion = math.log(a, b)
        confrecrtion = sympify(confrecrtion)
        f1 = get_exponent(f2)
        win = inqulty(n ** confrecrtion, f2)
        if win == 1:
            return n ** confrecrtion
        if win == 2:
            a77 = Factorization(f2)
            bb = inqulty(n ** confrecrtion, a77)
            if bb == 2:
                return f2
            else:
                return f2 * log(n)
        if win == 3:
            return f2 * log(n)
    else:
        print("לא נתמך")



