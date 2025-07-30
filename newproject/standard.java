package newproject;

import java.util.*;


class Pupil {
 private static int rollCounter = 1;

 private int rollNo;
 private String name;
 private int engMarks;
 private int mathsMarks;
 private int scienceMarks;

 public Pupil(String name, int engMarks, int mathsMarks, int scienceMarks) {
     this.rollNo = rollCounter++;
     this.name = name;
     this.engMarks = engMarks;
     this.mathsMarks = mathsMarks;
     this.scienceMarks = scienceMarks;
 }

 public int getRollNo() {
     return rollNo;
 }

 public String getName() {
     return name;
 }

 public int getEngMarks() {
     return engMarks;
 }

 public int getMathsMarks() {
     return mathsMarks;
 }

 public int getScienceMarks() {
     return scienceMarks;
 }

 public int getTotalMarks() {
     return engMarks + mathsMarks + scienceMarks;
 }

 public double getPercentage() {
     return getTotalMarks() / 3.0;
 }

 public int getMathsScienceTotal() {
     return mathsMarks + scienceMarks;
 }
}


public class standard {
 private List<Pupil> pupils = new ArrayList<>();


 public standard() {
     pupils.add(new Pupil("Alice", 85, 90, 88));
     pupils.add(new Pupil("Bob", 78, 95, 80));
     pupils.add(new Pupil("Charlie", 90, 85, 87));
     pupils.add(new Pupil("David", 70, 75, 80));
     pupils.add(new Pupil("Eva", 88, 92, 94));
     pupils.add(new Pupil("Frank", 65, 70, 72));
     pupils.add(new Pupil("Grace", 80, 85, 89));
     pupils.add(new Pupil("Helen", 90, 96, 93));
 }

 
 public void displayByRollNo() {
     System.out.println("1. Pupils by Roll Number:");
     pupils.stream()
           .sorted(Comparator.comparingInt(Pupil::getRollNo))
           .forEach(p -> System.out.println("Roll No: " + p.getRollNo() + ", Name: " + p.getName()));
 }

 
 public void displayTopPercentage() {
     Pupil top = Collections.max(pupils, Comparator.comparingDouble(Pupil::getPercentage));
     System.out.println("\n2. Pupil with Highest Percentage:");
     System.out.println("Roll No: " + top.getRollNo() + ", Name: " + top.getName() +
                        ", Percentage: " + String.format("%.2f", top.getPercentage()));
 }


 public void displayTopMaths() {
     Pupil top = Collections.max(pupils, Comparator.comparingInt(Pupil::getMathsMarks));
     System.out.println("\n3. Pupil with Highest Maths Marks:");
     System.out.println("Roll No: " + top.getRollNo() + ", Name: " + top.getName() +
                        ", Maths Marks: " + top.getMathsMarks());
 }

 
 public void displayByMathsScienceTotal() {
     System.out.println("\n4. Pupils by (Maths + Science) Total (Ascending):");
     pupils.stream()
           .sorted(Comparator.comparingInt(Pupil::getMathsScienceTotal))
           .forEach(p -> System.out.println("Roll No: " + p.getRollNo() + ", Name: " + p.getName() +
                                            ", Total: " + p.getMathsScienceTotal()));
 }

 
 public void displayRanks() {
     System.out.println("\n5. Pupil Ranking by Total Marks (Descending):");
     List<Pupil> ranked = new ArrayList<>(pupils);
     ranked.sort((p1, p2) -> p2.getTotalMarks() - p1.getTotalMarks());

     int rank = 1;
     for (Pupil p : ranked) {
         System.out.println("Rank: " + rank +
                 ", Roll No: " + p.getRollNo() +
                 ", Name: " + p.getName() +
                 ", Total Marks: " + p.getTotalMarks() +
                 ", Percentage: " + String.format("%.2f", p.getPercentage()));
         rank++;
     }
 }

 
 public static void main(String[] args) {
     standard std = new standard();

     std.displayByRollNo();
     std.displayTopPercentage();
     std.displayTopMaths();
     std.displayByMathsScienceTotal();
     std.displayRanks();
 }
}