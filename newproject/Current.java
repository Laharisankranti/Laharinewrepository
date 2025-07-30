package newproject;

public class Current extends Bank {
    boolean fixedDep;
    double curRate;

    public Current(String accNo, String custName, int custGender, String custJob, double curBal, boolean fixedDep, double curRate) {
        super(accNo, custName, custGender, custJob, curBal);
        this.fixedDep = fixedDep;
        this.curRate = curRate;
    }

   
    public double calcBalance() {
        double balance = curBal + (curBal * curRate);
        if (fixedDep) {
            balance -= 150; 
        }
        return balance;
    }
}
