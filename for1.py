count = int(input())

if(count%2==0):
    count -= 1

for i in range(count // 2 + 1):
    print(" " * i + "*" * (count - 2 * i))

for i in range(count // 2 - 1, -1, -1):
    print(" " * i + "*" * (count - 2 * i))