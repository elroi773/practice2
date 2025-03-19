package javaclass; // 패키지 선언

// 2차원 좌표를 나타내는 Point 클래스
class Point {
	private int x, y; // x, y 좌표를 저장하는 필드

	// 기본 생성자: 좌표를 (0,0)으로 초기화
	public Point() {
		this.x = 0;
		this.y = 0;
	}

	// 매개변수가 있는 생성자: 주어진 x, y 좌표로 초기화
	public Point(int x, int y) {
		this.x = x;
		this.y = y;
	}

	// 현재 좌표를 출력하는 메서드
	public void showPoint() {
		System.out.println("(" + x + "," + y + ")");
	}
}

// Point 클래스를 상속받아 색상 개념을 추가한 ColorPoint 클래스
class ColorPoint extends Point {
	private String color; // 색상을 저장하는 필드

	// 매개변수가 있는 생성자: 좌표와 색상을 함께 초기화
	public ColorPoint(int x, int y, String color) {
		super(x, y); // 부모 클래스의 생성자 호출하여 x, y 초기화
		this.color = color;
	}

	// 색상과 좌표를 함께 출력하는 메서드
	public void showColorPoint() {
		System.out.print(color); // 색상 출력
		showPoint(); // 부모 클래스의 showPoint() 호출하여 좌표 출력
	}
}

// main 메서드를 포함한 class3 클래스
public class Class3 {
	public static void main(String args[]) {
		// ColorPoint 객체 생성 (x=5, y=6, color="blue")
		ColorPoint cp = new ColorPoint(5, 6, "blue");
		cp.showColorPoint(); // blue(5,6) 출력
	}
}
