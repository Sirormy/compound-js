import { ethers } from 'ethers';
import * as eth from './eth';
import * as util from './util';
import * as comp from './comp';
import * as api from './api';
import { Provider, CompoundOptions, CompoundInstance } from './types';
/**
 * Creates an instance of the Compound.js SDK.
 *
 * @param {Provider | string} [provider] Optional Ethereum network provider.
 *     Defaults to Ethers.js fallback mainnet provider.
 * @param {object} [options] Optional provider options.
 *
 * @example
 * ```
 * var compound = new Compound(window.ethereum); // web browser
 *
 * var compound = new Compound('http://127.0.0.1:8545'); // HTTP provider
 *
 * var compound = new Compound(); // Uses Ethers.js fallback mainnet (for testing only)
 *
 * var compound = new Compound('ropsten'); // Uses Ethers.js fallback (for testing only)
 *
 * // Init with private key (server side)
 * var compound = new Compound('https://mainnet.infura.io/v3/_your_project_id_', {
 *   privateKey: '0x_your_private_key_', // preferably with environment variable
 * });
 *
 * // Init with HD mnemonic (server side)
 * var compound = new Compound('mainnet' {
 *   mnemonic: 'clutch captain shoe...', // preferably with environment variable
 * });
 * ```
 *
 * @returns {object} Returns an instance of the Compound.js SDK.
 */
