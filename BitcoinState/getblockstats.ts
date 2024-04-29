import { TatumSDK, Network, Bitcoin } from '@tatumio/tatum'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const tatum = await TatumSDK.init<Bitcoin>({
  network: Network.BITCOIN,
  apiKey: {
    v4: process.env.TESTNET_API_KEY,
  },
});

const blockCount = await tatum.rpc.getBlockStats('0000000000000000001b4fedbfb3672963c37f965686c2bf6350e32e77f9941f')
await tatum.destroy()