
// @ts-nocheck

import { Client } from './dist';
// import { Client } from './src/client/index';

declare global {
    interface Window {
        negotiator?: any;
    }
}
    
// ACTIVE
window.negotiator = new Client({
    type: 'active',
    issuers: [
        { collectionID: 'devcon', tokenConfigURI: "http://localhost:3002/tokenConfig.json" },
        { collectionID: 'rinkeby-punk', contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'rinkeby-punk' },
        { collectionID: 'expansion-punk', contract: '0x0d0167a823c6619d430b1a96ad85b888bcf97c37', chain: 'eth' },
        { collectionID: 'women-tribe', contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'stl-rnd-women-tribe-nfts' },
        { collectionID: 'zed', contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'stl-rnd-zed' },
        { collectionID: 'stl-rnd-bayc-derivatives', contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'stl-rnd-bayc-derivatives' },
        { collectionID: 'stl-rnd-riot-racers', contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'stl-rnd-riot-racers' },
    ],
    options: {
        overlay: {
            openingHeading: "Open a new world of discounts available with your tokens.",
            issuerHeading: "Get discount with Ticket",
            repeatAction: "try again",
            theme: "light",
            position: "bottom-right"
        },
        filters: {},
    }
});

window.negotiator.on("tokens-selected", (tokens:any) => {
    console.log(tokens);
});

window.negotiator.on("token-proof", (proof:any) => {
    console.log(proof);
});

window.negotiator.negotiate();

// PASSIVE

// const negotiator = new Client({
//     type: 'passive',
//     issuers: [
//         'devcon',
//         { contract: '0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656', chain: 'rinkeby', openSeaSlug: 'rinkeby-punk' },
//         { contract: '0x0d0167a823c6619d430b1a96ad85b888bcf97c37', chain: 'eth' }
//     ],
//     options: {}
// });

// negotiator.on('tokens', (issuerTokens) => {

//     // use tokens
//     console.log(issuerTokens);

// });

// negotiator.on("token-proof", (tokenProof) => {

//     // use proof

// });

// // invoke

// negotiator.negotiate();
