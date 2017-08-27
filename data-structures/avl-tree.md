# AVL Tree
AVL tree are the answer to the problem that BST have: BST can easily get out of balance. Even if it's not the worst case scenario of ascending or descending lists being added, even a random distribution on numbers on a BST is going to pretty heavy in places. There are several ways to balance these trees and we're going to tackle one of them: AVL trees. AVL is the initials of its authors: Georgy Adelson-Velsky and Evgenii Landis.

AVLs are specialized BSTs. That is to say a valid AVL tree is always a valid BST (but not necessarily vice versa.) When you add a new value to a AVL tree, you do it the same way. The only difference is on the way up your recursive calls you check to see if the node is balanced after you added the new node. A tree is out of balance if its subtrees' difference of heights is greater than one.

So what's the benefit of all this extra effort? We can now guarantee that we won't hit those bad or worst case scenarios of having greatly out-of-balance trees and guarantee we won't hit the O(n) cases. Our worst case becomes O(log n).

So let's go through the hardest part of AVL trees, the rebalances (actually deletes may be harder but we're not going to do them!) The basic idea is that if one side of tree gets too heavy (ie the max height of one of its children is two more than the max height of the other child) then we need to perform a rotation to get the tree back in balance. Let's take a look at the most basic rotation.
