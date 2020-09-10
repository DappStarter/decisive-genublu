require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain uncover hover prison only turkey'; 
let testAccounts = [
"0xddd0e0f92a18b5ee8d87d7a2ff6011ad9597453feeccc52a707599540f804f5d",
"0xb4dc377bc31da8762eda13229a8a0e29f290d5e8710ec7ca6bc7f5806ae72b9a",
"0x5ca05b7968742cbd2d169c4a659ac6e71b0993b21df87fb8a9ca4aaf0246c146",
"0x923ec160da8c9274c6315011a2647f8f07033c07e8d133039f54be37ff2b7fe8",
"0x24130aa62bf4f52aefb5a15519a4ada90ae24e9cba4c23300c2708f2821645bf",
"0x1b1577e5665777403871806474f8e11c75d07827ab71a6540692dc6a23bc6b9a",
"0x1714fe9d54c134792eb79355adeb881295ac22e03f0c829b0a4a3791888cc897",
"0x35123ce2c199ea96b5d8c97b06fed350c3004b5edfb9dc3ded7682fd6bd2c31a",
"0x7761edc48b5b71d3c435f225a5a123e09134469a5d5655922e3101059ce0eb36",
"0xfd94cd6dc5bf454dd735c221cf01d8e59f3d17a193998341ca83ec4220fd9812"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
