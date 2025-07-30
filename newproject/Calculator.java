package newproject;

public class Calculator {

		    
		    public void add(double num1, double num2) {
		        double result = num1 + num2;
		        System.out.println("Addition Result: " + result);
		    }

		    
		    public void diff(double num1, double num2) {
		        double result = num1 - num2;
		        System.out.println("Subtraction Result: " + result);
		    }

		   
		    public void mul(double num1, double num2) {
		        double result = num1 * num2;
		        System.out.println("Multiplication Result: " + result);
		    }

		    
		    public void div(double num1, double num2) {
		        if (num2 != 0) {
		            double result = num1 / num2;
		            System.out.println("Division Result: " + result);
		        } else {
		            System.out.println("Error: Division by zero is not allowed.");
		        }
		    }

		    
		    public static void main(String[] args) {
		        Calculator calc = new Calculator();

		        double a = 10;
		        double b = 5;

		        calc.add(a, b);   
		        calc.diff(a, b);  
		        calc.mul(a, b);   
		        calc.div(a, b);   
		    }
		
		

	}


