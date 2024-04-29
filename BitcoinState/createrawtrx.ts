import { TatumSDK, Network, Bitcoin } from '@tatumio/tatum'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const tatum = await TatumSDK.init<Bitcoin>({
  network: Network.BITCOIN,
  apiKey: {
    v4: process.env.TESTNET_API_KEY,
  },
});

const result = await tatum.rpc.createRawTransaction(
  [
    {
      "txid": "abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234abcd1234",
      "vout": 0
    }
  ],
  {
    "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa": 0.01
  }
)
await tatum.destroy()