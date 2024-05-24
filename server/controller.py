import re
from sympy import sympify, symbols,SympifyError,simplify
from master import *

n = symbols('n')

def distributing_expression(expression):
    
    expression = expression.replace('√', 'sqrt(')
    expression = expression.replace('+', ' + ')
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



def factoring_expr(raw_expression):
    n = symbols('n')
    arr_of_tn=[]
    a_b_f_dict=[]
    try:
        raw_expression.remove("T(n)")
        raw_expression.remove("=")
    except:
       1
    
    for i in raw_expression:
        
         tempi=i
         if "T" in  i:
            if i[0]=="T":
                tempi = "1" + i 
            arr_of_tn.append(tempi)#צריך לוגיקה למקרה של +- לפני
            raw_expression.remove(i)
    
    for index, value in enumerate(arr_of_tn):
        disassembled =  value.split("T")
        arr_of_tn.remove(value)#לבדוק במקרה של כפילות
        
        if "(" in disassembled[0]:##זה פלסטר מה יהיה אם זה שורש מוכפל לכן צריך לשנות בקליינט
            print(disassembled[0])
            disassembled[0]=disassembled[0]+")"
            
        temparr = [sympify(disassembled[0])]
        temparr[0] = simplify(temparr[0])
        print(temparr[0],2)
        try:
            disassembled[1] = disassembled[1].replace("n", "").replace("(", "").replace(")", "")
            print(disassembled)
            if disassembled[1][0]=="/":
             disassembled[1]= "1"+disassembled[1]
            temparr.append(sympify(disassembled[1])**-1)
        except (IndexError, SympifyError, ValueError) as e:
            return f"Error processing the expression '{value}': {str(e)}"
        a_b_f_dict.append(temparr)
    
    if raw_expression[0]=="+":#or "-":
     raw_expression.pop(0)
    function_text=""
    # sympify
    print(raw_expression)
    
    for i1 in range (1,len(raw_expression)):
        
        if raw_expression[i1]=="+" and arr_of_tn[i1]==raw_expression[i1-1]:
            raw_expression.pop(i1)
            continue
        function_text=function_text+raw_expression[i1]
    else:
        function_text=raw_expression[0]
    print(len(function_text))
    function_text = sympify(function_text, locals={'n': n})
    final=[a_b_f_dict,function_text]
    
    return final
def compute1(a):
 polished_expr=factoring_expr(distributing_expression(a))
 print(polished_expr)
 master_re=master(polished_expr[0][0][0],polished_expr[0][0][1],polished_expr[1])
 master_re1=str(master_re)
 print(master_re1)
 return  master_re1

compute1("√4T(n/2) + n")