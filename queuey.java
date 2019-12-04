

import java.util.LinkedList;

public class Queuey {
    LinkedList queue;

    //Making a queue instance
    public Queuey(){
        queue = new LinkedList();
    }
    //Is the queue empty?
    public boolean isEmpty(){
       return queue.isEmpty();
    }
    //Size of queue
    public int size() {
        return queue.size();
    }
    // Enqueuing an item
    public void enqueue(int n){
        queue.addLast(n);
    }
    //Dequeue an item
    public int dequeue(){
        return (int) queue.remove(0);
    }
    //Peek at the first item 
    public int peek(){
        return (int) queue.get(0);
    }

     public static void main(String[] args) {
        Queuey numberQueue = new Queuey();
        numberQueue.enqueue(5);
        numberQueue.enqueue(7);
        numberQueue.enqueue(6);
        System.out.println("First out: " + numberQueue.dequeue());
        System.out.println("Peek at second item: " + numberQueue.peek());
        System.out.println("Second out: " + numberQueue.dequeue());
        System.out.println("Third out: " + numberQueue.dequeue());
    }
}