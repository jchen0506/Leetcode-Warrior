/*
merge 2 sorted list
return a new sorted list

1->3->5->7
2->4->6->8
1->2->3->   -> 8

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let pointer1 = l1;
  let pointer2 = l2;
  let newlist = new ListNode();
  let last = newlist;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      let tempnode = new ListNode(l1.val);
      last.next = tempnode;
      last = tempnode;
      l1 = l1.next;
    } else {
      let tempnode = new ListNode(l2.val);
      last.next = tempnode;
      last = tempnode;
      l2 = l2.next;
    }
  }

  while (l1 !== null) {
    let tempnode = new ListNode(l1.val);
    last.next = tempnode;
    last = tempnode;
    l1 = l1.next;
  }

  while (l2 !== null) {
    let tempnode = new ListNode(l2.val);
    last.next = tempnode;
    last = tempnode;
    l2 = l2.next;
  }
  return newlist.next;
};

//input: heads of both linked list
//output: new list
//no time constrain
//4:10pm

// 1 -> 3 ->null
//      |
// 2 -> 4 -> 6 -> 8
//      |

// 1->2-> null
//             | last pointer

// insert 3
// iteration 1
// first =1
// second = 2
// 1st < 2nd 1st->null
// 3 > 2 1->2->null
//null -> 1->2->3
