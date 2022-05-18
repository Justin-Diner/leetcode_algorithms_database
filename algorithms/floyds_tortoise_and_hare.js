// Uses a fast and slow pointer to ensure they meet. Takes O(n) time which is the total amount of linked list. 

var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        
        if (fast === slow) return true
    }
    return false;
};