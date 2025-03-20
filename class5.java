package javaclass;
//부모 클래스 Shape 정의
class Shape {
 public Shape next; // 연결 리스트처럼 사용할 수 있도록 next 변수 선언
 
 // 기본 생성자: next를 null로 초기화
 public Shape() { next = null; }
 
 // draw() 메서드: 하위 클래스에서 오버라이딩할 메서드
 public void draw() {
     System.out.println("Shape"); // 기본적으로 "Shape" 출력
 }
}

//Shape 클래스를 상속받은 Line 클래스
class Line extends Shape {
 // draw() 메서드 오버라이딩
 public void draw() {
     System.out.println("Line"); // "Line" 출력
 }
}

//Shape 클래스를 상속받은 Rect(사각형) 클래스
class Rect extends Shape {
 // draw() 메서드 오버라이딩
 public void draw() {
     System.out.println("Rect"); // "Rect" 출력
 }
}

//Shape 클래스를 상속받은 Circle(원) 클래스
class Circle extends Shape {
 // draw() 메서드 오버라이딩
 public void draw() {
     System.out.println("Circle"); // "Circle" 출력
 }
}

//클래스 정의 (클래스 이름은 대문자로 시작하는 것이 일반적이므로 Class5로 변경을 추천)
public class class5 {
 // paint() 메서드: Shape 타입의 객체를 매개변수로 받아 draw() 호출
 static void paint(Shape p) {
     p.draw(); // 다형성(polymorphism) 적용: 실제 객체의 draw() 메서드가 호출됨
 }
 
 // main 메서드 (오타 수정: void main → public static void main)
 	public static void main(String args[]) {
	     Line line = new Line();
	     paint(line); // Line 객체 전달 → Line의 draw() 호출
	     paint(new Shape()); // Shape 객체 전달 → Shape의 draw() 호출
	     paint(new Line()); // Line 객체 전달 → Line의 draw() 호출
	     paint(new Rect()); // Rect 객체 전달 → Rect의 draw() 호출
	     paint(new Circle()); // Circle 객체 전달 → Circle의 draw() 호출
	 }
}
