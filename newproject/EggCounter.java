package newproject;

public class EggCounter {

	public static void main(String[] args) {
		 if (args.length != 1) {
	            System.out.println("Please provide the number of eggs as a command-line argument.");
	            return;
	        }

	        try {
	            int totalEggs = Integer.parseInt(args[0]);

	            int gross = totalEggs / 144;
	            int remainingAfterGross = totalEggs % 144;

	            int dozen = remainingAfterGross / 12;
	            int remainingEggs = remainingAfterGross % 12;

	            System.out.println("Total eggs: " + totalEggs);
	            System.out.println("Gross: " + gross);
	            System.out.println("Dozen: " + dozen);
	            System.out.println("Leftover eggs: " + remainingEggs);
	        } catch (NumberFormatException e) {
	            System.out.println("Invalid number. Please enter a valid integer.");
	        }

	}

}
