package newproject;

abstract class Transport {
    public abstract void startEngine();
    public abstract void stopEngine();
}

// Subclass Car
class Carnew extends Transport {
    @Override
    public void startEngine() {
        System.out.println("Car engine started.");
    }

    @Override
    public void stopEngine() {
        System.out.println("Car engine stopped.");
    }
}

// Subclass Motorcycle
class Motorcycle extends Transport {
    @Override
    public void startEngine() {
        System.out.println("Motorcycle engine started.");
    }

    @Override
    public void stopEngine() {
        System.out.println("Motorcycle engine stopped.");
    }
}

// Main class to test the functionality
public class TransportDemo {
    public static void main(String[] args) {
        Transport myCar = new Carnew();
        Transport myMotorcycle = new Motorcycle();

        myCar.startEngine();
        myCar.stopEngine();

        myMotorcycle.startEngine();
        myMotorcycle.stopEngine();
    }
}