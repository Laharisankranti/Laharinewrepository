package newproject;

import java.util.Scanner;

public class RetailCalculator {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

        double totalRetailValue = 0.0;
        int productNumber;
        int quantity;

        System.out.println("Enter product number (1-3) and quantity sold. Enter 0 to stop.");

        while (true) {
            System.out.print("Product number (1-3 or 0 to exit): ");
            productNumber = scanner.nextInt();

            if (productNumber == 0) {
                break; 
            }

            System.out.print("Quantity sold: ");
            quantity = scanner.nextInt();

            double price = 0.0;

            
            switch (productNumber) {
                case 1:
                    price = 22.50;
                    break;
                case 2:
                    price = 44.50;
                    break;
                case 3:
                    price = 9.98;
                    break;
                default:
                    System.out.println("Invalid product number. Please enter 1, 2, or 3.");
                    continue;
            }

            double totalForProduct = price * quantity;
            totalRetailValue += totalForProduct;
        }

        System.out.printf("Total retail value of all products sold: ₹%.2f\n", totalRetailValue);
        scanner.close();

	}

}
