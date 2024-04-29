import { TatumSDK, Network, Bitcoin } from '@tatumio/tatum'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const tatum = await TatumSDK.init<Bitcoin>({
  network: Network.BITCOIN,
  apiKey: {
    v4: process.env.TESTNET_API_KEY,
  },
});

const balance = await tatum.address.getBalance({
  addresses: [
    '1FWQiwK27EnGXb6BiBMRLJvunJQZZPMcGd',
  ],
})
await tatum.destroy()