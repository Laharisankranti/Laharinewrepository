package zoo;

import org.animals.*;

public class VandalurZoo {
    public static void main(String[] args) {
        Lion lion = new Lion("Golden", 5, 190.5);
        Tiger tiger = new Tiger("Orange with stripes", 4, 220.3);
        Deer deer = new Deer("Brown", 2, 85.0);
        Monkey monkey = new Monkey("Black", 3, 35.2);
        Elephant elephant = new Elephant("Gray", 10, 500.0);
        Girafee girafee = new Girafee("Yellow with patches", 6, 400.0);

        lion.displayInfo();
        tiger.displayInfo();
        deer.displayInfo();
        monkey.displayInfo();
        elephant.displayInfo();
        girafee.displayInfo();
    }
}