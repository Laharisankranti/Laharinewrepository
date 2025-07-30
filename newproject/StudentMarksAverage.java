package newproject;

import java.util.Scanner;

public class StudentMarksAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] marks = new int[3];
        int student = 0;

        while (student < 3) {
            System.out.print("Enter the mark (0-100) for student " + (student + 1) + ": ");
            if (scanner.hasNextInt()) {
                int mark = scanner.nextInt();
                if (mark >= 0 && mark <= 100) {
                    marks[student] = mark;
                    student++;
                } else {
                    System.out.println("Invalid input, try again...");
                }
            } else {
                System.out.println("Invalid input, try again...");
                scanner.next(); 
            }
        }

        
        double average = (marks[0] + marks[1] + marks[2]) / 3.0;

        
        System.out.printf("The average is: %.2f\n", average);

        scanner.close();
    }
}