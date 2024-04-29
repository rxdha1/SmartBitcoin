// Import the necessary library and initialize the SDK
import { EvmWalletProvider } from '@tatumio/evm-wallet-provider';
import { TatumSDK, Network, Ethereum } from '@tatumio/tatum';

const tatumSdk = await TatumSDK.init<Ethereum>({network: Network.ETHEREUM,
     configureWalletProviders: [
         EvmWalletProvider,
     ]});

// Generate address from mnemonic or xpub
const addressFromMnemonic = await tatumSdk.walletProvider
.use(EvmWalletProvider).generateAddressFromMnemonic(mnemonic, 0);
const addressFromXpub = await tatumSdk.walletProvider
.use(EvmWalletProvider).generateAddressFromXpub(xpubDetails.xpub, 0);

// This will print the generated address from mnemonic
console.log(addressFromMnemonic);
// This will print the generated address from xpub
console.log(addressFromXpub);

await tatum.destroy()
