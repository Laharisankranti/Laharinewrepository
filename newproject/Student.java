package newproject;

public class Student {

	public static void main(String[] args) {
		
	}
		private static int rollCounter = 1; 

	    private int rollNo;
	    private String studName;
	    private int marksInEng;
	    private int marksInMaths;
	    private int marksInScience;
	

	   
	    public Student(String studName, int marksInEng, int marksInMaths, int marksInScience) {
	        this.rollNo = rollCounter++;
	        this.studName = studName;
	        this.marksInEng = marksInEng;
	        this.marksInMaths = marksInMaths;
	        this.marksInScience = marksInScience;
	    }
	
	    
	    public int getRollNo() {
	        return rollNo;
	    }

	    public String getStudName() {
	        return studName;
	    }

	    public int getMarksInEng() {
	        return marksInEng;
	    }

	    public int getMarksInMaths() {
	        return marksInMaths;
	    }

	    public int getMarksInScience() {
	        return marksInScience;
	    }

	    
	    public void setStudName(String studName) {
	        this.studName = studName;
	    }

	    public void setMarksInEng(int marksInEng) {
	        this.marksInEng = marksInEng;
	    }

	    public void setMarksInMaths(int marksInMaths) {
	        this.marksInMaths = marksInMaths;
	    }

	    public void setMarksInScience(int marksInScience) {
	        this.marksInScience = marksInScience;
	    }

	    
	    public void displayStudentDetails() {
	        System.out.println("Roll No: " + rollNo);
	        System.out.println("Name: " + studName);
	        System.out.println("English Marks: " + marksInEng);
	        System.out.println("Maths Marks: " + marksInMaths);
	        System.out.println("Science Marks: " + marksInScience);
	        System.out.println("---------------------------");
	    }

	    
	    public static void main1(String[] args) {
	        Student s1 = new Student("Alice", 85, 90, 88);
	        Student s2 = new Student("Bob", 78, 76, 80);

	        s1.displayStudentDetails();
	        s2.displayStudentDetails();
	    
	
	    
	}


		public String getTotalMarks() {
			
			return null;
		}


		public Object getPercentage() {
			
			return null;
		}

}
