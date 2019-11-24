

	this.insert=function(head,data){
        if (head == null) { 
            return new Node(data)
             }
        head.next = this.insert(head.next, data)
        return head

    };
