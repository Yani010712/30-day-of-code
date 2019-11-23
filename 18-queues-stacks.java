public class Solution {
    Queue<Character> queue = new LinkedList<Character>();
    Stack<Character> stack = new Stack<Character>();

    void pushCharacter(char ch){
        this.stack.push(ch);
    }
    
    void enqueueCharacter(char ch){
        this.queue.add(ch);
    }
    
    char popCharacter(){
        return this.stack.pop();
    }

    char dequeueCharacter(){
        return this.queue.remove();
    }
    
}
    