// Import the necessary library and initialize the SDK
import { UtxoWalletProvider } from '@tatumio/utxo-wallet-provider';
import { TatumSDK, Network, Bitcoin } from '@tatumio/tatum';

const tatumSdk = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN,
     configureWalletProviders: [
         UtxoWalletProvider,
     ]});

// Generate mnemonic using the UTXO Wallet Provider submodule
const mnemonic = tatumSdk.walletProvider.use(UtxoWalletProvider).generateMnemonic();

console.log(mnemonic);  // This will print the generated mnemonic

await tatum.destroy();