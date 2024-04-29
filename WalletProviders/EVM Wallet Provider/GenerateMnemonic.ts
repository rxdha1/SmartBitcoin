// Import the necessary library and initialize the SDK
import { EvmWalletProvider } from '@tatumio/evm-wallet-provider';
import { TatumSDK, Network, Ethereum } from '@tatumio/tatum';

const tatumSdk = await TatumSDK.init<Ethereum>({network: Network.ETHEREUM,
     configureWalletProviders: [
         EvmWalletProvider,
     ]});

// Generate mnemonic using the EVM Wallet Provider submodule
const mnemonic = tatumSdk.walletProvider.use(EvmWalletProvider).generateMnemonic();

console.log(mnemonic);  // This will print the generated mnemonic

await tatum.destroy()