declare const Compound: {
    (provider?: Provider | string, options?: CompoundOptions): CompoundInstance;
    eth: typeof eth;
    api: typeof api;
    util: typeof util;
    _ethers: typeof ethers;
    decimals: {
        cBAT: number;
        cCOMP: number;
        cDAI: number;
        cETH: number;
        cREP: number;
        cSAI: number;
        cUNI: number;
        cUSDC: number;
        cUSDT: number;
        cWBTC: number;
        cZRX: number;
        BAT: number;
        COMP: number;
        DAI: number;
        ETH: number;
        REP: number;
        SAI: number;
        UNI: number;
        USDC: number;
        USDT: number;
        WBTC: number;
        ZRX: number;
        KNC: number;
        LINK: number;
        BTC: number;
    };
    comp: {
        getCompBalance: typeof comp.getCompBalance;
        getCompAccrued: typeof comp.getCompAccrued;
    };
    constants: {
        PriceFeed: string;
        Maximillion: string;
        CompoundLens: string;
        GovernorAlpha: string;
        Comptroller: string;
        Reservoir: string;
        KNC: string;
        LINK: string;
        BTC: string;
        cBAT: string;
        cCOMP: string;
        cDAI: string;
        cETH: string;
        cREP: string;
        cSAI: string;
        cUSDC: string;
        cUSDT: string;
        cWBTC: string;
        cZRX: string;
        BAT: string;
        COMP: string;
        DAI: string;
        ETH: string;
        REP: string;
        SAI: string;
        UNI: string;
        USDC: string;
        USDT: string;
        WBTC: string;
        ZRX: string;
    };
    errorCodes: {
        comptroller: {
            codes: {
                0: {
                    error: string;
                    description: string;
                    hint: string;
                };
                1: {
                    error: string;
                    description: string;
                    hint: string;
                };
                2: {
                    error: string;
                    description: string;
                    hint: string;
                };
                3: {
                    error: string;
                    description: string;
                    hint: string;
                };
                4: {
                    error: string;
                    description: string;
                    hint: string;
                };
                5: {
                    error: string;
                    description: string;
                    hint: string;
                };
                6: {
                    error: string;
                    description: string;
                    hint: string;
                };
                7: {
                    error: string;
                    description: string;
                    hint: string;
                };
                8: {
                    error: string;
                    description: string;
                    hint: string;
                };
                9: {
                    error: string;
                    description: string;
                    hint: string;
                };
                10: {
                    error: string;
                    description: string;
                    hint: string;
                };
                11: {
                    error: string;
                    description: string;
                    hint: string;
                };
                12: {
                    error: string;
                    description: string;
                    hint: string;
                };
                13: {
                    error: string;
                    description: string;
                    hint: string;
                };
                14: {
                    error: string;
                    description: string;
                    hint: string;
                };
                15: {
                    error: string;
                    description: string;
                    hint: string;
                };
                16: {
                    error: string;
                    description: string;
                    hint: string;
                };
                17: {
                    error: string;
                    description: string;
                    hint: string;
                };
            };
            info: {
                0: {
                    error: string;
                    description: string;
                    hint: string;
                };
                1: {
                    error: string;
                    description: string;
                    hint: string;
                };
                2: {
                    error: string;
                    description: string;
                    hint: string;
                };
                3: {
                    error: string;
                    description: string;
                    hint: string;
                };
                4: {
                    error: string;
                    description: string;
                    hint: string;
                };
                5: {
                    error: string;
                    description: string;
                    hint: string;
                };
                6: {
                    error: string;
                    description: string;
                    hint: string;
                };
                7: {
                    error: string;
                    description: string;
                    hint: string;
                };
                8: {
                    error: string;
                    description: string;
                    hint: string;
                };
                9: {
                    error: string;
                    description: string;
                    hint: string;
                };
                10: {
                    error: string;
                    description: string;
                    hint: string;
                };
                11: {
                    error: string;
                    description: string;
                    hint: string;
                };
                12: {
                    error: string;
                    description: string;
                    hint: string;
                };
                13: {
                    error: string;
                    description: string;
                    hint: string;
                };
                14: {
                    error: string;
                    description: string;
                    hint: string;
                };
                15: {
                    error: string;
                    description: string;
                    hint: string;
                };
                16: {
                    error: string;
                    description: string;
                    hint: string;
                };
                17: {
                    error: string;
                    description: string;
                    hint: string;
                };
                18: {
                    error: string;
                    description: string;
                    hint: string;
                };
            };
        };
        ctoken: {
            codes: {
                0: {
                    error: string;
                    description: string;
                    hint: string;
                };
                1: {
                    error: string;
                    description: string;
                    hint: string;
                };
                2: {
                    error: string;
                    description: string;
                    hint: string;
                };
                3: {
                    error: string;
                    description: string;
                    hint: string;
                };
                4: {
                    error: string;
                    description: string;
                    hint: string;
                };
                5: {
                    error: string;
                    description: string;
                    hint: string;
                };
                6: {
                    error: string;
                    description: string;
                    hint: string;
                };
                7: {
                    error: string;
                    description: string;
                    hint: string;
                };
                8: {
                    error: string;
                    description: string;
                    hint: string;
                };
                9: {
                    error: string;
                    description: string;
                    hint: string;
                };
                10: {
                    error: string;
                    description: string;
                    hint: string;
                };
                11: {
                    error: string;
                    description: string;
                    hint: string;
                };
                12: {
                    error: string;
                    description: string;
                    hint: string;
                };
                13: {
                    error: string;
                    description: string;
                    hint: string;
                };
                14: {
                    error: string;
                    description: string;
                    hint: string;
                };
                15: {
                    error: string;
                    description: string;
                    hint: string;
                };
                16: {
                    error: string;
                    description: string;
                    hint: string;
                };
                17: {
                    error: string;
                    description: string;
                    hint: string;
                };
            };
            info: {
                0: {
                    error: string;
                    description: string;
                    hint: string;
                };
                1: {
                    error: string;
                    description: string;
                    hint: string;
                };
                2: {
                    error: string;
                    description: string;
                    hint: string;
                };
                3: {
                    error: string;
                    description: string;
                    hint: string;
                };
                4: {
                    error: string;
                    description: string;
                    hint: string;
                };
                5: {
                    error: string;
                    description: string;
                    hint: string;
                };
                6: {
                    error: string;
                    description: string;
                    hint: string;
                };
                7: {
                    error: string;
                    description: string;
                    hint: string;
                };
                8: {
                    error: string;
                    description: string;
                    hint: string;
                };
                9: {
                    error: string;
                    description: string;
                    hint: string;
                };
                10: {
                    error: string;
                    description: string;
                    hint: string;
                };
                11: {
                    error: string;
                    description: string;
                    hint: string;
                };
                12: {
                    error: string;
                    description: string;
                    hint: string;
                };
                13: {
                    error: string;
                    description: string;
                    hint: string;
                };
                14: {
                    error: string;
                    description: string;
                    hint: string;
                };
                15: {
                    error: string;
                    description: string;
                    hint: string;
                };
                16: {
                    error: string;
                    description: string;
                    hint: string;
                };
                17: {
                    error: string;
                    description: string;
                    hint: string;
                };
                18: {
                    error: string;
                    description: string;
                    hint: string;
                };
            };
        };
    };
};
export = Compound;
