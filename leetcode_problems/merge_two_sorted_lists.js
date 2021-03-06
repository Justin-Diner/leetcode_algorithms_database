var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1);
    let tail = dummy; 
    
    while (l1 != null && l2 != null){
        if (l1.val <= l2.val) {
            tail.next = l1;
            tail = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            tail = l2;
            l2 = l2.next;
        }
    }
    if (l1 == null) tail.next = l2;
    else tail.next = l1;
    return dummy.next;
};