import { TatumSDK, Network, Bitcoin } from '@tatumio/tatum'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const tatum = await TatumSDK.init<Bitcoin>({
  network: Network.BITCOIN,
  apiKey: {
    v4: process.env.TESTNET_API_KEY,
  },
});

const blockchainInfo = await tatum.rpc.getBlockChainInfo()
await tatum.destroy()