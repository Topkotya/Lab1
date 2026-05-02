/**
 * Seminar 2.3 Binary search tree
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node){
        if (!this.root) {
            this.root = node;
            return;
        }
        this._attach(this.root, node);
    }

    _attach(parent, node) {
        if (node.data < parent.data) {
            if (!parent.left) parent.left = node;
            else this._attach(parent.left, node);
        } else if (node.data > parent.data) {
            if (!parent.right) parent.right = node;
            else this._attach(parent.right, node);
        }
    }

    hasNode(data){
        return this._contains(this.root, data);
    }

    _contains(subtree, data) {
        if (!subtree) return false;
        if (data === subtree.data) return true;
        return data < subtree.data
            ? this._contains(subtree.left, data)
            : this._contains(subtree.right, data);
    }
}



module.exports = { Node, Tree }
