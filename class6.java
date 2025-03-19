package javaclass;

//부모 클래스 Weapon 정의
class Weapon {
 // fire() 메서드: 기본 무기의 공격력을 반환 (기본값: 1)
 protected int fire() {
     return 1;
 }
}

//Weapon 클래스를 상속받은 Cannon(대포) 클래스
class Cannon extends Weapon {
 // fire() 메서드 오버라이딩: 대포의 공격력을 10으로 설정
 @Override
 protected int fire() {
     return 10;
 }
}

//실행 클래스
public class class6 {
	public static void main(String args[]) {
	     Weapon weapon; // 부모 클래스 타입의 참조 변수 선언
	     
	     weapon = new Weapon(); // 기본 무기 객체 생성
	     System.out.println("기본 무기의 살상 능력은 " + weapon.fire()); // fire() 실행 → 1 출력
	     
	     weapon = new Cannon(); // 대포 객체 생성 (다형성 적용)
	     System.out.println("대포의 살상 능력은 " + weapon.fire()); // fire() 실행 → 10 출력
	}
}
