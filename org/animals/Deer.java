package org.animals;

public class Deer extends Animal {
    public Deer(String color, int age, double weight) {
        super(color, age, weight);
    }

    public boolean isVegetarian() {
        return true;
    }

    public boolean canClimb() {
        return false;
    }

    public String sound() {
        return "Bleat";
    }
}
