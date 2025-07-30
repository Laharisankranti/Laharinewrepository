package org.animals;

public class Monkey extends Animal {
    public Monkey(String color, int age, double weight) {
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