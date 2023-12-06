const ethers = require("ethers");

// Mnemonic
const mnemonic = process.argv[2];

if (!mnemonic) {
  console.error("no mnemonic!!!");
  process.exit(1);
}

const wallet = ethers.Wallet.fromPhrase(mnemonic);
const privateKey = wallet.privateKey;

console.log("Mnemonic:", mnemonic);
console.log("Private Key:", privateKey);
