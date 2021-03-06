"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ethers_1 = require("ethers");
var eth = require("./eth");
var util = require("./util");
var comptroller = require("./comptroller");
var cToken = require("./cToken");
var priceFeed = require("./priceFeed");
var comp = require("./comp");
var gov = require("./gov");
var api = require("./api");
var constants_1 = require("./constants");
// Turn off Ethers.js warnings
ethers_1.ethers.utils.Logger.setLogLevel(ethers_1.ethers.utils.Logger.levels.ERROR);
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
var Compound = function (provider, options) {
    if (provider === void 0) { provider = 'mainnet'; }
    if (options === void 0) { options = {}; }
    var originalProvider = provider;
    options.provider = provider || options.provider;
    provider = eth._createProvider(options);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var instance = __assign(__assign(__assign(__assign(__assign({ _originalProvider: originalProvider, _provider: provider }, comptroller), cToken), priceFeed), gov), { claimComp: comp.claimComp, delegate: comp.delegate, delegateBySig: comp.delegateBySig, createDelegateSignature: comp.createDelegateSignature });
    // Instance needs to know which network the provider connects to, so it can
    //     use the correct contract addresses.
    instance._networkPromise = eth.getProviderNetwork(provider).then(function (network) {
        delete instance._networkPromise;
        instance._network = network;
    });
    return instance;
};
Compound.eth = eth;
Compound.api = api;
Compound.util = util;
Compound._ethers = ethers_1.ethers;
Compound.decimals = constants_1.decimals;
Compound.comp = {
    getCompBalance: comp.getCompBalance,
    getCompAccrued: comp.getCompAccrued
};
Compound.constants = constants_1.constants;
Compound.errorCodes = constants_1.errorCodes;
module.exports = Compound;
//# sourceMappingURL=index.js.map