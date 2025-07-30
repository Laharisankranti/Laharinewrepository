package newproject;

public abstract class Bank {
    String accNo;
    String custName;
    int custGender; // 1 = Male, 2 = Female
    String custJob;
    double curBal;

    public Bank(String accNo, String custName, int custGender, String custJob, double curBal) {
        this.accNo = accNo;
        this.custName = custName;
        this.custGender = custGender;
        this.custJob = custJob;
        this.curBal = curBal;
    }

    public abstract double calcBalance();

    public String toString() {
        String genderStr = (custGender == 1) ? "Male" : "Female";
        return "Account No: " + accNo +
               "\nName: " + custName +
               "\nGender: " + genderStr +
               "\nJob: " + custJob +
               "\nCurrent Balance: RM " + String.format("%.2f", curBal);
    }
}
