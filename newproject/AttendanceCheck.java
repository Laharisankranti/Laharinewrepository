package newproject;

import java.util.Scanner;

public class AttendanceCheck {

	public static void main(String[] args) {
Scanner scanner = new Scanner(System.in);

        
        System.out.print("Enter number of classes held: ");
        int classesHeld = scanner.nextInt();

      
        System.out.print("Enter number of classes attended: ");
        int classesAttended = scanner.nextInt();

       
        if (classesHeld <= 0 || classesAttended < 0 || classesAttended > classesHeld) {
            System.out.println("Invalid input. Please check the number of classes.");
        } else {
            
            double attendancePercentage = (classesAttended * 100.0) / classesHeld;
            System.out.printf("Attendance Percentage: %.2f%%\n", attendancePercentage);

            
            if (attendancePercentage >= 70) {
                System.out.println("Student is allowed to sit in the exam.");
            } else {
                System.out.println("Student is NOT allowed to sit in the exam.");
            }
        }

        scanner.close();
	}

}
