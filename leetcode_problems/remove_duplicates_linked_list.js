var deleteDuplicates = function(head) {
    if(!head) return null;
    
    let prev = head;
    let cur = head.next;
    
    while(cur) {
        if(prev.val === cur.val) {
            prev.next = cur.next;
        } else {
            prev = prev.next;
        }
        cur = cur.next;
    }
    
    return head;
};