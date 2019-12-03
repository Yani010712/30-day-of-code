this.removeDuplicates=function(head){
      //HackerRank gives us the head value. Assign to prev.
      let prev = head;
          while (prev) { //with our prev, we'll be moving through the next values.
              let next = prev.next;
              if (next && prev.data == next.data) { //If the two elements are equal to each other...
                  prev.next = next.next; //Basically overwriting the duplicate.
              } else { // get next prev.
                  prev = prev.next;
              }
          }
      return head;
  }