package newproject;

class Shape {

    
    public double area(double side) {
        return side * side;
    }

   
    public double area(double length, double breadth) {
        return length * breadth;
    }

    
    public double perimeter(double side) {
        return 4 * side;
    }

    
    public double perimeter(double length, double breadth) {
        return 2 * (length + breadth);
    }
}


public class Main {
    public static void main(String[] args) {
        Shape shape = new Shape();

        
        double squareSide = 5;
        System.out.println("Square:");
        System.out.println("Area: " + shape.area(squareSide));
        System.out.println("Perimeter: " + shape.perimeter(squareSide));

        
        double rectLength = 10;
        double rectBreadth = 4;
        System.out.println("\nRectangle:");
        System.out.println("Area: " + shape.area(rectLength, rectBreadth));
        System.out.println("Perimeter: " + shape.perimeter(rectLength, rectBreadth));
    }
}

