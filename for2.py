count = int(input())

n = count//2

if(count%2==0):
    n -= 1

for i in range(1, n + 1):
    print("*" * i + " " * (count - i * 2) + "*" * i)

print("*" * count)

for i in range(n, 0, -1):
    print("*" * i + " " * (count - i * 2) + "*" * i)