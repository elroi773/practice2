package javaclass; // 패키지 선언

// 2차원 좌표를 나타내는 Point 클래스
class Point {
	private int x, y; // x, y 좌표를 저장하는 필드
	
	// x, y 좌표를 설정하는 메서드
	public void set(int x, int y) {
		this.x = x; 
		this.y = y;
	}
	
	// 현재 좌표를 출력하는 메서드
	public void showPoint() {
		System.out.println("(" + x + "," + y + ")"); // 문자열 출력 오류 수정
	}
}

// Point 클래스를 상속받아 색상 개념을 추가한 ColorPoint 클래스
class ColorPoint extends Point {
	private String color; // 색상을 저장하는 필드
	
	// 색상을 설정하는 메서드
	public void setColor(String color) {
		this.color = color;
	}
	
	// 색상과 좌표를 함께 출력하는 메서드
	public void showColorPoint() {
		System.out.print(color); // 색상 출력
		showPoint(); // 부모 클래스의 showPoint() 호출하여 좌표 출력
	}
}

// main 메서드를 포함한 class1 클래스
public class class1 {
	public static void main(String args[]) {
		// Point 객체 생성 및 사용
		Point p = new Point();
		p.set(1, 2); // 좌표 (1,2) 설정
		p.showPoint(); // 좌표 출력 -> (1,2)
		
		// ColorPoint 객체 생성 및 사용
		ColorPoint cp = new ColorPoint();
		cp.set(3, 4); // 좌표 (3,4) 설정
		cp.setColor("red"); // 색상을 red로 설정
		cp.showColorPoint(); // 색상과 좌표 출력 -> red(3,4)
	}
}
