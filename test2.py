
# 정수를 입력받아, 해당 수 만큼 이메일을 입력받으며 
# 입력받은 이메일이 형식에 올바른지 판별하여
# 올바른 형식의 이메일만 모은 리스트를 출력하는 코드를 작성하시오.

# (올바른 형식 ~~~~@~~~.~~~   -> 즉 @와 .이 첫번째가 아닌 곳에 꼭 있어야함, 
# @ 뒤에 . 한개가 있어야함 )

import re

pattern = r'^[^@\.][\w\.-]*@[\w-]+\.[\w-]+$'
a = int(input("정수 입력: "))


valid_emails=[]

for i in range(a):
    email = input(f"{i+1}번째 이메일 입력: ")
    if re.fullmatch(pattern, email): #주어진 문자열이 정규식 패턴과 "전체가 정확히" 일치할 때만 매칭되는 함수
        # '@' 뒤에 '.'이 하나인지 추가 확인
        domain = email.split('@')[1] #도메인 부분 자르기
        if domain.count('.') == 1:
            valid_emails.append(email)

print("올바른 이메일 목록:", valid_emails)
