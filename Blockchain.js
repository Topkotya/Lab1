/**
 * Seminar 2.1 Blockchain primitive
 */

const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;


class Block {
    constructor(data){
        this.data = data;      // Here we simplify data, let it be just a simple string
        this.previousHash = null;
    }

    toHash(){
        const hashBytes = utf8ToBytes(this.data + this.previousHash);
        return SHA256(hashBytes);        // a hash as byte array
    }
}


class Blockchain {
    constructor() {
        this.chain = [new Block("Genesis Block")];
    }

    addBlock(block){
        block.previousHash = this.chain.at(-1).toHash();
        this.chain.push(block);
    }

    isValid(){
        return this.chain.slice(1).every((block, idx) => {
            const prev = this.chain[idx];
            const expected = prev.toHash();
            const got = block.previousHash;
            return got && expected.toString() === got.toString();
        });
    }
}

module.exports = { Block, Blockchain };
