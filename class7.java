package javaclass;
//추상 클래스 Calculator 정의
abstract class Calculator {
 // 두 정수를 더하는 추상 메서드
 public abstract int add(int a, int b);
 
 // 두 정수를 빼는 추상 메서드
 public abstract int substract(int a, int b);
 
 // 정수 배열의 평균을 계산하는 추상 메서드
 public abstract double average(int[] a);
}

//추상 클래스 Calculator를 상속받은 class7
public class class7 extends Calculator {
 
 // add() 메서드 구현: 두 정수의 합 반환
 @Override
 public int add(int a, int b) {
     return a + b;
 }
 
 // substract() 메서드 구현 (오타 수정: subtract → substract)
 @Override
 public int substract(int a, int b) {
     return a - b;
 }
 
 // average() 메서드 구현: 정수 배열의 평균 계산
 @Override
 public double average(int[] a) {
     double sum = 0;
     for (int i = 0; i < a.length; i++) {
         sum += a[i];
     }
     return sum / a.length; // for문 내에서 return을 제거하여 전체 합산 후 계산하도록 수정
 }
 
 	public static void main(String args[]) {
	     class7 c = new class7(); // class7 객체 생성
	     
	     // add() 메서드 실행 및 출력
	     System.out.println(c.add(2, 3));
	     
	     // substract() 메서드 실행 및 출력
	     System.out.println(c.substract(2, 3));
	     
	     // average() 메서드 실행 및 출력
	     System.out.println(c.average(new int[]{2, 3, 4}));
	}
}
