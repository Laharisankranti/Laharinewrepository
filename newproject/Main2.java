package newproject;

public class Main2 {
    
    interface Drawable {
        void drawingColor();
        void thickness();
    }

    
    interface Fillable {
        void fillingColor();
        void size();
    }

    
    static class Line implements Drawable {
        public void drawingColor() {
            System.out.println("Drawing color for Line: Black");
        }

        public void thickness() {
            System.out.println("Thickness for Line: 2px");
        }
    }

    
    static class Circle implements Drawable, Fillable {
        public void drawingColor() {
            System.out.println("Drawing color for Circle: Red");
        }

        public void thickness() {
            System.out.println("Thickness for Circle: 3px");
        }

        public void fillingColor() {
            System.out.println("Filling color for Circle: Yellow");
        }

        public void size() {
            System.out.println("Size for Circle: Radius = 10");
        }
    }

    
    static class Square implements Drawable, Fillable {
        public void drawingColor() {
            System.out.println("Drawing color for Square: Blue");
        }

        public void thickness() {
            System.out.println("Thickness for Square: 4px");
        }

        public void fillingColor() {
            System.out.println("Filling color for Square: Green");
        }

        public void size() {
            System.out.println("Size for Square: Side = 5");
        }
    }

    
    public static void main(String[] args) {
        Drawable line = new Line();
        Drawable circle = new Circle();
        Fillable circleFill = new Circle();
        Drawable square = new Square();
        Fillable squareFill = new Square();

        System.out.println("=== Line ===");
        line.drawingColor();
        line.thickness();

        System.out.println("\n=== Circle ===");
        circle.drawingColor();
        circle.thickness();
        circleFill.fillingColor();
        circleFill.size();

        System.out.println("\n=== Square ===");
        square.drawingColor();
        square.thickness();
        squareFill.fillingColor();
        squareFill.size();
    }
}