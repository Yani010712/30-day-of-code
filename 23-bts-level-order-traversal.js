this.levelOrder = function(root) {
  

    let queue = [root]; 
        //While queue has a length.
        while(queue.length) {
            //Shift removes the first element in array and returns it to our variable.
            let treeNode = queue.shift();
        
            process.stdout.write(treeNode.data + ' ');
            //If treeNode has a left child, push it to the queue.
            if(treeNode.left) {
            queue.push(treeNode.left);
            }
            //If treeNode has a right child, push it to the queue.
            if(treeNode.right) {
            queue.push(treeNode.right);
            }
    }
}



