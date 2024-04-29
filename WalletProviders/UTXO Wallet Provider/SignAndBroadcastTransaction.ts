// Import the necessary library and initialize the SDK
import { UtxoWalletProvider } from '@tatumio/utxo-wallet-provider';
import { TatumSDK, Network, Bitcoin } from '@tatumio/tatum';

const tatumSdk = await TatumSDK.init<Bitcoin>({network: Network.BITCOIN,
     configureWalletProviders: [
         UtxoWalletProvider,
     ]});

// Define your transaction details
const payloadUtxo = {
   fromAddress: [{ address: 'YOUR_WALLET_ADDRESS', privateKey: 'YOUR_PRIVATE_KEY'}],
   to: [{ address: 'TARGET_WALLET_ADDRESS', value: 0.0001 }], // BTC_AMOUNT
   fee: '0.00001', // BTC_AMOUNT
   changeAddress: 'CHANGE_WALLET_ADDRESS',
}

// Sign and broadcast the transaction using the UTXO Wallet Provider submodule
const txHash = await tatumSdk.walletProvider.use(UtxoWalletProvider)
.signAndBroadcast(payloadUtxo);

// This will print the transaction hash of the broadcasted transaction
console.log(txHash);

await tatum.destroy();
