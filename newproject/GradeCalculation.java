package newproject;

public class GradeCalculation {

	public static void main(String[] args) {
		
		 int totalStudents = 90;
	        int totalBoys = 45;
	        
	        int totalGradeAStudents = totalStudents / 2; 
	        int gradeABoys = 20;

	        int gradeAGirls = totalGradeAStudents - gradeABoys;

	        System.out.println("Number of girls who got grade A: " + gradeAGirls);

	}

}
