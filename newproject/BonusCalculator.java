package newproject;

import java.util.Scanner;

public class BonusCalculator {

	public static void main(String[] args) {
Scanner scanner = new Scanner(System.in);

        
        System.out.print("Enter your salary: ");
        double salary = scanner.nextDouble();

       
        System.out.print("Enter your years of service: ");
        int yearsOfService = scanner.nextInt();

        
        if (yearsOfService > 6) {
            double bonus = salary * 0.10;
            System.out.println("You are eligible for a bonus.");
            System.out.println("Your bonus amount is: ₹" + bonus);
        } else {
            System.out.println("Sorry, you are not eligible for a bonus.");
        }

        scanner.close();

	}

}
