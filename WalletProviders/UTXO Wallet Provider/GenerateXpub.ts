// Import the necessary library and initialize the SDK
import { UtxoWalletProvider } from '@tatumio/utxo-wallet-provider';
import { TatumSDK, Network, Bitcoin } from '@tatumio/tatum';

const tatumSdk = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN,
     configureWalletProviders: [
         UtxoWalletProvider,
     ]});

// Generate xpub using the generated mnemonic
const xpubDetails = await tatumSdk.walletProvider.use(UtxoWalletProvider)
.generateXpub(mnemonic);

console.log(xpubDetails.xpub);  // This will print the generated xpub

await tatum.destroy();