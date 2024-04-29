// Import the necessary library and initialize the SDK
import { EvmWalletProvider } from '@tatumio/evm-wallet-provider';
import { TatumSDK, Network, Ethereum } from '@tatumio/tatum';

const tatumSdk = await TatumSDK.init<Ethereum>({network: Network.ETHEREUM,
     configureWalletProviders: [
         EvmWalletProvider,
     ]});

// Generate xpub using the generated mnemonic
const xpubDetails = await tatumSdk.walletProvider.use(EvmWalletProvider)
.generateXpub(mnemonic);

console.log(xpubDetails.xpub);  // This will print the generated xpub

await tatum.destroy()