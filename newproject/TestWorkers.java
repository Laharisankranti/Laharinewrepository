package newproject;

class Worker {
    protected String name;
    protected double salaryRate;

    public Worker(String name, double salaryRate) {
        this.name = name;
        this.salaryRate = salaryRate;
    }

    public double pay(int hours) {
        return 0.0; 
    }

    public void displayPay(int hours) {
        System.out.println("Worker Name: " + name);
        System.out.println("Pay for " + hours + " hours: ₹" + pay(hours));
    }
}

class DailyWorker extends Worker {

    public DailyWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

   
    public double pay(int hours) {
        return salaryRate * hours;
    }
}


class SalariedWorker extends Worker {

    public SalariedWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

    
    public double pay(int hours) {
        return salaryRate * 40;
    }
}

public class TestWorkers {
    public static void main(String[] args) {
        DailyWorker dw = new DailyWorker("Alice", 150);
        SalariedWorker sw = new SalariedWorker("Bob", 200);

        System.out.println("Daily Worker Payment:");
        dw.displayPay(45); 

        System.out.println("\nSalaried Worker Payment:");
        sw.displayPay(50); 
    }
}

