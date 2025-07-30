package newproject;

import java.util.HashMap;
import java.util.Map;

public class FrequencyCounter {
    public static void main(String[] args) {
        
        int[] arr = {3, 5, 3, 2, 5, 1, 3, 2, 4, 5};

        
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        
        for (int num : arr) {
            if (frequencyMap.containsKey(num)) {
                frequencyMap.put(num, frequencyMap.get(num) + 1);
            } else {
                frequencyMap.put(num, 1);
            }
        }

        
        System.out.println("Element : Frequency");
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("   " + entry.getKey() + "    :    " + entry.getValue());
        }
    }
}