package org.animals;

public class Lion extends Animal {
    public Lion(String color, int age, double weight) {
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