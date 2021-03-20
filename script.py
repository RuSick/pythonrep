def factorial(n):
    factorial=1
    while n > 1:
        factorial *= n
        n -= 1
    return factorial

def fibonacci(n):
    a, b = 1, 1
    for i in range(n):
        yield a
        a, b = b, a + b

try:
    n = (input ("write n: ") )
    n = int(n)
except ValueError:
    print("wrong nubmer")
    n=0

result = list(fibonacci(n))
print("Fibo: ", result)
result = factorial(n)
print("Fact: ", result)

