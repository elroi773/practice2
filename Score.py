num = int(input("성적을 입력하세요: "))

if num >= 70:
    if num >= 80:
        if num >= 90:
            print('A')
        else:
            print('B')
    else:
        print('C')
else:
    print('성적이 70점 미만입니다.')
