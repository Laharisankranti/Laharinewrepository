package newproject;

class Vehicle {
    String name;

    public Vehicle(String name) {
        this.name = name;
    }

    public void start() {
        System.out.println(name + " is starting.");
    }

    public void stop() {
        System.out.println(name + " is stopping.");
    }
}


class Truck extends Vehicle {
    public Truck(String name) {
        super(name);
    }

    public void loadCargo() {
        System.out.println(name + " is loading cargo.");
    }
}


class Bus extends Vehicle {
    public Bus(String name) {
        super(name);
    }

    public void pickupPassengers() {
        System.out.println(name + " is picking up passengers.");
    }
}


class Car extends Vehicle {
    public Car(String name) {
        super(name);
    }

    public void playMusic() {
        System.out.println(name + " is playing music.");
    }
}


public class Road {
    public static void main(String[] args) {
        Truck truck = new Truck("Volvo Truck");
        Bus bus = new Bus("City Bus");
        Car car = new Car("Toyota Car");

        
        truck.start();
        truck.loadCargo();
        truck.stop();

        System.out.println();

        bus.start();
        bus.pickupPassengers();
        bus.stop();

        System.out.println();

        car.start();
        car.playMusic();
        car.stop();
    }
}