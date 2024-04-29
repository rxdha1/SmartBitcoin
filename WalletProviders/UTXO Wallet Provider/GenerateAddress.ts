// Import the necessary library and initialize the SDK
import { UtxoWalletProvider } from '@tatumio/utxo-wallet-provider';
import { TatumSDK, Network, Bitcoin } from '@tatumio/tatum';

const tatumSdk = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN,
     configureWalletProviders: [
         UtxoWalletProvider,
     ]});

// Generate address from mnemonic or xpub
const addressFromMnemonic = await tatumSdk.walletProvider
.use(UtxoWalletProvider).generateAddressFromMnemonic(mnemonic, 0);
const addressFromXpub = await tatumSdk.walletProvider
.use(UtxoWalletProvider).generateAddressFromXpub(xpubDetails.xpub, 0);

// This will print the generated address from mnemonic
console.log(addressFromMnemonic);
// This will print the generated address from xpub
console.log(addressFromXpub);

await tatum.destroy();
