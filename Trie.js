/**
 * Seminar 2.5 Simple Trie
 */


class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!node.children[letter]) {
                node.children[letter] = new TrieNode(letter);
            }
            node = node.children[letter];
        }
        node.isWord = true;
    }

    hasNode(word){
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const next = node.children[word[i]];
            if (!next) return false;
            node = next;
        }
        return node.isWord;
    }

    getAllNodes(){
        const acc = [];
        const visit = (n) => {
            acc.push(n);
            for (const k in n.children) visit(n.children[k]);
        };
        visit(this.root);
        return acc;
    }
}

module.exports = { Trie };
