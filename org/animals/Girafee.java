package org.animals;

public class Girafee extends Animal {
    public Girafee(String color, int age, double weight) {
        super(color, age, weight);
    }

    public boolean isVegetarian() {
        return false;
    }

    public boolean canClimb() {
        return false;
    }

    public String sound() {
        return "Roar";
    }
}