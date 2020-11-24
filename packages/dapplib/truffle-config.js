require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift reflect stick social inflict drop swallow general'; 
let testAccounts = [
"0xf4d61e4b5913919b51798525a64b03a26d954a4cfc637d3a028e6493a464775a",
"0x50c8b63bd17e8d6838736fc5de4ff3019c764ff7c464dd8b150c32851d33fe10",
"0x1d8c9fa64f403ee80fdc11ad319887c6e878056291e8d01be375cce99718c0d4",
"0xf27fbbe8bc331c318e129263027e8da92d8e7edd3ae5c6fe7a30215542aff79e",
"0xc34baa042cd86885af9e970ba4c51e8d5c7b10901701330db800c93e255afef6",
"0x88ca6286d330a285145a25c26bccbf2306d25c082dcd8e0a02c67293055892f3",
"0x9b2e612408cb98cc02af023d7a3f6b3002a73ca31934e46f7ea0f963fa6d69fc",
"0x9b166c5c8b33f62c98ea48ea1958833d8fc47383fa917b37ffaf0af4e9ed1421",
"0x027cff9a200d9d55eb6f2d99e76dcc50ac77725ad9d3192434afaa28d36d2937",
"0xfcb02b842eb88e1671e5fe63b6fe068e20e43a9fa2d970d591320e75bfb25acc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
