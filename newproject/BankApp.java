package newproject;

import java.util.Scanner;

public class BankApp {
    public static void main(String[] args) {
        Bank[] customers = new Bank[5];

        
        customers[0] = new Saving("S001", "Alice", 2, "Teacher", 5000, 0.03);
        customers[1] = new Current("C001", "Bob", 1, "Engineer", 8000, true, 0.02);
        customers[2] = new Saving("S002", "Cathy", 2, "Doctor", 7000, 0.04);
        customers[3] = new Current("C002", "David", 1, "Manager", 10000, false, 0.015);
        customers[4] = new Current("C003", "Eva", 2, "Nurse", 6000, true, 0.025);

        Scanner sc = new Scanner(System.in);

        
        System.out.print("Enter account number to search: ");
        String searchAcc = sc.nextLine();
        boolean found = false;

        for (Bank b : customers) {
            if (b.accNo.equalsIgnoreCase(searchAcc)) {
                System.out.println("\nCustomer Found:");
                System.out.println(b.toString());
                System.out.printf("Final Balance: RM %.2f\n", b.calcBalance());
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Account number not found.");
        }

        
        int currentCount = 0;
        double totalBalance = 0;

        for (Bank b : customers) {
            if (b instanceof Current) {
                currentCount++;
                totalBalance += b.calcBalance();
            }
        }

        System.out.println("\nTotal number of current account holders: " + currentCount);
        System.out.printf("Total balance in current accounts: RM %.2f\n", totalBalance);

        sc.close();
    }
}