const secp = require('ethereum-cryptography/secp256k1');
const { toHex } = require('ethereum-cryptography/utils');

const generateKeys = () => {
  const randomPrivateKey = secp.utils.randomPrivateKey();
  const matchingPublicKey = secp.getPublicKey(randomPrivateKey);
  console.log({ privateKey: toHex(randomPrivateKey), publicKey: toHex(matchingPublicKey) });
};

generateKeys();
