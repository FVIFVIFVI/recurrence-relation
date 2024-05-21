import re

def parse_expression(expression):
    try:
        
        components = re.findall(r'T\(N\)|T\(N\/[0-9]+\)|\d+\*T\(N\/\d+\)|[+-=]|\S+', expression)
        
        
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

def process_expression(a):
    c=[""]
    b = 0
    con=0
    for i in a[2]:
        print(i)
        try:
           
           int(i)
           if len(c)-1<b:
            c.append("")
           c[b]+=i
           con=0
        except ValueError:
           if con==0:
            
            b+=1
            con=1
    for i in range(len(c)):
       c[i]=int(c[i])
    return c

