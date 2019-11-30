if(root==null) {
    return -1; //Return -1; exit this function.
} //If root isn't null.
return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
//This returns the heights of left and right paths