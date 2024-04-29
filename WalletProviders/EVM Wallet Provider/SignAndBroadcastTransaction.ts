// Import the necessary library and initialize the SDK
import { EvmWalletProvider } from '@tatumio/evm-wallet-provider';
import { TatumSDK, Network, Ethereum } from '@tatumio/tatum';

const tatumSdk = await TatumSDK.init<Ethereum>({network: Network.ETHEREUM,
     configureWalletProviders: [
         EvmWalletProvider,
     ]});

// Define your transaction details
const payload = {
  privateKey: 'YOUR_PRIVATE_KEY',
  // other fields for your transaction...
}

// Sign and broadcast the transaction using the EVM Wallet Provider submodule
const txHash = await tatumSdk.walletProvider.use(EvmWalletProvider)
.signAndBroadcast(payload);

// This will print the transaction hash of the broadcasted transaction
console.log(txHash);

await tatum.destroy()