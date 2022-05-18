var reverseList = function(head) {
    let current = head;
    let prev = null;
    
    while (current != null) {
        let nxt = current.next;
        current.next = prev;
        prev = current;
        current = nxt;
    }
    return prev;
};