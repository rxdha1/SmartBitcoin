// Import the necessary library and initialize the SDK
import { UtxoWalletProvider } from '@tatumio/utxo-wallet-provider';
import { TatumSDK, Network, Bitcoin } from '@tatumio/tatum';

const tatumSdk = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN,
     configureWalletProviders: [
         UtxoWalletProvider,
     ]});

// Generate private key from mnemonic
const privateKey = await tatumSdk.walletProvider.use(UtxoWalletProvider)
.generatePrivateKeyFromMnemonic(mnemonic, 0);

console.log(privateKey);  // This will print the generated private key

await tatum.destroy();

