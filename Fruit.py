min_order = 5000  # 최소 주문 금액
total_price = 0  # 총 주문 금액

while total_price < min_order:
    print("\n1: 사과 1000원  2: 배 2000원  3: 감 3000원  4: 샤인머스켓 4000원")
    print("5: 딸기 5000원  6: 바나나 6000원  7: 포도 7000원  8: 블루베리 8000원")
    print(f"현재 총 주문 금액: {total_price}원 (최소 주문 금액: {min_order}원)")
    
    num = int(input("구매할 과일을 선택하세요 (0 입력 시 주문 완료): "))

    if num == 0:
        if total_price >= min_order:
            print(f"\n주문이 완료되었습니다! 총 주문 금액: {total_price}원")
            break
        else:
            print(f"\n최소 주문 금액 {min_order}원 이상 구매해야 합니다!")
            continue
    elif num == 1:
        temp = 1000
    elif num == 2:
        temp = 2000
    elif num == 3:
        temp = 3000
    elif num == 4:
        temp = 4000
    elif num == 5:
        temp = 5000
    elif num == 6:
        temp = 6000
    elif num == 7:
        temp = 7000
    elif num == 8:
        temp = 8000
    else:
        print("그거슨 판매 상품이 아니여..")
        continue  

    total_price += temp
    print(f"{temp}원이 추가되었습니다. 현재 총 주문 금액: {total_price}원")

print("프로그램 종료")
