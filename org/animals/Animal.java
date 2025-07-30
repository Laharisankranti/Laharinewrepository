package org.animals;


public abstract class Animal {
    protected String color;
    protected int age;
    protected double weight;

    public Animal(String color, int age, double weight) {
        this.color = color;
        this.age = age;
        this.weight = weight;
    }

    public abstract boolean isVegetarian();
    public abstract boolean canClimb();
    public abstract String sound();

    public void displayInfo() {
        System.out.println("Color: " + color);
        System.out.println("Age: " + age);
        System.out.println("Weight: " + weight + "kg");
        System.out.println("Vegetarian: " + isVegetarian());
        System.out.println("Can Climb: " + canClimb());
        System.out.println("Sound: " + sound());
        System.out.println();
    }
}