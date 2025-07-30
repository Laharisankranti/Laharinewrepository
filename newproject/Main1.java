package newproject;

public class Main1 {
    public static void main(String[] args) {
        Person athlete = new Athlete();
        Person lazyPerson = new LazyPerson();

        System.out.println("== Athlete ==");
        athlete.eat();
        athlete.exercise();

        System.out.println("\n== Lazy Person ==");
        lazyPerson.eat();
        lazyPerson.exercise();
    }
}