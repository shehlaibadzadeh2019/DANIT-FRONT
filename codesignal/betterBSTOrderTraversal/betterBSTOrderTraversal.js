//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function betterOrderTraversal(root) {
   return [].concat([inOrder(root)], [preOrder(root)], [postOrder(root)]).sort((e1, e2) => {
   		if (e1.toString() < e2.toString()) return -1;
   		if (e1.toString() > e2.toString()) return 1;
   		return 0;
   })[0];
}

function inOrder (root) {// In-order: L - C - R
    return lookThrough(root.left, "left").concat(root.value, lookThrough(root.right, "right")); 
}
function preOrder (root) {// Pre-order: C - L - R
    return [].concat(root.value, lookThrough(root.left, "left"), lookThrough(root.right, "right"));
}
function postOrder (root) {//Post-order: L - R - C
	return lookThrough(root.left, "left").reverse().concat(lookThrough(root.right, "right").reverse(), root.value);
}

function lookThrough(root, side, res = []){
    return root === null ?  res : lookThrough (root[side], side, res.concat(root.value));
}

function inOrder2 (root, stage = 0, algorythm = ["left", "value", "right"], res = []) {
	if (root[stage]){
		return (root[algorythm][stage])
	}else {
		res.push(root.value)
		return inOrder2(root, stage + 1, algorythm, res);
	}
}