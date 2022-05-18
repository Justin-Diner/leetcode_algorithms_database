var removeElements = function(head, val) {
    let sentinel = new ListNode(0, head);
    let pred = sentinel;
    
    while (pred.next) {
        if (pred.next.val == val) {
            pred.next = pred.next.next;
        } else {
            pred = pred.next;
        }
    }
    return sentinel.next;
};