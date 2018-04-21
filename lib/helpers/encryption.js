'use strict';
const crypto = require('crypto');
const algo = 'aes-256-cbc';

module.exports = {
  encryptWithHex,
  decryptWithHex,
  encryptWithBase64,
  decryptWithBase64
};

function encryptWithHex(key, text) {
  return _encrypt(key, 'hex', text);
}

function decryptWithHex(key, text) {
  return _decrypt(key, 'hex', text);
}

function encryptWithBase64(key, text) {
  return _encrypt(key, 'base64', text);
}

function decryptWithBase64(key, text) {
  return _decrypt(key, 'base64', text);
}

function _encrypt(key, conversion, text) {
  let cipher = crypto.createCipher(algo, key);
  let crypted = cipher.update(text, 'utf8', conversion);
  crypted += cipher.final(conversion);
  return crypted;
}

function _decrypt(key, conversion, text) {
  let decipher = crypto.createDecipher(algo, key);
  let dec = decipher.update(text, conversion, 'utf8');
  dec += decipher.final('utf8');
  return dec;
}
