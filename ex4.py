# 문자열을 입력받아, 문자열을 각 토큰으로 변환 후 실행하는
# 프로그램을 작성하세요.
# 토큰 종류
# (print, println, string_literal, left_paren, right_paren, semicolon)
# 프린트, 프린트ln, 문자열, 왼쪽 괄호, 오른쪽 괄호, 세미콜론
# 입출력 예시:
# 입력: “print(”a”)”;
# 출력: “a”
# 입력: “println(”b”)”;
# 출력: “b\n”

# 문자열 입력받기
# 문자를 하나씩 읽으면서 토큰화하기
# 토큰을 해석해서 실행하기 (print 또는 println)
# startswith() 함수 문자열이 특정 단어로 시작하는지 확인하는 함수 

code = input("문자열 입력 : ")

if code.startswith("print(") and code.endswith(");"):
    text = code[6:-2]  # 괄호 안의 내용
    print(text[1:-1], end="")  # 따옴표 제거하고 출력
elif code.startswith("println(") and code.endswith(");"):
    text = code[7:-2]
    print(text[1:-1])  # 따옴표 제거하고 출력
else:
    print("문법 오류")
